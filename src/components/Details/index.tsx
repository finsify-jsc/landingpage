import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

const Figure: React.FC = ({ children }) => (
  <figure
    className={clsx(
      styles.figure,
      'grid grid-cols-8 lg:grid-cols-12 items-center justify-items-start gap-y-4 lg:gap-y-0 pb-14 md:py-0',
    )}
  >
    {children}
  </figure>
);

export const Details = () => {
  return (
    <section className="container mt-14 lg:mt-44 bg-monochrome-white">
      <Figure>
        <figcaption className="col-span-full lg:col-span-6 lg:place-self-center lg:self-center order-2">
          <h3 className="text-26 tracking-tight font-medium lg:text-40 lg:leading-52 leading-32 text-dark-tiny">
            <Translate id="details.one">Simple money tracker</Translate>
          </h3>
          <p className="mt-2 text-monochrome-shade">
            <Translate id="details.one.desc">
              It takes seconds to record daily transactions. Put them into clear
              and visualized categories such as Expense: Food, Shopping or
              Income: Salary, Gift.
            </Translate>
          </p>
        </figcaption>
        <div className="order-2 md:order-1 col-span-full md:col-span-4 lg:col-span-6 lg:place-self-center lg:self-center">
          <div className={clsx(styles.imgWrapper, 'md:w-4/6 lg:w-3/4 mx-auto')}>
            <img
              src={useBaseUrl('img/details/Transaction@4x.png')}
              alt="coverage"
            />
          </div>
        </div>
      </Figure>
      <Figure>
        <figcaption className="col-span-full md:col-span-4 lg:col-span-6 lg:place-self-center lg:self-center order-2 md:order-1">
          <h3 className="text-26 tracking-tight font-medium lg:text-40 lg:leading-52 leading-32 text-dark-tiny">
            <Translate id="details.two">Painless budgeting</Translate>
          </h3>
          <p className="mt-2 text-monochrome-shade">
            <Translate id="details.one.desc">
              Set budgets that are easy to stick to, based on your own spending
              habits. You’re one step closer to that stuff you want to buy.
            </Translate>
          </p>
        </figcaption>
        <div className="order-2 md:order-2 col-span-full md:col-span-4 lg:col-span-6 lg:place-self-center lg:self-center">
          <div className={clsx(styles.imgWrapper, 'md:w-4/6 lg:w-3/4 mx-auto')}>
            <img
              src={useBaseUrl('img/details/budget@4x.png')}
              alt="risks and tests to run"
            />
          </div>
        </div>
      </Figure>
      <Figure>
        <figcaption className="col-span-full md:col-span-4 lg:col-span-6 lg:place-self-center lg:self-center order-2">
          <h3 className="text-26 tracking-tighter font-medium lg:text-40 lg:leading-52 leading-32 text-dark-tiny">
            <Translate id="details.three">
              The whole picture in one place
            </Translate>
          </h3>
          <p className="mt-2 text-monochrome-shade">
            <Translate id="details.three.desc">
              One report to give a clear view on your spending patterns.
              Understand where your money comes and goes with easy-to-read
              graphs.
            </Translate>
          </p>
        </figcaption>
        <div className="order-2 md:order-1 col-span-full md:col-span-4 lg:col-span-6 lg:place-self-center lg:self-center">
          <div className={clsx(styles.imgWrapper, 'md:w-4/6 lg:w-3/4 mx-auto')}>
            <img
              src={useBaseUrl('img/details/REPORT@4x.png')}
              alt="time savings"
            />
          </div>
        </div>
      </Figure>
    </section>
  );
};
