import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "../../public/font/inter/package/400Regular/Inter_400Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/inter/package/700Bold/Inter_700Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = localFont({
  src: [
    {
      path: "../../public/font/playfair/package/400Regular/PlayfairDisplay_400Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/playfair/package/700Bold/PlayfairDisplay_700Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-playfair-display",
  display: "swap",
});

const lianmengHeiti = localFont({
  src: "../../public/font/lianmeng/package/联盟起艺卢帅正锐黑体.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-lianmeng-heiti",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "南京河西学校",
    template: "%s | 南京河西学校",
  },
  description: "南京河西学校官网，涵盖学校概况、办学优势、校园风采与联系方式等内容。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.className} ${inter.variable} ${playfairDisplay.variable} ${lianmengHeiti.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
