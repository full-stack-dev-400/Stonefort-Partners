"use client";

import Image from "next/image";

/**
 * GrowEarnings – three premium cards with grainy background
 * Matches the provided visual (title with teal word, centered subtitle, 3 cards)
 *
 * Assets expected:
 *  - /public/images/grainy-black-bg.png (background texture)
 *  - /public/images/icons/dollar-square.png (small rounded icon)
 */

const ITEMS = [
  {
    title: "Grow Your\nEarnings",
    body: "Earn points each time\nyour referrals trade\nsuccessfully and stay active.",
  },
  {
    title: "Exclusive\nRedemption Options",
    body: "Convert your points into cash\nrewards, bonus credits, or premium\nbranded merchandise.",
  },
  {
    title: "Progressive\nLoyalty Levels",
    body: "Advance through loyalty tiers\nto gain access to greater rewards\nand special partner privileges.",
  },
];

export default function LoyaltyGrowEarnings() {
  return (
    <section className="relative bg-black text-white py-20 md-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <header className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="sectionHeading">

            Grow Your <span className="text-teal-400">Earnings</span>
          </h2>
          <p className="heroSub mt-4 text-white text-[18px] md:text-[20px]">
            Earn points each time your referrals trade successfully and stay active.
          </p>
        </header>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {ITEMS.map((it, i) => (
            <article
  key={i}
  className="relative rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] bg-[#0b0f14]"
>
  {/* grainy background */}
  <div className="absolute inset-0 opacity-80">
    <Image
      src="/images/grainy-balck-bg.png"
      alt=""
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      className="object-cover"
      priority={i === 0}
      aria-hidden="true"
    />
  </div>

  {/* soft vignette bottom */}
  <div
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(140%_80%_at_60%_10%,rgba(255,255,255,0.08)_0%,transparent_55%)]"
    aria-hidden="true"
  />

  {/* content */}
  <div className="relative p-8 md:p-9 lg:p-10 flex flex-col h-full">

    {/* icon */}
    <div className="mb-6 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
      <Image
        src="/images/Dollar-square.png"
        alt=""
        width={28}
        height={28}
        aria-hidden="true"
      />
    </div>

<div className="mt-auto">
  <h3 className="whitespace-pre-line text-2xl sm:text-[26px] leading-tight font-semibold mb-3">
    {it.title}
  </h3>
   <p className="whitespace-pre-line text-[#fff] text-[17px] leading-relaxed">
    {it.body}
  </p>
</div>
  </div>
</article>

          ))}
        </div>
      </div>
    </section>
  );
}
