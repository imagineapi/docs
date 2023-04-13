import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import { useConfig } from 'nextra-theme-docs'


const config: DocsThemeConfig = {
  logo: <Image src="/logo-white.svg" alt="ImagineAPI" width={80} height={80} />,
  chat: {
    link: 'https://discord.gg/AWeASBr8',
  },
  docsRepositoryBase: 'https://docs.imagineapi.dev',
  footer: {
    text: 'ImagineAPI Documentation',
  },
  useNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      description:
        frontMatter.description || 'The MidJourney API (unofficial) Documentation',
      openGraph: {
        images: [
          { url: frontMatter.image || 'https://docs.imagineapi.dev/social.png' }
        ]
      },
      titleTemplate: '%s – ImagineAPI Documentation',
      twitter: {
        cardType: 'summary_large_image',
        site: 'https://docs.imagineapi.dev'
      }
    }
  }
}

export default config
