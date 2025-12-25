"use client";

import { useEffect } from "react";

export function StructuredData() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Loperena Agency",
      "description": "Smart home technology for seniors in Central Florida. Aging in place solutions with discreet sensors, automatic lighting, and family connection.",
      "url": "https://loperena.agency",
      "telephone": "+14070000000",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lake Nona",
        "addressRegion": "FL",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Lake Nona" },
        { "@type": "City", "name": "The Villages" },
        { "@type": "City", "name": "Windermere" },
        { "@type": "City", "name": "Kissimmee" }
      ],
      "priceRange": "$$",
      "serviceType": "Smart Home Technology Installation and Support for Seniors"
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return null;
}


