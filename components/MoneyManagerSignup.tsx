"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
// @ts-ignore: no declaration file for 'react-select-country-list'
import countryList from "react-select-country-list";
import styles from "./MoneyManagerSignup.module.css";

type ITIOptions = any;
type ITIInstance = any;

type FormVals = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;   // ISO2 (ae, gb, etc.)
  phoneRaw: string;  // raw value in the box
  phoneE164?: string;
};

type Props = {
  onSubmitForm?: (payload: {
    firstName: string;
    lastName: string;
    email: string;
    country?: string;   // ISO2
    phone: string;      // E.164
    phoneRaw: string;
    phoneE164?: string;
    isValidPhone: boolean;
  }) => void;
};

/* -------- react-select styles -------- */
const selectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    background: "#f9f9f9",
    borderRadius: 4,
    border: state.isFocused
      ? "1px solid #00e5d4"
      : "1px solid rgba(0, 0, 0, 0.18)",
    boxShadow: "none",
    minHeight: 46,
    cursor: "pointer",
  }),
  valueContainer: (b: any) => ({ ...b, padding: "0 12px" }),
  singleValue: (b: any) => ({ ...b, color: "#111827", fontSize: 14 }),
  input: (b: any) => ({ ...b, color: "#111827" }),
  placeholder: (b: any) => ({
    ...b,
    color: "#9ca3af",
    fontSize: 14,
  }),
  dropdownIndicator: (b: any) => ({
    ...b,
    color: "#9ca3af",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  menu: (b: any) => ({
    ...b,
    background: "#ffffff",
    color: "#111827",
    border: "1px solid rgba(0, 0, 0, 0.08)",
    borderRadius: 4,
    overflow: "hidden",
  }),
  option: (b: any, s: any) => ({
    ...b,
    background: s.isFocused ? "rgba(0,0,0,0.04)" : "#ffffff",
    color: "#111827",
    cursor: "pointer",
    fontSize: 14,
  }),
};

export default function MoneyManagerSignup({ onSubmitForm }: Props) {
  /* ---------------- react-hook-form ---------------- */
const {
  register,
  handleSubmit,
  setValue,
  watch,
  reset,
  formState: { errors },
} = useForm<FormVals>({
    defaultValues: {
      country: "ae",
    },
  });

/* ---------------- Country dropdown (react-select-country-list) ---------------- */

type CountryOption = { value: string; label: string };

const countryOptions = useMemo<CountryOption[]>(
  () =>
    countryList()
      .getData()
      .map((c: { value: string; label: string }) => ({
        value: c.value.toLowerCase(), // convert ISO2 → lowercase
        label: c.label,
      })),
  []
);

const selectedCountry = countryOptions.find(
  (o: CountryOption) => o.value === watch("country")
);


  /* ---------------- Phone (intl-tel-input) ---------------- */
  const inputRef = useRef<HTMLInputElement | null>(null);
  const itiRef = useRef<ITIInstance | null>(null);
  const [utilsReady, setUtilsReady] = useState(false);

  // shared RHF registration for phone
  const phoneReg = register("phoneRaw", { required: true });

  useEffect(() => {
    let mounted = true;

    (async () => {
      if (!inputRef.current) return;

      const itiModule = await import("intl-tel-input");

      const instance = itiModule.default(inputRef.current!, {
        initialCountry: watch("country") || "ae",
        preferredCountries: ["ae", "sa", "gb", "ke"],
        separateDialCode: true,
        nationalMode: true,
        utilsScript:
          "https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.6/build/js/utils.js",
      } as Partial<ITIOptions>);

      // wait for utils if available
      if ((instance as any).promise) {
        await (instance as any).promise;
      }
      if (!mounted) return;

      itiRef.current = instance;
      setUtilsReady(true);

      const onCountryChange = () => {
        const iso2 = instance.getSelectedCountryData().iso2 as string;
        setValue("country", iso2, { shouldDirty: true });
      };
      inputRef.current!.addEventListener("countrychange", onCountryChange);

      const onInput = () =>
        setValue("phoneRaw", inputRef.current!.value, { shouldDirty: true });
      inputRef.current!.addEventListener("input", onInput);

      return () => {
        inputRef.current?.removeEventListener("countrychange", onCountryChange);
        inputRef.current?.removeEventListener("input", onInput);
        instance.destroy();
      };
    })();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // when react-select country changes, sync flag in ITI
  useEffect(() => {
    const iso2 = watch("country");
    if (itiRef.current && iso2) {
      try {
        itiRef.current.setCountry(iso2);
      } catch {
        // ignore
      }
    }
  }, [watch("country")]);

  /* ---------------- Submit ---------------- */
  const onSubmit = handleSubmit((form) => {
    if (!itiRef.current) return;

    const raw = (inputRef.current?.value || "").trim();
    const selected = itiRef.current.getSelectedCountryData();

    let e164 = itiRef.current.getNumber();
    const isValid = itiRef.current.isValidNumber?.() ?? Boolean(e164);

    // fallback if utils not available
    if (!e164 && raw) {
      const compact = raw.replace(/\s+/g, "").replace(/[^\d+]/g, "");
      const withoutPlus = compact.replace(/^\+/, "");
      const withoutLeadingZero = withoutPlus.replace(/^0+/, "");
      if ((selected as any)?.dialCode) {
        e164 = `+${(selected as any).dialCode}${withoutLeadingZero}`;
      }
    }

    setValue("phoneRaw", raw);
    setValue("phoneE164", e164);
    setValue("country", (selected as any)?.iso2 || form.country);

    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      country: (selected as any)?.iso2,
      phone: e164,
      phoneRaw: raw,
      phoneE164: e164,
      isValidPhone: isValid,
    };

    console.log("Money Manager signup →", payload);

    // let parent also get the payload if it wants
    if (onSubmitForm) {
      onSubmitForm(payload);
    }

    // ---------- SAME EMAIL API AS RegisterForm ----------

    const emailBody = `
  <h3>New Money Manager Registration</h3>
  Name: ${payload.firstName} ${payload.lastName}
  Email: ${payload.email}
  Country: ${payload.country?.toUpperCase()}
  Phone: ${payload.phone || payload.phoneRaw}
`;

    const apiBody = {
      to: "umairasif384@gmail.com", // same "to" as RegisterForm – change if needed
      from: "no-reply@stonefortpartners.com",
      subject: "New Money Manager Registration",
      body: emailBody,
    };

fetch("/api/send-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(apiBody),
})
.then(async (res) => {
  if (!res.ok) {
    const data = await res.json().catch(() => null);
    const msg = data?.error || "Email failed";
    throw new Error(msg);
  }

  alert("✅ Email sent successfully!");

  // 🧹 reset all form fields
  reset({
    firstName: "",
    lastName: "",
    email: "",
    country: "ae",   // default again
    phoneRaw: "",
    phoneE164: "",
  });

  // clear phone UI + flag
  if (inputRef.current) {
    inputRef.current.value = "";
  }
  if (itiRef.current) {
    try {
      itiRef.current.setCountry("ae");
    } catch {}
  }
})

  .catch((err) => {
    console.error("❌ Email API error:", err);
    alert("Something went wrong while sending the email.");
  });

  });

  return (
    <section
      className={styles.section}
      aria-label="Sign up to become a Money Manager"
    >
      <div className={styles.inner}>
        {/* ===== Left copy ===== */}
        <div className={styles.content}>
          <h1 className={styles.heading}>
            <span className={styles.headingLine}>Sign up to become a</span>
            <span className={styles.headingHighlight}>Money manager</span>
          </h1>

          <p className={styles.lead}>
            Trade and manage investor capital seamlessly
          </p>
          <p className={styles.leadp}>
            Easily manage client funds with auto payouts, real-time insights, and MT5 integration. Join now
          </p>

<div className={styles.benefits}>
  <h2 className={styles.benefitsTitle}>Money Manager Benefits:</h2>
  <ul className={styles.benefitsList}>
    <li className={styles.benefitsItem}>
      <span className={styles.bulletIcon}>
        <Image
          src="/images/Tick Square.png"   // 👈 path to your icon
          alt=""
          width={24}
          height={24}
        />
      </span>
      <span>Shared account access</span>
    </li>

    <li className={styles.benefitsItem}>
      <span className={styles.bulletIcon}>
        <Image src="/images/Tick Square.png" alt="" width={24} height={24} />
      </span>
      <span>Auto allocation</span>
    </li>

    <li className={styles.benefitsItem}>
      <span className={styles.bulletIcon}>
        <Image src="/images/Tick Square.png" alt="" width={24} height={24} />
      </span>
      <span>Built-in risk tools</span>
    </li>

    <li className={styles.benefitsItem}>
      <span className={styles.bulletIcon}>
        <Image src="/images/Tick Square.png" alt="" width={24} height={24} />
      </span>
      <span>Full transparency</span>
    </li>
  </ul>
</div>

        </div>

        {/* ===== Right form ===== */}
        <div className={styles.formWrap}>
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            {/* First Name */}
            <div className={styles.field}>
              <label htmlFor="mm-firstName" className={styles.label}>
                First Name
              </label>
              <input
                id="mm-firstName"
                placeholder="E.g. John"
                className={styles.input}
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className={styles.err}>Required</span>
              )}
            </div>

            {/* Last Name */}
            <div className={styles.field}>
              <label htmlFor="mm-lastName" className={styles.label}>
                Last Name
              </label>
              <input
                id="mm-lastName"
                placeholder="E.g. Doe"
                className={styles.input}
                {...register("lastName", { required: true })}
              />
              {errors.lastName && <span className={styles.err}>Required</span>}
            </div>

            {/* Email */}
            <div className={styles.field}>
              <label htmlFor="mm-email" className={styles.label}>
                Email
              </label>
              <input
                id="mm-email"
                type="email"
                placeholder="E.g. john.doe@example.com"
                className={styles.input}
                {...register("email", { required: true })}
              />
              {errors.email && <span className={styles.err}>Required</span>}
            </div>

            {/* Country */}
            <div className={styles.field}>
              <label className={styles.label}>Country</label>
              <Select
                instanceId="mm-country"
                classNamePrefix="rs"
                options={countryOptions}
                value={selectedCountry}
                onChange={(opt) =>
                  setValue("country", (opt as any).value, {
                    shouldDirty: true,
                  })
                }
                placeholder="Select your Country"
                styles={selectStyles}
              />
            </div>

            {/* Phone */}
            <div className={styles.field}>
              <label className={styles.label}>Phone Number</label>
              <div className={styles.phoneBox}>
                <input
                  placeholder="E.g. 07283 73736"
                  className={`${styles.input} ${styles.phone}`}
                  {...phoneReg}
                  ref={(el) => {
                    phoneReg.ref(el);
                    inputRef.current = el;
                  }}
                />
              </div>
              {errors.phoneRaw && (
                <span className={styles.err}>Required</span>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={styles.submit}
              disabled={!utilsReady}
            >
              Register
<span aria-hidden="true" className={styles.submitIcon}>
  <img src="/images/Vector.png" alt="" width={18} height={18} />
</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
