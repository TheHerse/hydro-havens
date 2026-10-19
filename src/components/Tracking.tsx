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
// Remember each phone link for this document's lifetime without retaining removed links.
const trackedPhoneLinks = new WeakSet<Element>();

function trackMetaEvent(eventName: "PageView" | "Contact" | "Lead", data?: Record<string, string>) {
  if (typeof window === "undefined" || !metaPixelId) return;

  const params = new URLSearchParams({
    id: metaPixelId,
    ev: eventName,
    dl: window.location.href,
    noscript: "1",
  });

  Object.entries(data ?? {}).forEach(([key, value]) => {
    params.set(`cd[${key}]`, value);
  });

  const beacon = new Image(1, 1);
  beacon.referrerPolicy = "strict-origin-when-cross-origin";
  beacon.src = `https://www.facebook.com/tr?${params.toString()}`;
}

export function trackContactClick(contactMethod: "phone" | "email") {
  if (typeof window === "undefined") return;

  trackMetaEvent("Contact", {
    contact_method: contactMethod,
    ...(contactMethod === "phone" ? { content_name: "phone_call_click" } : {}),
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

  trackMetaEvent("Lead");
}

export default function Tracking() {
  useEffect(() => {
    trackMetaEvent("PageView");

    const handleContactClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const phoneLink = target?.closest("a[href^='tel:']");
      const emailLink = target?.closest("a[href^='mailto:']");
      const estimateLink = target?.closest("a[href*='/contact/']");

      if (phoneLink && !trackedPhoneLinks.has(phoneLink)) {
        trackedPhoneLinks.add(phoneLink);
        trackContactClick("phone");
      }

      if (emailLink) {
        trackContactClick("email");
      }

      if (estimateLink) {
        trackMetaEvent("Contact", { contact_method: "form" });
      }
    };

    document.addEventListener("click", handleContactClick);
    return () => document.removeEventListener("click", handleContactClick);
  }, []);

  if (!googleAdsId) return null;

  return (
    <>
      {googleAdsId && (
        <>
          <Script 
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`} 
            strategy="lazyOnload" 
          />
          <Script id="gtag-init" strategy="lazyOnload">
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
