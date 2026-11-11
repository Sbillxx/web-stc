/**
 * Google Analytics 4 (GA4) Event Helper
 */

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Helper untuk mengirim custom event ke Google Analytics 4
export const trackEvent = (
  action: string,
  params?: Record<string, any>
) => {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", action, params);
  }
};

// Helper khusus untuk melacak konversi klik WhatsApp
export const trackWhatsAppClick = (source: string) => {
  trackEvent("generate_lead", {
    event_category: "Contact",
    event_label: `WhatsApp Consultation - ${source}`,
    method: "WhatsApp",
  });
};

