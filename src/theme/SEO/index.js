import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SEO() {

  // const {
  //   i18n: { locales, defaultLocale, localeConfigs },
  //   siteConfig: { url },
  // } = useDocusaurusContext();

  // const path =
  //   typeof window !== 'undefined' ? window.location.pathname : '/';

  // // Set to collect unique hreflang URLs
  // const hreflangSet = new Set();
  // const hreflangs = [];

  // locales.forEach((locale) => {
  //   const langCode = localeConfigs[locale]?.htmlLang || locale;

  //   let hrefLangPath = path;
  //   if (locale !== defaultLocale) {
  //     hrefLangPath = `/${locale}${path}`;
  //   } else {
  //     if (path.startsWith('/fa/') || path.startsWith('/en/')) {
  //       hrefLangPath = path.replace(/^\/(fa|en)/, '');
  //     }
  //   }
    // حذف اسلش انتهایی در صورت نیاز
    // if (hrefLangPath !== '/' && hrefLangPath.endsWith('/')) {
    //   hrefLangPath = hrefLangPath.slice
    // }


  //   if (hrefLangPath !== '/' && hrefLangPath.endsWith('/')) {
  //     hrefLangPath = hrefLangPath.slice(0, -1);
  //   }

  //   const fullUrl = `${url}${hrefLangPath}`;

  //   if (!hreflangSet.has(fullUrl)) {
  //     hreflangSet.add(fullUrl);
  //     hreflangs.push(
  //       <link
  //         key={langCode}
  //         rel="alternate"
  //         href={fullUrl}
  //         hreflang={langCode}
  //       />
  //     );
  //   }
  // });

  // // x-default (به شرط اینکه آدرسش تکراری نباشه)
  // const defaultHref = path.replace(/^\/(fa|en)/, '') || '/';
  // const defaultFullUrl = `${url}${defaultHref}`;

  // if (!hreflangSet.has(defaultFullUrl)) {
  //   hreflangs.push(
  //     <link
  //       key="x-default"
  //       rel="alternate"
  //       href={defaultFullUrl}
  //       hreflang="x-default"
  //     />
  //   );
  // }

  // return <Head>{hreflangs}</Head>;

}
