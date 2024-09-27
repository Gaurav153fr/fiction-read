// components/GoogleAd.tsx
import { useEffect, useRef } from "react";
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}
const GoogleAd = () => {
  const adRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure the adsbygoogle array exists
      window.adsbygoogle = window.adsbygoogle || [];

      // Dynamically load the Google AdSense script if not already loaded
      const existingScript = document.querySelector(
        'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3932379419816999"]'
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.src =
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3932379419816999";
        script.async = true;
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
      }

      // Check if the ad is already loaded before pushing adsbygoogle
      const pushAds = () => {
        const insElement = adRef.current?.querySelector(".adsbygoogle");
        if (insElement && !insElement.hasAttribute("data-adsbygoogle-status")) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) {
            console.error("Adsbygoogle push error:", e);
          }
        }
      };

      pushAds();
    }
  }, []);

  return (
    <div ref={adRef}> 
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3932379419816999"
        data-ad-slot="9833614600"
        data-ad-format="auto"
        data-full-width-responsive="true"
        data-adtest="on"
       
      />
    </div>
  );
};

export default GoogleAd;
