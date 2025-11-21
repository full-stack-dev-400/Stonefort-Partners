"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./JoinCta.module.css";

type Props = {
  /** Path to your animated GIF logo */
  logoSrc?: string; // e.g. "/images/stonefort-logo.gif"
  primaryHref?: string;
  secondaryHref?: string;
};

export default function JoinCta({
  logoSrc = "/images/stonefort-logo.gif",
  primaryHref = "https://clients-mu-stonefortsecurities.com/#/register",
  secondaryHref = "/contact",
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="join-head">
      {/* decorative side glows */}
      <div className={styles.edgeLeft} aria-hidden="true" />
      <div className={styles.edgeRight} aria-hidden="true" />

      <div className={styles.container}>
        {/* logo gif */}
        <div className={styles.logoWrap}>
          <Image
            src={logoSrc}
            alt="Stonefort Partners"
            width={320}
            height={320}
            unoptimized
            priority
            // className={styles.logo}
          />
        </div>

        <h2 id="join-head" className={styles.heading}>
          Join Stonefort Partner
        </h2>

        <p className={styles.copy}>
          A unified platform for Introducing Brokers, Affiliates, and Money Managers.
          Earn high commissions, access PAMM solutions, real-time analytics, and
          personalized support to grow your forex business globally.
        </p>

        <div className={styles.ctaRow}>
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            Become a Partner
          </a>

          <Link href={secondaryHref} className={`${styles.btn} ${styles.btnGhost}`}>
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}
