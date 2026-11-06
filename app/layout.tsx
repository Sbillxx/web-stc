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
};

export const metadata: Metadata = {
  title: "Sufi Training Center - Spiritual Wellness, Sacred Governance for Leaders",
  description:
    "Pelatihan pengembangan potensi manusia secara holistik untuk instansi pemerintah dan perusahaan. Mengintegrasikan tiga pilar keilmuan: pendekatan sufistik modern, Neuro-Linguistic Programming (NLP), dan neuroscience.",
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
