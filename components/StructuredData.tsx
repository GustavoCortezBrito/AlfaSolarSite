'use client'

import Head from 'next/head'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Alfa Solar",
    "description": "Especialistas em energia solar fotovoltaica em Presidente Prudente/SP. Orçamento, projeto e instalação de sistemas de energia solar.",
    "url": "https://alfasolar.com.br",
    "telephone": "+5518999999999",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Presidente Prudente",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -22.1256,
      "longitude": -51.3895
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-12:00"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -22.1256,
        "longitude": -51.3895
      },
      "geoRadius": "100000"
    },
    "priceRange": "$$",
    "image": "/opengraph-image.png",
    "sameAs": [
      "https://www.facebook.com/alfasolar",
      "https://www.instagram.com/alfasolar"
    ]
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  )
}