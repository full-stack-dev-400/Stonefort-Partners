"use client";

import intlTelInput from "intl-tel-input";

declare global {
  interface Window {
    intlTelInputGlobals: {
      getCountryData(): { name: string; iso2: string }[];
    };
  }
}

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Types from namespace
type ITIOptions = intlTelInput.Options;
type ITIInstance = intlTelInput.Plugin;

const schema = z.object({
  isPartner: z.enum(["yes", "no"]),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  country: z.string().min(2, "Select a country"),
  subject: z.string().min(1, "Select a subject"),
  message: z.string().optional(),
  phoneRaw: z.string().min(1, "Phone is required"), // ITI validates format
});

type FormValues = z.infer<typeof schema>;

const SUBJECTS = [
  { value: "loyalty", label: "Loyalty Programme" },
  { value: "partnership", label: "Partnership enquiry" },
  { value: "payouts", label: "Payouts & bonuses" },
  { value: "other", label: "Other" },
];

export default function RewardsForm() {
  const [utilsReady, setUtilsReady] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const itiRef = useRef<any>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { isPartner: "no", subject: "" },
  });

  const { ref: phoneRHFRef, ...phoneReg } = register("phoneRaw");
  const country = watch("country");

useEffect(() => {
  if (!inputRef.current) return;

  // ✅ capture the element so TS knows it's not null in this scope
  const el = inputRef.current as HTMLInputElement;

  const options: intlTelInput.Options = {
    initialCountry: "ae",
    preferredCountries: ["ae", "sa", "gb", "ke"],
    separateDialCode: true,
    nationalMode: true,
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.6/build/js/utils.js",
  };

  const instance = intlTelInput(el, options as Partial<intlTelInput.AllOptions>);
  itiRef.current = instance;

  // utils.js resolves a runtime `promise` (not typed) – wait for it
  const p: Promise<void> | undefined = (instance as any).promise;
  (async () => {
    if (p) await p;
    setUtilsReady(true);
  })();

  // keep RHF country (ISO2) in sync
  setValue("country", instance.getSelectedCountryData().iso2);
  const onChange = () =>
    setValue("country", instance.getSelectedCountryData().iso2, {
      shouldValidate: true,
    });
  el.addEventListener("countrychange", onChange);

  // optional: stop users typing a leading "+" when separateDialCode is on
  const stripPlus = (e: Event) => {
    const t = e.target as HTMLInputElement;
    if (t.value.startsWith("+")) t.value = t.value.replace(/^\+/, "");
  };
  el.addEventListener("input", stripPlus);

  return () => {
    el.removeEventListener("countrychange", onChange);
    el.removeEventListener("input", stripPlus);
    instance.destroy();
  };
}, [setValue]);


  useEffect(() => {
    if (itiRef.current && country) {
      try {
        itiRef.current.setCountry(country);
      } catch {}
    }
  }, [country]);

  async function onSubmit(values: FormValues) {
    const iti = itiRef.current;
    if (!iti) return;

    if (!utilsReady) {
      inputRef.current?.setCustomValidity(
        "Just a moment… phone validation is loading"
      );
      inputRef.current?.reportValidity();
      setTimeout(() => inputRef.current?.setCustomValidity(""), 1100);
      return;
    }

    if (!iti.isValidNumber()) {
      // Helpful debug (remove in prod):
      // console.log("Validation error code:", (iti as any).getValidationError?.());
      inputRef.current?.setCustomValidity("Enter a valid phone number");
      inputRef.current?.reportValidity();
      setTimeout(() => inputRef.current?.setCustomValidity(""), 1500);
      return;
    }

    const phone_e164 = iti.getNumber(); // e.g., +971501234567
    const payload = { ...values, phone_e164 };

    const res = await fetch("/api/rewards", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      alert("Something went wrong. Please try again.");
      return;
    }
    alert("Thanks! We’ve received your request.");
  }

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 ">
        <h2 className="text-center font-semibold tracking-tight text-4xl sm:text-5xl mb-8 text-black">
          Register to get rewards
        </h2>

        <div className="rounded-2xl bg-black text-white p-6 sm:p-8 md:p-10 shadow-2xl ring-1 ring-white/10">
          {/* Are you a partner? */}
          <div className="mb-8">
            <p className="mb-3 font-medium">
              Are you an existing partner with Stonefort?
            </p>
            <div className="flex gap-6 text-white/90">
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  value="yes"
                  {...register("isPartner")}
                  className="accent-teal-400"
                />
                <span>Yes</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  value="no"
                  {...register("isPartner")}
                  className="accent-teal-400"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Grid */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
              <div>
                <label className="block mb-2 text-white/90">First Name</label>
                <input
                  type="text"
                  placeholder="E.g. Muhammad"
                  {...register("firstName")}
                  className="w-full bg-transparent border-0 border-b border-white/25 focus:border-white/60 outline-none py-2"
                />
                {errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-white/90">Last Name</label>
                <input
                  type="text"
                  placeholder="E.g. Asif"
                  {...register("lastName")}
                  className="w-full bg-transparent border-0 border-b border-white/25 focus:border-white/60 outline-none py-2"
                />
                {errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-white/90">Email</label>
                <input
                  type="email"
                  placeholder="E.g. you@example.com"
                  {...register("email")}
                  className="w-full bg-transparent border-0 border-b border-white/25 focus:border-white/60 outline-none py-2"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Country stores ISO2 (e.g., 'ae'). Make hidden if you don’t want editing. */}
              <div>
                <label className="block mb-2 text-white/90">Country</label>
                <input
                  type="text"
                  placeholder="e.g. ae"
                  {...register("country")}
                  className="w-full bg-transparent border-0 border-b border-white/25 focus:border-white/60 outline-none py-2"
                />
                {errors.country && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.country.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-white/90">Phone Number</label>
                <input
                  type="tel"
                  placeholder="e.g. 568 253 021"
                  {...phoneReg}
                  ref={(el) => {
                    inputRef.current = el;
                    phoneRHFRef(el);
                  }}
                  className="w-full bg-transparent border-0 border-b border-white/25 focus:border-white/60 outline-none py-2"
                />
                {errors.phoneRaw && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.phoneRaw.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-white/90">Subject</label>
                <div className="relative">
                  <select
                    {...register("subject")}
                    className="w-full appearance-none bg-transparent border-0 border-b border-white/25 focus:border-white/60 outline-none py-2 pr-8"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    {SUBJECTS.map((s) => (
                      <option key={s.value} value={s.value} className="bg-black">
                        {s.label}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-white/60">
                    ▾
                  </span>
                </div>
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-3">
                <label className="block mb-2 text-white/90">
                  Send us a message (optional)
                </label>
                <textarea
                  rows={6}
                  placeholder=""
                  {...register("message")}
                  className="w-full resize-y bg-[#2a2a2a] text-white placeholder-white/60 rounded-md border border-transparent focus:border-white/20 outline-none p-4"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-[#00D3C6] text-black font-semibold py-4 hover:opacity-90 active:opacity-80 transition"
              >
                {isSubmitting ? "Submitting..." : "Register your interest"}
                <span className="ml-2"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
