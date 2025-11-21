"use client";

import Image from "next/image";
import styles from "./PammFeatures.module.css";

export default function PammFeatures() {
  return (
    <section className={styles.wrap} aria-label="Stonefort PAMM Features">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* === Column 1 (side, centered vertically) === */}
          <div className={`${styles.col} ${styles.side}`}>
            <div className={styles.box}>
              <div className={styles.head}>
                <Image src="/images/Tick Square.png" alt="" width={28} height={28} />
                <h3 className={styles.title}>Showcase Your <br/>Trading Performance</h3>
              </div>
              <p className={styles.text}>
                Promote your strategy by sharing real-time trading results to attract investors and grow your client base.
              </p>
            </div>

            <div className={styles.box}>
              <div className={styles.head}>
                <Image src="/images/Tick Square.png" alt="" width={28} height={28} />
                <h3 className={styles.title}>Quick & <br/>Seamless Setup</h3>
              </div>
              <p className={styles.text}>
                No additional plugins required. Stonefort handles your PAMM setup efficiently for a hassle-free launch.
              </p>
            </div>
          </div>

          {/* === Column 2 (middle, full height) === */}
          <div className={`${styles.col}`}>
            <div className={styles.box}>
              <div className={styles.head}>
                <Image src="/images/Tick Square.png" alt="" width={28} height={28} />
                <h3 className={styles.title}>Flexible Fee <br/>Payouts</h3>
              </div>
              <p className={`${styles.text} ${styles.extraClass}`}>
                Receive your performance fees on a weekly or monthly basis, based on your preferred schedule.
              </p>
            </div>

            <div className={`${styles.box} ${styles.highlight}`}>
              <div className={styles.head}>
                <Image src="/images/Tick Square.png" alt="" width={28} height={28} />
                <h3 className={styles.title}>Customised Investor<br/> Offerings</h3>
              </div>
              <p className={styles.text}>
                ailor different fee structures and trading conditions for clients within the same PAMM account.
              </p>
            </div>

            <div className={styles.box}>
              <div className={styles.head}>
                <Image src="/images/Tick Square.png" alt="" width={28} height={28} />
                <h3 className={styles.title}>Turn Skill into<br/> Profit</h3>
              </div>
              <p className={styles.text}>
                Leverage your trading expertise to generate income earn as your strategies deliver results.
              </p>
            </div>
          </div>

          {/* === Column 3 (side, centered vertically) === */}
          <div className={`${styles.col} ${styles.side}`}>
            <div className={styles.box}>
              <div className={styles.head}>
                <Image src="/images/Tick Square.png" alt="" width={28} height={28} />
                <h3 className={styles.title}>Unified <br/>Control</h3>
              </div>
              <p className={styles.text}>
                Effortlessly oversee multiple trading accounts through a single, centralized hub, built for seamless forex operations and smarter decision-making.
              </p>
            </div>

            <div className={styles.box}>
              <div className={styles.head}>
                <Image src="/images/Tick Square.png" alt="" width={28} height={28} />
                <h3 className={styles.title}>MT5 <br/>Compatibility</h3>
              </div>
              <p className={styles.text}>
                Stonefort PAMM is fully available on the MT5 platform, offering reliability and advanced trading capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
