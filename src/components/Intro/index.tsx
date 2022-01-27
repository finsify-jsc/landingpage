import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import { IntroData } from './data';

const FigureIntro: React.FC = ({ children }) => (
  <figure className="grid grid-cols-2 gap-x-2 gap-y-4 lg:gap-x-6 lg:grid-cols-4">
    {children}
  </figure>
);

export const Intro = () => {
  return (
    <section className="container bg-monochrome-white mt-14 lg:pt-0">
      <FigureIntro>
        {IntroData &&
          IntroData.map(({ image, description }) => {
            return (
              <div
                key={Math.random()}
                className="flex p-4 lg:px-2 lg:py-6 gap-y-2 lg:gap-y-4 rounded-lg bg-monochrome-light flex-col items-center"
              >
                <img src={useBaseUrl(image)} alt="" />
                <p className="font-bold text-dark-tiny leading-24 text-center lg:text-20 lg:leading-28 lg:whitespace-nowrap">
                  {description}
                </p>
              </div>
            );
          })}
      </FigureIntro>
    </section>
  );
};
