"use client";

import Image from "next/image";
import styles from "./ContactChannels.module.css";

export default function ContactChannels() {
  return (
    <section className={styles.wrap} aria-label="Contact channels">
      <div className={styles.inner}>
        {/* ===== Headline ===== */}
        <h2 className={styles.title}>
          Your <span className={styles.emTeal}>success</span> is our{" "}
          <span className={styles.emTeal}>priority</span>
        </h2>

        <p className={styles.kicker}>24/5 support when you need it.</p>
        <span className={styles.hr} />

        <p className={styles.lead}>
          Our dedicated client support team is always ready to assist you
          anytime, anywhere. Reach out through your preferred channel, including
          Email, Live Chat, WhatsApp, and more, for a seamless trading support
          experience.
        </p>

        {/* ===== Grid ===== */}
        <div className={styles.grid}>
          {/* Global Office */}
          <div className={`${styles.card} ${styles.cardOffice}`}>
            <div className={styles.officeContent}>
              <h3 className={styles.officeTitle}>Global Office</h3>

              <div className={styles.meta}>
                <div className={styles.metaRow}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={styles.icon}
                  >
                    <path
                      d="M3 5h18v14H3V5zm2 2v.3l7 4.375L19 7.3V7H5zm14 2.7-7 4.375L5 9.7V17h14V9.7z"
                      fill="currentColor"
                    />
                  </svg>
                  <a
                    href="mailto:support@stonefortpartners.com"
                    className={styles.link}
                  >
                    support@stonefortpartners.com
                  </a>
                </div>

                <div className={styles.metaRow}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={styles.icon}
                  >
                    <path
                      d="M6.6 10.8a15.9 15.9 0 006.6 6.6l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.58 3.58.58a1 1 0 011 1V20a1 1 0 01-1 1C11.85 21 3 12.15 3 1a1 1 0 011-1h3.48a1 1 0 011 1c0 1.25.21 2.46.58 3.58a1 1 0 01-.24 1.02L6.6 10.8z"
                      fill="currentColor"
                    />
                  </svg>
                  <a href="tel:+97143656600" className={styles.link}>
                    +971 43656600
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className={styles.card}>
            <div className={styles.qrBox}>
              <Image
                src="/images/whatsapp-barcode.png"
                alt="WhatsApp QR"
                width={150}
                height={212}
                priority
              />
            </div>

            <button
              type="button"
              className={styles.cta}
              onClick={() =>
                window.open("https://wa.me/", "_blank", "noopener")
              }
            >
              Message Now
            </button>
          </div>

          {/* LINE */}
          <div className={styles.card}>
            <div className={styles.qrBox}>
              <Image
                src="/images/line-barcode.png"
                alt="LINE QR"
                width={150}
                height={212}
                priority
              />
            </div>

            <button
              type="button"
              className={styles.cta}
              onClick={() =>
                window.open("https://line.me/ti/p/Pqy_Fd-kT8", "_blank", "noopener")
              }
            >
              Message Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
