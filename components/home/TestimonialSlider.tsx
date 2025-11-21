"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./TestimonialSlider.module.css";

type Testimonial = {
  quote: string;          // full sentence
  author: string;         // e.g., "Kripa"
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I’ve had a positive experience working with Stonefort Securities. The team is professional, knowledgeable, and responsive.",
    author: "Kripa",
  },
  {
    quote:
      "Stonefort’s support and payouts are top-notch. Transparent, timely, and a pleasure to work with.",
    author: "Ahmed",
  },
  {
    quote:
      "Reliable partner portal and real-time tracking helped us scale faster than expected.",
    author: "Sara",
  },
];

type Props = {
  trustpilotSrc?: string;      // e.g. "/images/trustpilot.gif"
  autoPlayMs?: number | null;  // set to null to disable autoplay
};

export default function TestimonialSlider({
  trustpilotSrc = "/images/Reviews.gif",
  autoPlayMs = 6000,
}: Props) {
  const [idx, setIdx] = useState(0);
  const total = TESTIMONIALS.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);

  const go = (n: number) => setIdx((p) => (p + n + total) % total);
  const goTo = (n: number) => setIdx(((n % total) + total) % total);

  // autoplay
  useEffect(() => {
    if (!autoPlayMs) return;
    const t = setInterval(() => go(1), autoPlayMs);
    return () => clearInterval(t);
  }, [autoPlayMs]);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) < 40) return;
    dx > 0 ? go(-1) : go(1);
  };

  // inline style for translate
  const trackStyle = useMemo(
    () => ({ transform: `translateX(-${idx * 100}%)` }),
    [idx],
  );

  return (
    <section className={styles.section} aria-label="Partner testimonials">
      <div className={styles.container}>
        {/* Trustpilot (fixed) */}
<div className={styles.trust}>
  <video
    className={styles.trustImg}
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    width={320}
    height={26}
    style={{ display: "block" }}
  >
    { <source src="/images/Reviews.webm" type="video/webm" /> }
  </video>
</div>

        {/* Slider viewport (only this content moves) */}
        <div
          className={styles.viewport}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div ref={trackRef} className={styles.track} style={trackStyle}>
            {TESTIMONIALS.map((t, i) => (
              <figure className={styles.slide} key={i}>
                <blockquote className={styles.quote}>
                  {t.quote} <span className={styles.author}>– {t.author}</span>
                </blockquote>
              </figure>
            ))}
          </div>
        </div>

        {/* Controls row (fixed) */}
        <div className={styles.controls}>
          <button
            className={`${styles.iconBtn} ${styles.prev}`}
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
          >
            {/* left chevron */}
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          <Link href="https://clients-mu-stonefortsecurities.com/#/register" className={styles.cta}>
            Become a Partner
          </Link>

          <button
            className={`${styles.iconBtn} ${styles.next}`}
            aria-label="Next testimonial"
            onClick={() => go(1)}
          >
            {/* right chevron */}
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
