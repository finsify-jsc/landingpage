import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

const Figure: React.FC = ({ children }) => (
  <figure
    className={clsx(
      styles.figure,
      'grid grid-cols-8 lg:grid-cols-12 items-center justify-items-start gap-x-5 gap-y-4 lg:gap-y-0 lg:gap-x-14 pb-14 md:py-0',
    )}
  >
    {children}
  </figure>
);

export const Details = () => {
  return (
    <section className="container bg-monochrome-white pt-14">
      <Figure>
        <figcaption className="col-span-full md:col-span-4 lg:col-span-5 order-2">
          <h3 className="text-26 font-medium leading-32 text-dark-tiny">
            Simple money tracker
          </h3>
          <p className="mt-2 text-monochrome-shade">
            It takes seconds to record daily transactions. Put them into clear
            and visualized categories such as Expense: Food, Shopping or Income:
            Salary, Gift.
          </p>
        </figcaption>
        <div className="order-2 md:order-1 col-span-full md:col-span-4 lg:col-span-6 place-self-center lg:place-self-end lg:self-center">
          <div className={clsx(styles.imgWrapper, '')}>
            <img
              src={useBaseUrl('img/details/Transaction.png')}
              alt="coverage"
            />
          </div>
        </div>
      </Figure>
      <Figure>
        <figcaption className="col-span-full md:col-span-4 lg:col-start-2 lg:col-span-5 order-2 md:order-1">
          <h3 className="text-26 font-medium leading-32 text-dark-tiny">
            Painless budgeting
          </h3>
          <p className="mt-2 text-monochrome-shade">
            Set budgets that are easy to stick to, based on your own spending
            habits. You’re one step closer to that stuff you want to buy.
          </p>
        </figcaption>
        <div className="order-2 md:order-2 col-span-full md:col-span-4 lg:col-span-6 place-self-center lg:place-self-start lg:self-center">
          <div className={clsx(styles.imgWrapper, '')}>
            <img
              src={useBaseUrl('img/details/budget.png')}
              alt="risks and tests to run"
            />
          </div>
        </div>
      </Figure>
      <Figure>
        <figcaption className="col-span-full md:col-span-4 lg:col-span-5 order-2">
          <h3 className="text-26 font-medium leading-32 text-dark-tiny">
            The whole picture in one place
          </h3>
          <p className="mt-2 text-monochrome-shade">
            One report to give a clear view on your spending patterns.
            Understand where your money comes and goes with easy-to-read graphs.
          </p>
        </figcaption>
        <div className="order-2 md:order-1 col-span-full md:col-span-4 lg:col-span-6 place-self-center lg:place-self-end lg:self-center">
          <div className={clsx(styles.imgWrapper, '')}>
            <img
              src={useBaseUrl('img/details/REPORT.png')}
              alt="time savings"
            />
          </div>
        </div>
      </Figure>
    </section>
  );
};
