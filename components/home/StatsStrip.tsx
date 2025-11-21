"use client";

import Image from "next/image";
import styles from "./StatsStrip.module.css";

export default function StatsStrip() {
  const stats = [
    { label: "Active partners", value: "1,000+" },
    { label: "Paid to partners", value: "$200M+" },
    { label: "Spread starts from", value: "0.4" },
    { label: "Leverage: up to", value: "1:500" },
    { label: "Regulation", value: "4" },
  ];

  const watermarkSrc = "/images/tradeBar.webp";

  return (
    <section className={styles.section} aria-label="Key program stats">
      <div className={styles.row}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.card}>
            {/* watermark */}
            <Image
              src={watermarkSrc}
              alt=""
              fill
              priority
              sizes="236px"
              className={styles.wmImg}
            />

            {/* text */}
            <div className={styles.textWrap}>
              <p className={styles.label}>{stat.label}</p>
              <p className={styles.value}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
