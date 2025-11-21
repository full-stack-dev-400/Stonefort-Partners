"use client";
import Image from "next/image";
import styles from "./IBWhyChoose.module.css";


export default function IBWhyChoose() {
  return (
    <section className={styles.wrap} aria-label="Why choose Stonefort">
      <h2 className={styles.title}>
        Why Our <span>IB</span> Partners <br />
        Choose <span>Stonefort</span>
      </h2>


      <div className={styles.grid}>
        {/* Left Column */}
        <div className={styles.left}>
          <div className={styles.card}>
            <p>Earn Every Time Your Referral Trades</p>
            <Image src="/images/Tick Square.png" alt="tick" width={28} height={28} />
          </div>


          <div className={styles.card}>
            <p>Tailored Rebates to Fit Your Goals</p>
            <Image src="/images/Tick Square.png" alt="tick" width={28} height={28} />
          </div>


          <div className={styles.card}>
            <p>Seamless Client Onboarding</p>
            <Image src="/images/Tick Square.png" alt="tick" width={28} height={28} />
          </div>
        </div>


        {/* Center Logo */}
        <div className={styles.center}>
          <video autoPlay loop muted playsInline className={styles.logo}>
            <source src="/images/Stonefort-Opening-ib.webm" type="video/webm" />
          </video>
        </div>


        {/* Right Column */}
        <div className={styles.right}>
          <div className={styles.card}>
            <p>Transparent Real-Time Tracking.</p>
            <Image src="/images/Tick Square.png" alt="tick" width={28} height={28} />
          </div>


          <div className={styles.card}>
            <p>Luxury Partner Experience.</p>
            <Image src="/images/Tick Square.png" alt="tick" width={28} height={28} />
          </div>


          <div className={styles.card}>
            <p>Dedicated Support Team.</p>
            <Image src="/images/Tick Square.png" alt="tick" width={28} height={28} />
          </div>
        </div>
      </div>
    </section>
  );
}
