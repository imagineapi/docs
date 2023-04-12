import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  logo: <Image src="/logo-white.svg" alt="ImagineAPI" width={80} height={80} />,
  chat: {
    link: 'https://discord.gg/AWeASBr8',
  },
  docsRepositoryBase: 'https://docs.imagineapi.dev',
  footer: {
    text: 'ImagineAPI Documentation',
  },
}

export default config
