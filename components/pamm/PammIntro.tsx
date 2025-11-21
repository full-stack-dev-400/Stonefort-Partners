"use client";

import Image from "next/image";
import styles from "./PammIntro.module.css";

export default function PammIntro() {
  return (
    <section className={styles.wrap} aria-label="What is Stonefort PAMM">
      <div className={styles.inner}>
        <h2 className={styles.title}>
          What is Stonefort P<span className={styles.teal}>A</span>MM?
        </h2>
        <p className={styles.text}>
          Stonefort PAMM allows investors to allocate funds to skilled traders, who manage
          trading from a central account. Instead of trading themselves, investors select
          from proven trader profiles. Returns are shared proportionally, while traders
          earn a management fee. It’s a transparent, hands-free investment solution built
          on performance and trust.
        </p>

        <div className={styles.imageWrap}>
          <Image
            src="/images/pammds.webp"
            alt="Stonefort PAMM dashboard"
            width={1200}
            height={600}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}
