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
  title: "Paracord Pro - Sản xuất dây dù, dây đai thun chất lượng cao",
  description: "Chuyên sản xuất và gia công dây dù, dây đai thun cho ngành may mặc, balo túi xách, thể thao. Liên hệ ngay để được tư vấn và báo giá.",
  keywords: ["dây dù", "dây đai thun", "paracord", "eband", "gia công dây", "sản xuất dây", "may mặc", "balo túi xách"],
  authors: [{ name: "Paracord Pro" }],
  openGraph: {
    title: "Paracord Pro - Sản xuất dây dù, dây đai thun chất lượng cao",
    description: "Chuyên sản xuất và gia công dây dù, dây đai thun cho ngành may mặc, balo túi xách, thể thao",
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
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
