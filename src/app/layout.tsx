import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
// import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "SarkariResult - Latest Government Jobs, Results & Admit Cards 2026",
  description: "Find latest Sarkari Result, Government Jobs, Sarkari Naukri, Admit Card, Answer Key, Results, Syllabus for Railway, Bank, SSC, UPSC, State PSC and more.",
  keywords: "sarkari result, sarkari naukri, government jobs, govt jobs, admit card, answer key, results, railway jobs, bank jobs, SSC, UPSC",
  openGraph: {
    title: "SarkariResult - Latest Government Jobs & Results 2026",
    description: "Get instant updates on Sarkari Result, Government Jobs, Admit Cards, Answer Keys and more.",
    type: "website",
    locale: "en_IN",
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
    <html lang="en">
      <body className="antialiased">
        {/* <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="11abf006-070a-46a1-8fdb-1d980840765e"
        /> */}
        {/* <ErrorReporter /> */}
        {/* <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
