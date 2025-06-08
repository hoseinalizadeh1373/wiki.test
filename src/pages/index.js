import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import { translate } from '@docusaurus/Translate';



function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{translate({ message: siteConfig.tagline })}</h1>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/pbx">
              {translate({ message: "آشنایی با سیموتل – فقط پنچ دقیقه ⏱️" })}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const siteTitle = translate({ message: "siteTitle" });
  const siteTitle2 = translate({ message: "siteTitle2" });


  let fullTitle = `${siteTitle} | ${siteTitle2}`.replace(/\|?\s*$/, '');
  
  return (
    <Layout
     title={siteTitle}
      description={translate({message: "siteDesc"})}>
      
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
