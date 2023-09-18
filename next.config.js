const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
  },
  redirects: () => [
    {
      source: "/api/:slug*",
      destination: "/aypeeeye/:slug*", // Matched parameters can be used in the destination
      permanent: true,
    },
    // redirect /install to /self-host/install
    {
      source: "/install/:slug*",
      destination: "/self-host-install/:slug*",
      permanent: true,
    },
    // redirect /troubleshooting to /self-host/troubleshooting
    {
      source: "/troubleshooting/:slug*",
      destination: "/self-host-troubleshooting/:slug*",
      permanent: true,
    },
    // redirect /upgrade to /self-host/upgrade
    {
      source: "/upgrade/:slug*",
      destination: "/self-host-upgrade/:slug*",
      permanent: true,
    },
  ]
});
