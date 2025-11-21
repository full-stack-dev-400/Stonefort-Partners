"use client";

type Props = {
  text?: string;
};

export default function LoyaltyIntro({
  text = "Our Loyalty Programme is designed to reward ambition. IBs and Affiliates can unlock tiered benefits, exclusive luxury perks, and priority access to premium partner experiences.",
}: Props) {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-[linear-gradient(90deg,#0c1219_0%,#1a2430_35%,#1e2a36_65%,#0c1219_100%)]
        border-y border-white/5
      "
      aria-label="Loyalty Programme introduction"
    >
      {/* subtle vignette sheen */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60
                   bg-[radial-gradient(120%_60%_at_50%_-20%,rgba(255,255,255,0.06),transparent_60%)]"
        aria-hidden="true"
      />
      {/* top hairline glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* bottom hairline glow */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <p className="py-10 sm:py-12 md:py-14 text-center text-[18px] sm:text-[20px] md:text-[22px] leading-relaxed text-white/90">
          {text}
        </p>
      </div>
    </section>
  );
}
