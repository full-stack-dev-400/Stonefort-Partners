"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

type HeroProps = {
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className,
}: HeroProps) {
  return (
    <section className={`${styles.wrap} ${className ?? ""}`} aria-label="Hero">
      {/*  Background Image — fixed width centered glow */}
      <div className={styles.bgImage} aria-hidden="true">
        <Image
          src="/images/heroBG.png"
          alt="Stonefort Background"
          fill
          priority
          className={styles.bgImg}
        />
      </div>

      {/*  Hero Content */}
      <div className={styles.inner}>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        {(primaryCta || secondaryCta) && (
          <div className={styles.ctaRow}>
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className={`${styles.cta} ${styles.ctaPrimary}`}
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`${styles.cta} ${styles.ctaGhost}`}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
