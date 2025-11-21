"use client";

import Image from "next/image";
import styles from "./CellXpertShowcase.module.css";

export default function CellXpertShowcase() {
  return (
    <section className={styles.wrap} aria-label="CellXpert IB features">
      <div className={styles.inner}>
        
        {/* ===== Section Heading ===== */}
        <h2 className={styles.heading}>
          IB Portal powered by <span>CellXpert</span>
        </h2>

        {/* ===== Features Grid ===== */}
        <div className={styles.grid}>
          {/* TL */}
          <div className={styles.item}>
            <div className={styles.rowHead}>
              <Image
                src="/images/Tick Square.png"
                alt=""
                width={24}
                height={24}
                className={styles.tick}
              />
              <h3 className={styles.h3}>
                Advanced Registration <br/>Insights (via CellXpert)
              </h3>
            </div>
            <p className={styles.text}>
              Gain comprehensive visibility into every client registration.
              Track which sources, campaigns, and links drive account openings
              and qualified trading activity for data-driven growth.
            </p>
          </div>

          {/* TR */}
          <div className={`${styles.item} ${styles.itemRight}`}>
            <div className={styles.rowHead}>
              <Image
                src="/images/Tick Square.png"
                alt=""
                width={24}
                height={24}
                className={styles.tick}
              />
              <h3 className={styles.h3}>Multi-Tier Sub-Affiliate<br/> Tracking</h3>
            </div>
            <p className={styles.text}>
              Monitor your entire referral network effortlessly. CellXpert
              offers transparent performance metrics, trading volume analysis,
              and accurate commission attribution across all referral levels.
            </p>
          </div>

          {/* BL */}
          <div className={`${styles.item} ${styles.itemBottom}`}>
            <div className={styles.rowHead}>
              <Image
                src="/images/Tick Square.png"
                alt=""
                width={24}
                height={24}
                className={styles.tick}
              />
              <h3 className={styles.h3}>
                Dynamic Affiliate &amp; <span className={styles.ib}>IB</span> <br/>Link Management
              </h3>
            </div>
            <p className={styles.text}>
              Create and manage custom tracking links powered by CellXpert to
              expand your network with precision. Every referral is logged,
              segmented, and optimized in real time for maximum impact.
            </p>
          </div>

          {/* BR */}
          <div className={`${styles.item} ${styles.itemRight} ${styles.itemBottom}`}>
            <div className={styles.rowHead}>
              <Image
                src="/images/Tick Square.png"
                alt=""
                width={24}
                height={24}
                className={styles.tick}
              />
              <h3 className={styles.h3}>
                High-Impact Marketing <br/>Toolkit + QR Code Templates
              </h3>
            </div>
            <p className={styles.text}>
              Access a rich collection of branded creatives, banners, and QR
              code templates—designed specifically for global forex lead
              generation and engagement, all integrated within CellXpert.
            </p>
          </div>
        </div>

        {/* ===== Showcase Image ===== */}
        <div className={styles.stage}>
          <Image
            src="/images/IB-laptop.webp"
            alt="Partner Dashboard & tracking toolkit"
            width={1200}
            height={520}
            priority
          />
        </div>
      </div>
    </section>
  );
}
