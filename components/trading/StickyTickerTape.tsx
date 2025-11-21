"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StickyTickerTape.module.css";

export default function StickyTickerTape() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!widgetRef.current) return;

    // Clean previous script (hot reload safety)
    widgetRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;

    // Configure your symbols + theme here
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FX:EURUSD", title: "EUR/USD" },
        { proName: "FX:GBPUSD", title: "GBP/USD" },
        { proName: "OANDA:XAUUSD", title: "XAU/USD" },
        { proName: "FX:USDJPY", title: "USD/JPY" },
        { proName: "TVC:USOIL", title: "Crude Oil" },
        { proName: "TVC:DXY", title: "DXY" },
        { proName: "CRYPTO:BTCUSD", title: "BTC/USD" },
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: true,
      displayMode: "adaptive",
      locale: "en",
    });

    widgetRef.current.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (widgetRef.current) widgetRef.current.innerHTML = "";
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`${styles.sticky} ${collapsed ? styles.collapsed : ""}`}
      ref={wrapRef}
      role="region"
      aria-label="Live market ticker"
    >
      <div className={styles.inner}>
        <div className="tradingview-widget-container" ref={widgetRef}>
          <div className="tradingview-widget-container__widget"></div>
          {/* TV injects iframe here */}
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.ctrlBtn}
            onClick={() => setCollapsed((v) => !v)}
            aria-expanded={!collapsed}
            title={collapsed ? "Expand ticker" : "Collapse ticker"}
          >
            {collapsed ? "▲" : "▼"}
          </button>
          <button
            type="button"
            className={styles.ctrlBtn}
            onClick={() => setHidden(true)}
            title="Close ticker"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
