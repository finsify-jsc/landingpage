import React from 'react';
import Layout from '@theme/Layout';
import { useThemeConfig } from '@docusaurus/theme-common';
import styles from './styles.module.scss';
import {
  CTA,
  Details,
  FeatureList,
  Header,
  Intro,
  Reviews,
} from '../components/index';
import { translate } from '@docusaurus/Translate';

function Home() {
  const {
    navbar: { items },
  } = useThemeConfig();
  const { label, to }: any = items[items.length - 1];

  return (
    <Layout
      title={translate({
        id: 'title',
        message: 'Ứng dụng quản tài chính cá nhân số 1 thế giới - Money Lover',
      })}
      description="Simple way to manage personal finances"
    >
      <main className={styles.mainPageWrapper}>
        <Header to={to} />
        <Intro />
        <Details />
        <FeatureList />
        <Reviews />
        <CTA />
      </main>
    </Layout>
  );
}

export default Home;
