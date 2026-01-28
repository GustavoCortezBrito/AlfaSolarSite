'use client'

import { NextSeo } from 'next-seo'

export default function SEO() {
  return (
    <NextSeo
      title="Alfa Solar - Energia Solar em Presidente Prudente/SP | Orçamento Grátis"
      description="Especialistas em energia solar fotovoltaica em Presidente Prudente/SP. Orçamento, projeto e instalação. Economize até 95% na conta de luz. Solicite orçamento grátis!"
      canonical="https://alfasolar.com.br"
      openGraph={{
        type: 'website',
        locale: 'pt_BR',
        url: 'https://alfasolar.com.br',
        siteName: 'Alfa Solar',
        title: 'Alfa Solar - Energia Solar em Presidente Prudente/SP',
        description: 'Especialistas em energia solar fotovoltaica. Orçamento, projeto e instalação. Economize até 95% na conta de luz.',
        images: [
          {
            url: '/opengraph-image.png',
            width: 1200,
            height: 630,
            alt: 'Alfa Solar - Energia Solar Fotovoltaica',
          }
        ],
      }}
      twitter={{
        handle: '@alfasolar',
        site: '@alfasolar',
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: 'energia solar, painel solar, energia fotovoltaica, presidente prudente, economia energia, sustentabilidade, energia limpa, orçamento solar'
        },
        {
          name: 'author',
          content: 'Alfa Solar'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]}
    />
  )
}