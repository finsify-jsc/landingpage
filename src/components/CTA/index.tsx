import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { translate } from '@docusaurus/Translate';

export const CTA = () => {
  const [isMobile, setIsMobile] = useState<Boolean>(false);
  const [iOS, setIOS] = useState<Boolean>(false);
  const [android, setAndroid] = useState<Boolean>(false);

  useState(() => {
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
        window.navigator.userAgent,
      )
        ? true
        : false,
    );
    setIOS(
      !!window.navigator.platform &&
        /iPad|iPhone|iPod/.test(window.navigator.platform),
    );
    setAndroid(/(android)/i.test(window.navigator.userAgent));
  });

  function sendGaEvent(category) {
    var action;
    var label = isMobile ? 'mobile' : 'web';
    if (label === 'mobile') {
      if (iOS) {
        action = 'Ios';
      } else if (android) {
        action = 'Android';
      } else {
        action = 'Mobile';
      }
    }
    gtag('send', 'event', category, action, label);
  }

  return (
    <section id="cta" className="container mt-18 lg:mt-44 lg:mb-14">
      <div className="relative grid grid-cols-12 bg-green-ml py-12 lg:py-20 rounded-2xl">
        <div className="col-span-12 col-start-1 lg:col-start-3 lg:col-end-8">
          <p className="mb-2 text-center lg:text-left text-monochrome-white text-24 leading-32 font-medium lg:font-medium lg:text-40 lg:leading-52">
            {translate({ id: 'cta.slogan' })}
          </p>
          <p
            style={{ color: '#F3F3F3' }}
            className="mb-9 text-center lg:text-left leading-32"
          >
            {translate({ id: 'cta.slogan.sub' })}
          </p>
          <div className="flex justify-center lg:justify-start w-full">
            <a
              href="https://itunes.apple.com/app/apple-store/id486312413?pt=694013&ct=landing&mt=8"
              className="mr-1"
            >
              <img src={useBaseUrl('img/marketplace/appstore.svg')} alt="" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.bookmark.money&referrer=utm_source%3Dlanding"
              className="ml-1"
            >
              <img src={useBaseUrl('img/marketplace/google-play.svg')} alt="" />
            </a>
          </div>
        </div>
        <img
          className="invisible w-1/5 lg:visible absolute bottom-0 lg:left-2/3"
          src={useBaseUrl('img/MOCKUP@4x.png')}
          alt=""
        />
      </div>
    </section>
  );
};
