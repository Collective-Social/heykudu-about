import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "heykudu | Real-Time Medical Education Tracking & Analytics",
  description: "Seamlessly monitor Attendance, WBAs, and EPAs with surgical precision and clear real-time visibility for students, residents, and global clinical institutions.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
    },
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
        <Script id="session-rewind" strategy="afterInteractive">
          {`
            !function (o) {
              var w = window;
              w.SessionRewindConfig = o;
              var f = document.createElement("script");
              f.async = 1, f.crossOrigin = "anonymous",
                f.src = "https://rec.sessionrewind.com/srloader.js";
              var g = document.getElementsByTagName("head")[0];
              g.insertBefore(f, g.firstChild);
            }({
              apiKey: 'ttXErZctR3aSnUGvFDjGq7DHF0LkXMql4U38GMPc',
              startRecording: true,
            });
          `}
        </Script>
      </head>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} font-sans bg-surface text-on-surface antialiased`}
        style={{
          fontFamily: "var(--font-inter), sans-serif"
        }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

