"use client";

import Image from "next/image";
import styles from "./PammHowItWorks.module.css";

export default function PammHowItWorks() {
  return (
    <section className={styles.wrap} aria-label="How PAMM Accounts Work">
      <div className={styles.inner}>
        <h2 className={styles.title}>
          How <span className={styles.teal}>PAMM</span> Accounts Work
        </h2>

        <div className={styles.grid}>
          {/* Left: Investors pie */}
          <div className={styles.left}>
            <Image
              src="/images/pammaccount.webp"
              alt="Investor allocations pie"
              width={332}
              height={224}
              className={styles.leftImg}
              priority
            />
          </div>

          {/* Center: Gold bar + arrows + caption */}
          <div className={styles.center}>
            <Image
              src="/images/cashArrows.webp"
              alt="Funds flow to trading capital"
              width={341}
              height={157}
              className={styles.centerImg}
              priority
            />

          </div>

          {/* Right: Result split with bracket & profit tag */}
          <div className={styles.right}>
                      <div className={styles.center}>
            <Image
              src="/images/investors.webp"
              alt="Funds flow to trading capital"
              width={332}
              height={250}
              className={styles.centerImg}
              priority
            />

          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
