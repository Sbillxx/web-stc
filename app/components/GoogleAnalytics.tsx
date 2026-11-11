import Script from "next/script";

interface GoogleAnalyticsProps {
  gaId?: string;
}

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const measurementId =
    gaId ||
    process.env.NEXT_PUBLIC_GA_ID ||
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  // Jika belum ada ID yang di-set, jangan render script agar tidak ada network error
  if (!measurementId || measurementId.trim() === "") {
    return null;
  }

  const isGTM = measurementId.startsWith("GTM-");

  // Jika menggunakan Google Tag Manager (GTM-XXXXXXX)
  if (isGTM) {
    return (
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${measurementId}');
          `,
        }}
      />
    );
  }

  // Jika menggunakan Google Analytics 4 langsung (G-XXXXXXXXXX)
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  );
}
