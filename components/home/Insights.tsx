"use client";

import Image from "next/image";
import styles from "./Insights.module.css";

export default function Insights() {
  return (
    <section className={styles.section} aria-labelledby="insights-head">
      <div className={styles.container}>
        {/* Heading */}
        <h2 id="insights-head" className={styles.heading}>
          Actionable <span className={styles.accent}>Insights</span> at Your Fingertips
        </h2>

        {/* Content grid */}
        <div className={styles.grid}>
          {/* Left image */}
<div className={styles.mediaWrap}>

  {/* <svg className={styles.shinePath} viewBox="0 0 576 380" preserveAspectRatio="none">
    <path
      d="M2 377L69 346L88 310L112 332L155 261L213 143L262 216L331 200L360 274L402 155L451 274L520 212"
      className={styles.pathGlow}
    />
  </svg> */}

  <Image
    src="/images/hand.webp"
    alt="Live market insights visualization"
    fill
    priority
    className={styles.media}
  />
</div>



          {/* Right bullets */}
          <div className={styles.points}>
            <div className={styles.item}>
              <span className={styles.check} aria-hidden="true">
                <Image
                  src="/images/Tick Square.png"
                  alt=""
                  width={44}
                  height={44}
                  className={styles.checkImg}
                />
              </span>
              <div>
                <h3 className={styles.itemTitle}>Live Data Monitoring</h3>
                <p className={styles.itemText}>
                  Access up-to-the-minute information on trading and performance directly from your Partner Portal.
                  Respond quickly to market changes and fine-tune your approach in real time.
                </p>
              </div>
            </div>

            <div className={styles.item}>
              <span className={styles.check} aria-hidden="true">
                <Image
                  src="/images/Tick Square.png"
                  alt=""
                  width={44}
                  height={44}
                  className={styles.checkImg}
                />
              </span>
              <div>
                <h3 className={styles.itemTitle}>Tailored Reports</h3>
                <p className={styles.itemText}>
                  Receive customised reports that focus on your business objectives.
                  Understand client activity and track performance based on your specific partnership structure.
                </p>
              </div>
            </div>

            <div className={styles.item}>
              <span className={styles.check} aria-hidden="true">
                <Image
                  src="/images/Tick Square.png"
                  alt=""
                  width={44}
                  height={44}
                  className={styles.checkImg}
                />
              </span>
              <div>
                <h3 className={styles.itemTitle}>Insight-Based Strategy</h3>
                <p className={styles.itemText}>
                  Use reliable data to refine your marketing, improve client loyalty,
                  and boost revenue with each trade.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
