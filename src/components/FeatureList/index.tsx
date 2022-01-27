import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import { FeatureData } from './data';

export const FeatureList = () => {
  return (
    <section className="container mt-14 lg:mt-44">
      <h1 className="text-26 text-dark-tiny leading-32 font-medium text-center">
        Features our users love
      </h1>
      <div className="grid mt-6 lg:mt-12 gap-y-8 lg:gap-x-10 lg:gap-y-12 grid-cols-1 lg:grid-cols-3">
        {FeatureData &&
          FeatureData.map(({ image, title, desc }) => {
            return (
              <div
                key={Math.random()}
                className="flex flex-col items-center justify-center"
              >
                <img src={useBaseUrl(image)} alt={title} />
                <h3 className="text-16 font-bold lg:mt-6 leading-24 text-center mt-3 text-dark-tiny">
                  {title}
                </h3>
                <p className="pt-1 px-4 lg:pt-2 text-16 leading-24 text-dark-brown text-center">
                  {desc}
                </p>
              </div>
            );
          })}
      </div>
    </section>
  );
};
