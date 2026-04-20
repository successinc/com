import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Success Inc. | স্বপ্ন পূরণ হোক ভ্রমণের সাথে",
  description:
    "Success Inc. - ফ্লাইট টিকেট, কানাডা, ইউকে, অস্ট্রেলিয়া, শেঙ্গেন ভিসা ও ওয়ার্ক পারমিট সহ সম্পূর্ণ ভ্রমণ ও ইমিগ্রেশন সেবা। সিলেট, বাংলাদেশ।",
  keywords: [
    "Success Inc.",
    "ভ্রমণ",
    "ফ্লাইট টিকেট",
    "কানাডা ভিসা",
    "ইউকে ভিসা",
    "অস্ট্রেলিয়া ভিসা",
    "শেঙ্গেন ভিসা",
    "ওয়ার্ক পারমিট",
    "ইমিগ্রেশন",
    "সিলেট",
  ],
  authors: [{ name: "Success Inc." }],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Success Inc. | স্বপ্ন পূরণ হোক ভ্রমণের সাথে",
    description:
      "ফ্লাইট টিকেট, ভিসা প্রসেসিং ও ইমিগ্রেশন সেবা — সিলেট, বাংলাদেশ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
