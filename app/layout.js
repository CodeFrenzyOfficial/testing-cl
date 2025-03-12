import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/components/animate-on-scroll/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Explore Claw Coin on Solana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="icon"
            href="/favicon-32x32.png"
            type="image.png"
            sizes="<generated>"
          />
          <link
            rel="apple-touch-icon"
            href="/apple-touch-icon.png"
            type="image.png"
            sizes="<generated>"
          />
        </head>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
