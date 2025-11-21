"use client";

import Image from "next/image";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.wrap} aria-label="Contact Us hero">
      <div className={styles.inner}>
        {/* Left copy */}
        <div className={styles.copy}>
          <h1 className={styles.title}>Contact Us</h1>
          <span className={styles.rule} />
          <p className={styles.subtitle}>
            Need help? Our expert support team is here to keep your trading smooth and uninterrupted.
          </p>
        </div>

        {/* Right giant logo */}
        <div className={styles.logoWrap} aria-hidden="true">
          <Image
            src="/images/contact-logo.png"
            alt=""
            fill
            priority
            className={styles.logo}
          />
        </div>
      </div>

      {/* Perfect bottom curve (SVG) */}
      <div className={styles.curve} aria-hidden="true">
        <svg
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          className={styles.curveSvg}
        >
          {/* Arc: touches both edges and rises in the middle */}
          <path d="M0,20 Q50,2 100,20 L100,40 0,40 Z" />
        </svg>
      </div>
    </section>
  );
}
