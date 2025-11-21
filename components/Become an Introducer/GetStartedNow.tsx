"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./GetStartedNow.module.css";

export default function GetStartedNow() {
  return (
    <section className={styles.wrap} aria-label="Get Started steps">
      <div className={styles.inner}>
        <h2 className={styles.title}>Get Started Now</h2>
        <p className={styles.subtitle}>
          Maximize your earnings, expand your revenue streams, and enjoy exclusive benefits
          with a partnership program designed to fit your goals. Sign up today to become a
          Stonefort Partner.
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

            <h3 className={styles.stepTitle}>Register</h3>
            <p className={styles.stepText}>Complete the easy <br/>sign-up form</p>
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
            <p className={styles.stepText}>Share your unique <br/>referral links</p>
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
            <p className={styles.stepText}>Receive competitive <br/>commissions and rewards</p>
          </li>
        </ol>

        <div className={styles.ctaRow}>
          <Link href="https://clients-mu-stonefortsecurities.com/#/register" className={styles.primaryBtn}>
            Become an Indroducer
          </Link>
        </div>
      </div>
    </section>
  );
}
