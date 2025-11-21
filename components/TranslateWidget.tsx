"use client";

import { useEffect } from "react";

export default function TranslateWidget() {
  useEffect(() => {
    // Inject GTranslate settings
    const settingsScript = document.createElement("script");
    settingsScript.innerHTML = `
      window.gtranslateSettings = {
        "default_language": "en",
        "languages": ["en","fr","it","es","ar","zh-CN","nl","de","pt","ru"],
        "wrapper_selector": ".gtranslate_wrapper",
        "switcher_horizontal_position": "inline"
      };
    `;
    document.body.appendChild(settingsScript);

    // Inject the float.js script
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // optional cleanup when component unmounts
      script.remove();
      settingsScript.remove();
    };
  }, []);

  return <div className="gtranslate_wrapper"></div>;
}
