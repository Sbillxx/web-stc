import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, Alex_Brush } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://sufitrainingcenter.vercel.app"
  ),
  title: {
    default: "Sufi Training Center - Spiritual Wellness & Sacred Governance",
    template: "%s | Sufi Training Center",
  },
  description:
    "Pelatihan pengembangan potensi manusia secara holistik untuk instansi pemerintah dan perusahaan. Mengintegrasikan tiga pilar keilmuan: pendekatan sufistik modern, Neuro-Linguistic Programming (NLP), dan neuroscience.",
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
  ],
  authors: [
    {
      name: "Sufi Training Center",
      url: "https://sufitrainingcenter.vercel.app",
    },
  ],
  creator: "Sufi Training Center",
  publisher: "Yayasan Idrisiyyah",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sufitrainingcenter.vercel.app",
    title: "Sufi Training Center - Spiritual Wellness & Sacred Governance",
    description:
      "Pelatihan pengembangan potensi manusia secara holistik untuk instansi pemerintah dan perusahaan. Mengintegrasikan tiga pilar keilmuan: pendekatan sufistik modern, Neuro-Linguistic Programming (NLP), dan neuroscience.",
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
    title: "Sufi Training Center - Spiritual Wellness & Sacred Governance",
    description:
      "Pelatihan pengembangan potensi manusia secara holistik untuk instansi pemerintah dan perusahaan. Mengintegrasikan tiga pilar keilmuan: pendekatan sufistik modern, NLP, dan neuroscience.",
    images: ["/logo-stc-full.png"],
  },
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
      <body>{children}</body>
    </html>
  );
}
