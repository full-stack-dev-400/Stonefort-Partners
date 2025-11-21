"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./CpaGetStarted.module.css";

export default function CpaGetStarted() {
  return (
    <section className={styles.wrap} aria-label="Get Started steps">
      <div className={styles.inner}>
        <h2 className={styles.title}>Get Started today</h2>
        <p className={styles.subtitle}>
          Boost your earnings, expand revenue streams, and enjoy tailored benefits with Stonefort’s CPA Partnership Program. Sign up now to become a Stonefort Partner. 
        </p>

        <ol className={styles.grid3}>
          {/* 1 */}
          <li className={`${styles.step}`} data-step="1">
            <div className={styles.iconWrap}>
              <Image
                src="/images/IB-1.png"
                alt="Register icon"
                width={59}
                height={95}
                className={styles.icon}
                priority
              />
            </div>

            <h3 className={styles.stepTitle}>Join</h3>
           
          </li>

          {/* connector */}
          <li aria-hidden="true" className={styles.connector} />

          {/* 2 */}
          <li className={`${styles.step}`} data-step="2">
            <div className={styles.iconWrap}>
              <Image
                src="/images/IB-2.png"
                alt="Refer icon"
                width={59}
                height={95}
                className={styles.icon}
              />
            </div>

            <h3 className={styles.stepTitle}>Refer</h3>
            
          </li>

          {/* connector */}
          <li aria-hidden="true" className={styles.connector} />

          {/* 3 */}
          <li className={`${styles.step}`} data-step="3">
            <div className={styles.iconWrap}>
              <Image
                src="/images/IB-3.png"
                alt="Earn icon"
                width={59}
                height={95}
                className={styles.icon}
              />
            </div>

            <h3 className={styles.stepTitle}>Earn</h3>
            
          </li>
        </ol>

        <div className={styles.ctaRow}>
          <Link href="#apply" className={styles.primaryBtn}>
            Become a CPA Affiliate
          </Link>
        </div>
      </div>
    </section>
  );
}
