import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { UIProvider } from "@/context/UIContext";
import { StructuredData } from "@/components/StructuredData";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Privacy-First Senior Smart Home Solutions in Central Florida | IndepeNEST",
  description: "Empower independent living with discreet radar-based fall detection and smart home tech for seniors in Orlando and Tampa. No cameras, full privacy. Book a safety audit today.",
  keywords: [
    "senior smart home Central Florida",
    "privacy smart home for elderly Orlando",
    "aging in place technology Tampa",
    "fall detection without cameras Florida",
    "discreet senior safety installations",
    "independent living tech for seniors",
    "radar-based home monitoring",
    "non-invasive senior care tech",
    "smart home safety audit Central Florida",
    "elderly home automation privacy"
  ],
  openGraph: {
    title: "Privacy-First Senior Smart Home Solutions in Central Florida | IndepeNEST",
    description: "Empower independent living with discreet radar-based fall detection and smart home tech for seniors in Orlando and Tampa. No cameras, full privacy.",
    type: "website",
    locale: "en_US",
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
      <body
        className={`${plusJakartaSans.variable} antialiased font-plus-jakarta`}
      >
        <StructuredData />
        <UIProvider>
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
