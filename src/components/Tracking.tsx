"use client";
import { useEffect } from "react";
import Script from "next/script";

function configuredValue(value: string | undefined) {
  if (!value || value.startsWith("your_") || value.includes("XXXXXXXXXX")) {
    return undefined;
  }

  return value;
}

const googleAdsId =
  configuredValue(process.env.NEXT_PUBLIC_GOOGLE_ADS_ID) ||
  configuredValue(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
const contactConversionLabel = configuredValue(
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_CONVERSION_LABEL,
);
const metaPixelId = "1387603976492607";

export function trackContactClick(contactMethod: "phone" | "email") {
  if (typeof window === "undefined") return;

  window.fbq?.("track", "Contact", {
    contact_method: contactMethod,
  });
}

export function trackContactConversion() {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "generate_lead", {
    event_category: "lead",
    event_label: "contact_form",
  });

  if (googleAdsId && contactConversionLabel) {
    window.gtag?.("event", "conversion", {
      send_to: `${googleAdsId}/${contactConversionLabel}`,
    });
  }

  window.fbq?.("track", "Lead");
}

export default function Tracking() {
  useEffect(() => {
    const handleContactClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const phoneLink = target?.closest("a[href^='tel:']");
      const emailLink = target?.closest("a[href^='mailto:']");

      if (phoneLink) {
        trackContactClick("phone");
      }

      if (emailLink) {
        trackContactClick("email");
      }
    };

    document.addEventListener("click", handleContactClick);
    return () => document.removeEventListener("click", handleContactClick);
  }, []);

  if (!metaPixelId && !googleAdsId) return null;

  return (
    <>
      {metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
      {metaPixelId && (
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      )}
      
      {googleAdsId && (
        <>
          <Script 
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`} 
            strategy="afterInteractive" 
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAdsId}');
            `}
          </Script>
        </>
      )}
    </>
  );
}
