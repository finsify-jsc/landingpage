import React, { useEffect, useState } from 'react';
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
import ReactGA from '../hooks/use-ga';

function Home() {
  const {
    navbar: { items },
  } = useThemeConfig();
  const { label, to }: any = items[items.length - 1];
  const [isMobile, setIsMobile] = useState<Boolean>(false);
  const [iOS, setIOS] = useState<Boolean>(false);
  const [android, setAndroid] = useState<Boolean>(false);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      typeof window.navigator !== 'undefined'
    ) {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
          ? true
          : false,
      );
      setIOS(
        !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
      );
      setAndroid(/(android)/i.test(navigator.userAgent));
    }
  }, []);

  const sendGaEvent = (category) => {
    let action;
    let label = isMobile ? 'mobile' : 'web';
    if (label === 'mobile') {
      if (iOS) {
        action = 'Ios';
      } else if (android) {
        action = 'Android';
      } else {
        action = 'Mobile';
      }
    }
    ReactGA.event({ category, action, label });
  };
  return (
    <Layout
      title={translate({
        id: 'title',
        message: 'No.1 Expense Manager & Budget Planner - Money Lover',
      })}
      description="Simple way to manage personal finances"
    >
      <main className={styles.mainPageWrapper}>
        <Header sendGaEvent={sendGaEvent} to={to} />
        <Intro />
        <Details />
        <FeatureList />
        <Reviews />
        <CTA sendGaEvent={sendGaEvent} />
      </main>
    </Layout>
  );
}

export default Home;
