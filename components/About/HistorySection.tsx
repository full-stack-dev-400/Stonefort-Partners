"use client";

import styles from "./HistorySection.module.css";

type Props = {
  titlePrefix?: string;      // "Our"
  titleAccent?: string;      // "history"
  paragraphs?: string[];     // content blocks
  className?: string;
};

export default function HistorySection({
  titlePrefix = "Our",
  titleAccent = "history",
  paragraphs = [
    "Stonefort’s journey began in the financial heart of the Middle East Dubai, United Arab Emirates with a vision to deliver more than just brokerage services. From day one, our mission was to challenge the status quo by redefining industry standards through transparency, technological innovation, and an unshakable commitment to integrity.",
    "What started as a bold step into a competitive market has grown into a global success story. Over the years, Stonefort has expanded its presence across continents, establishing itself as a trusted name in international financial markets. We are proudly licensed and regulated by several leading authorities, including the Securities and Commodities Authority (SCA) in the United Arab Emirates, the Financial Services Commission (FSC) in Mauritius, the Financial Services Regulatory Authority (FSRA) in Saint Lucia, and the Financial Services Authority (FSA) in Saint Vincent and the Grenadines.",
    "Our multi-jurisdictional regulatory framework stands as a testament to our unwavering dedication to investor protection, strict compliance, and operational excellence. It reinforces the trust our clients place in us and reflects our long–term vision for sustainable, responsible growth in the global financial ecosystem.",
    "As we continue to expand and evolve, Stonefort remains anchored to its original belief: that a brokerage should be more than a platform for transactions—it should be a partner in progress for every trader it serves."
  ],
  className
}: Props) {
  return (
    <section className={`${styles.wrap} ${className ?? ""}`} aria-labelledby="about-history-title">
      <div className={styles.inner}>
        <h2 id="about-history-title" className={styles.title}>
          <span className={styles.titleDim}>{titlePrefix}</span>{" "}
          <span className={styles.titleAccent}>{titleAccent}</span>
        </h2>

        <div className={styles.copy}>
          {paragraphs.map((p, i) => (
            <p key={i} className={styles.p}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
