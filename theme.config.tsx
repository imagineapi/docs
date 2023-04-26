import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import { useConfig } from 'nextra-theme-docs'


const config: DocsThemeConfig = {
  logo: <Image src="/logo-with-text.svg" alt="ImagineAPI" width={200} height={40} />,
  logoLink: 'https://www.imagineapi.dev',
  chat: {
    link: 'https://discord.gg/AWeASBr8',
  },
  footer: {
    text: 'ImagineAPI Documentation',
  },
  nextThemes: {
    defaultTheme: 'dark',
    storageKey: 'theme'
  },
  darkMode: true,
  docsRepositoryBase: 'https://github.com/imagineapi/docs',
  head: (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://docs.imagineapi.dev/social.png" />
      <link rel="icon" type="image/png" href="/favicon.png" />
    </>
  ),
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
