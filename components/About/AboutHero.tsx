"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./AboutHero.module.css";

type Props = {
  /** Background under /public, e.g. "/images/aboutBG.webp" */
  backgroundUrl?: string;
  title?: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  className?: string;
};

export default function AboutHero({
  backgroundUrl = "/images/aboutBG.webp",
  title = "About Us",
  subtitle = "Partner with a multi-regulated forex broker offering IB, Affiliate, and PAMM programs. With global reach and powerful tools, Stonefort helps you grow your network and boost your earnings.",
  cta = { label: "Become a Partner", href: "https://clients-mu-stonefortsecurities.com/#/register" },
  className,
}: Props) {
  return (
    <section className={`${styles.wrap} ${className ?? ""}`} aria-label="About Us hero">
      {/* Background image (same approach as Home hero) */}
      <div className={styles.bgImage} aria-hidden="true">
        <Image
          src={backgroundUrl}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImg}
        />
        <div className={styles.bgTint} />
      </div>

      {/* Breadcrumbs (left) */}
      <div className={styles.bcWrap}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
          <ol>
            <li><Link href="/" className={styles.bcHome}>Home</Link></li>
            <li aria-hidden="true" className={styles.bcSep}>›</li>
            <li className={styles.bcCurrent}>About Us</li>
          </ol>
        </nav>
      </div>

      {/* Centered content */}
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <Link href={cta.href} className={styles.cta}>{cta.label}</Link>
      </div>

      {/* bottom vignette */}
      <div className={styles.bottomFade} aria-hidden="true" />
    </section>
  );
}
