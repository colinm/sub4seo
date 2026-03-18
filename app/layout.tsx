import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import FloatingEstimateButton from "@/components/shared/FloatingEstimateButton";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2a2e40",
};

export const metadata: Metadata = {
  title: {
    default:
      "Suburban Construction | Replacement Windows, Siding & Doors | Quad Cities",
    template: "%s | Suburban Construction",
  },
  description:
    "Suburban Construction — the Quad Cities' trusted home improvement contractor since 1985. Replacement windows, siding, doors, and gutters in Davenport, Bettendorf, Moline, Rock Island, and the surrounding 90-mile radius.",
  metadataBase: new URL("https://www.suburbanconstruction.com"),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Suburban Construction",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${dancingScript.variable}`}
    >
      <head>
        <link rel="preload" as="image" href="/main.jpg" fetchPriority="high" />
      </head>
      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SMSKZH24G0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SMSKZH24G0');
          `}
        </Script>
        <LocalBusinessSchema />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <MobileCTABar />
        <FloatingEstimateButton />
      </body>
    </html>
  );
}
