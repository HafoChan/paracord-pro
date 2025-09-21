import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MINH TIEN STRING CO., LTD - Sản xuất dây dù, dây đai thun chất lượng cao",
  description: "Công ty TNHH sản xuất dây Minh Tiến chuyên sản xuất và gia công dây dù, dây đai thun cho ngành may mặc, balo túi xách, thể thao. Hotline: 0353788878.",
  keywords: ["dây dù", "dây đai thun", "paracord", "eband", "gia công dây", "sản xuất dây", "may mặc", "balo túi xách", "Minh Tiến", "Củ Chi"],
  authors: [{ name: "MINH TIEN STRING CO., LTD" }],
  openGraph: {
    title: "MINH TIEN STRING CO., LTD - Sản xuất dây dù, dây đai thun chất lượng cao",
    description: "Công ty TNHH sản xuất dây Minh Tiến chuyên sản xuất và gia công dây dù, dây đai thun cho ngành may mặc, balo túi xách, thể thao",
    type: "website",
    locale: "vi_VN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="mdl-js">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
