import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, Alex_Brush } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import JsonLd from "./components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  weight: "400",
  variable: "--font-alex-brush",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1b7f8c",
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.sufitrainingcenter.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Sufi Training Center - Spiritual Wellness & Sacred Governance for Leaders",
    template: "%s | Sufi Training Center",
  },
  description:
    "Pusat pelatihan pengembangan potensi manusia secara holistik untuk instansi pemerintah dan korporasi. Mengintegrasikan tiga pilar keilmuan: Tazkiyatun Nafs (Sufistik Modern), Neuro-Linguistic Programming (NLP), dan Neuroscience untuk melahirkan pemimpin berintegritas tinggi, amanah, dan berjiwa tenang (Sacred Governance).",
  keywords: [
    "Sufi Training Center",
    "STC",
    "Spiritual Wellness",
    "Sacred Governance",
    "Pelatihan Kepemimpinan",
    "Pesantren Idrisiyyah",
    "Tasikmalaya",
    "Tazkiyatun Nafs",
    "Executive Retreat",
    "Anti Fraud Training",
    "Corporate Training Indonesia",
    "Pelatihan SDM Instansi",
    "Training BUMN",
    "In-house Training Kepemimpinan",
    "NLP Spiritual",
    "Neuroscience Leadership",
    "Syekh Akbar Muhammad Fathurahman",
    "Pelatihan Integritas ASN",
    "Outbound Spiritual",
  ],
  authors: [
    {
      name: "Sufi Training Center",
      url: siteUrl,
    },
  ],
  creator: "Sufi Training Center",
  publisher: "Yayasan Idrisiyyah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    title:
      "Sufi Training Center - Spiritual Wellness & Sacred Governance for Leaders",
    description:
      "Pelatihan pengembangan potensi manusia secara holistik untuk instansi pemerintah dan perusahaan berbasis pendekatan sufistik modern, NLP, dan neuroscience.",
    siteName: "Sufi Training Center",
    images: [
      {
        url: "/logo-stc-full.png",
        width: 1024,
        height: 1024,
        alt: "Logo Sufi Training Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sufi Training Center - Spiritual Wellness & Sacred Governance for Leaders",
    description:
      "Pelatihan pengembangan potensi manusia secara holistik untuk instansi pemerintah dan perusahaan berbasis pendekatan sufistik modern, NLP, dan neuroscience.",
    images: ["/logo-stc-full.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  category: "Education",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${fraunces.variable} ${alexBrush.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
