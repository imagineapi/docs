import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
    logo: (
        <Image
            src="/logo-with-text.svg"
            alt="ImagineAPI"
            width={200}
            height={40}
        />
    ),
    logoLink: "https://www.imagineapi.dev",
    footer: {
        text: "ImagineAPI.dev Documentation",
    },
    nextThemes: {
        defaultTheme: "dark",
        storageKey: "theme",
    },
    darkMode: true,
    // docsRepositoryBase: 'https://github.com/imagineapi/docs',
    docsRepositoryBase: "https://github.com/imagineapi/docs/blob/main",
    head: (
        <>
            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: `
      !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
      posthog.init('phc_WqeHVVgRUV2bUHZSIQEBM3QRprwIfO2BWwHgdU4wo2L',{api_host:'https://ph.imagineapi.dev'})`,
                }}
            ></script>
            <meta name="twitter:card" content="summary_large_image" />
            <meta
                name="twitter:image"
                content="https://docs.imagineapi.dev/social.png"
            />
            <link rel="icon" type="image/png" href="/favicon.png" />
            {/** @ts-ignore */}
            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: 'window.$crisp=[];window.CRISP_WEBSITE_ID="9c996c4e-93b4-4ff2-bcd5-5407f5b2de0e";(function(){d = document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();',
                }}
            ></script>
        </>
    ),
    useNextSeoProps() {
        const { frontMatter } = useConfig();
        return {
            description:
                frontMatter.description ||
                "Dive into the ImagineAPI documentation to integrate the MidJourney API into your projects and generate Midjourney images.",
            openGraph: {
                images: [
                    {
                        url:
                            frontMatter.image ||
                            "https://docs.imagineapi.dev/social.png",
                    },
                ],
                url: "https://docs.imagineapi.dev",
                type: "website",
            },
            titleTemplate: "%s – ImagineAPI.dev Documentation",
            twitter: {
                cardType: "summary_large_image",
                site: "https://docs.imagineapi.dev",
                handle: "@midjourneyapi",
            },
        };
    },
    i18n: [
        { locale: "en", text: "English" },
        { locale: "zh", text: "中文" },
    ],
};

export default config;
