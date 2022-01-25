import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import { IntroData } from './data';

const FigureIntro: React.FC = ({ children }) => (
  <figure className="grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-4">
    {children}
  </figure>
);

export const Intro = () => {
  return (
    <section className="container bg-monochrome-white pt-14 md:pt-0">
      <FigureIntro>
        {IntroData &&
          IntroData.map(({ image, description }) => {
            return (
              <div className="flex rounded-lg bg-monochrome-light flex-col items-center text-center">
                <img className="pt-4" src={useBaseUrl(image)} alt="" />
                <p className="font-bold pb-4 text-dark-tiny leading-24 text-center px-4 mt-2 md:text-20 md:mt-4 md:leading-28">
                  {description}
                </p>
              </div>
            );
          })}
      </FigureIntro>
    </section>
  );
};
