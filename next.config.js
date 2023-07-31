const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra(
  {
    i18n: {
      locales: ['en', 'zh'],
      defaultLocale: 'en'
    },
    async redirects() {
      return [
        {
          source: '/api/:slug*',
          destination: '/aypeeeye/:slug*', // Matched parameters can be used in the destination
          permanent: true,
        },
      ]
    },
  }  
)
