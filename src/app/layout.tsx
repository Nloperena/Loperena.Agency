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
  title: "Smart Home Technology for Seniors in Central Florida | Loperena Agency",
  description: "Senior-friendly smart home technology in Lake Nona, The Villages, and Windermere. Aging in place solutions with discreet sensors, automatic lighting, and family connection. $99 Harmony Check available.",
  keywords: [
    "smart home for seniors",
    "aging in place technology",
    "senior home automation Central Florida",
    "smart home Lake Nona",
    "smart home The Villages",
    "smart home Windermere",
    "senior safety technology",
    "elder care technology",
    "independent living technology",
    "smart home for elderly"
  ],
  openGraph: {
    title: "Smart Home Technology for Seniors | Loperena Agency",
    description: "Simple, caring technology that looks out for you. Independence Enablement in Central Florida.",
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
