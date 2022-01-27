import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export const CTA = () => {
  return (
    <section className="container flex justify-center mt-18 lg:mt-44 lg:pb-14">
      <div className="relative bg-green-ml py-12 lg:py-20 lg:px-28 rounded-2xl w-full lg:w-9/12">
        <p className="mb-2 text-monochrome-white text-24 px-4 lg:px-0 leading-32 font-medium text-center lg:text-left lg:font-medium lg:text-40 lg:leading-52">
          Take your finances to <br className="hidden lg:block" /> the next
          levels!
        </p>
        <p
          style={{ color: '#F3F3F3' }}
          className="mb-9 text-center lg:text-left lg:mb-8 leading-32"
        >
          Don&rsquo;t hesite, money matters.
        </p>
        <div className="flex justify-center lg:justify-start w-full">
          <a href="/" className="mr-1">
            <img src={useBaseUrl('img/marketplace/appstore.svg')} alt="" />
          </a>
          <a href="/" className="ml-1">
            <img src={useBaseUrl('img/marketplace/google-play.svg')} alt="" />
          </a>
        </div>
        <img
          className="invisible lg:visible absolute bottom-0 w-60 lg:right-28"
          src={useBaseUrl('img/MOCKUP.png')}
          alt=""
        />
      </div>
    </section>
  );
};
