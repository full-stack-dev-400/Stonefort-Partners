"use client";

import Image from "next/image";
import styles from "./AffiliatePortal.module.css";

export default function AffiliatePortal() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        {/* Heading */}
        <h2 className={styles.heading}>
          Affiliate <span>portal</span>
        </h2>

        {/* Main layout */}
        <div className={styles.grid}>
          {/* ===== LEFT FEATURES ===== */}
          <div className={styles.sideCol}>
            <div className={styles.feature}>
              <div className={styles.icon}>
                <Image
                  src="/images/Tick Square.png"
                  alt="check"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <h3 className={styles.fTitle}>Real-Time <br/>Tracking</h3>
                <p className={styles.fText}>
                  Monitor traffic and optimise affiliate performance with
                  instant reporting tools.
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.icon}>
                <Image
                  src="/images/Tick Square.png"
                  alt="check"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <h3 className={styles.fTitle}>Campaign <br/>Management</h3>
                <p className={styles.fText}>
                  Run and refine campaigns across multiple channels for maximum
                  reach.
                </p>
              </div>
            </div>
          </div>

          {/* ===== CENTER IMAGE ===== */}
          <div className={styles.centerImage}>
            <Image
              src="/images/cpa-affiliate.webp"
              alt="Affiliate dashboard"
              width={850}
              height={480}
              className={styles.dashboard}
              priority
            />
          </div>

          {/* ===== RIGHT FEATURES ===== */}
          <div className={styles.sideCol}>
            <div className={styles.feature}>
              <div className={styles.icon}>
                <Image
                  src="/images/Tick Square.png"
                  alt="check"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <h3 className={styles.fTitle}>Transparent <br/>Payouts</h3>
                <p className={styles.fText}>
                  Enjoy flexible payment options with full visibility on your
                  earnings.
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.icon}>
                <Image
                  src="/images/Tick Square.png"
                  alt="check"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <h3 className={styles.fTitle}>Marketing Asset Library</h3>
                <p className={styles.fText}>
                  Access a complete suite of Stonefort-branded creatives to
                  attract and convert traders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
