import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import Headsvg from '@site/static/img/greatwall.svg'
import GoBike from '@site/static/img/goBike.svg'
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={clsx(styles.indexImg)}>
      <Headsvg className={clsx(styles.svg)}/>
      <GoBike className={clsx(styles.svg)}/>
    </div>
    
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
