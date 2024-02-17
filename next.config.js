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
        // redirect /troubleshooting to /self-host-install/troubleshooting
        {
            source: "/troubleshooting/:slug*",
            destination: "/self-host-install/troubleshooting",
            permanent: true,
        },
        // redirect /upgrade to /self-host-install/upgrade
        {
            source: "/upgrade/:slug*",
            destination: "/self-host-install/upgrade",
            permanent: true,
        },
        // reditect all .en
        {
            source: "/:slug*.en",
            destination: "/:slug*",
            permanent: true,
        },
        //redirect all .zh to /zh/
        {
            source: "/:slug*.zh",
            destination: "/:slug*",
            permanent: true,
        },
    ],
});
