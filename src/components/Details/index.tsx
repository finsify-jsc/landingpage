import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

const Figure: React.FC = ({ children }) => (
  <figure
    className={clsx(
      styles.figure,
      'grid grid-cols-8 lg:grid-cols-12 items-center justify-items-start gap-x-5 pb-14 md:py-0',
    )}
  >
    {children}
  </figure>
);

export const Details = () => {
  return (
    <section className="container bg-monochrome-white pt-14">
      <Figure>
        <figcaption className="flex flex-col justify-center col-span-full md:col-span-4 lg:col-span-5 order-2">
          <h3 className="text-26 font-medium leading-32 text-dark-tiny">
            Simple money tracker
          </h3>
          <p className="mt-2 text-monochrome-shade">
            It takes seconds to record daily transactions. Put them into clear
            and visualized categories such as Expense: Food, Shopping or Income:
            Salary, Gift.
          </p>
        </figcaption>
        <div className="relative mt-8 order-2 md:order-1 col-span-full md:col-span-4 lg:col-span-6 w-full md:w-11/12">
          <div
            className={clsx(styles.imgWrapper, 'flex justify-center w-full')}
            style={{
              borderRadius: '14px',
              boxShadow: '0 0 6px rgba(0,0,0,0.04), 0 0 8px rgba(0,0,0,0.04)',
            }}
          >
            <img
              className="w-full"
              style={{ borderRadius: '14px' }}
              src={useBaseUrl('img/details/Transaction.png')}
              alt="coverage"
            />
          </div>
        </div>
      </Figure>
      <Figure>
        <figcaption className="flex flex-col justify-center col-span-full md:col-span-4 lg:col-span-5 order-2 md:order-1">
          <h3 className="text-26 font-medium leading-32 text-dark-tiny">
            Painless budgeting
          </h3>
          <p className="mt-2 text-monochrome-shade">
            Set budgets that are easy to stick to, based on your own spending
            habits. You’re one step closer to that stuff you want to buy.
          </p>
        </figcaption>
        <div className="relative mt-8 order-2 md:order-2 lg:col-start-7 col-span-full md:col-span-4 lg:col-span-6 z-10 w-full">
          <div
            className={clsx(styles.imgWrapper, 'flex justify-center w-full')}
            style={{
              borderRadius: '14px',
              boxShadow: '0 0 6px rgba(0,0,0,0.04), 0 0 8px rgba(0,0,0,0.04)',
            }}
          >
            <img
              className="w-full"
              style={{
                borderRadius: '14px',
              }}
              src={useBaseUrl('img/details/budget.png')}
              alt="risks and tests to run"
            />
          </div>
        </div>
      </Figure>
      <Figure>
        <figcaption className="flex flex-col justify-center col-span-full md:col-span-4 lg:col-span-5 order-2">
          <h3 className="text-26 font-medium leading-32 text-dark-tiny">
            The whole picture in one place
          </h3>
          <p className="mt-2 text-monochrome-shade">
            One report to give a clear view on your spending patterns.
            Understand where your money comes and goes with easy-to-read graphs.
          </p>
        </figcaption>
        <div className="relative mt-8 order-2 md:order-1 col-span-full md:col-span-4 lg:col-span-6 w-full md:w-11/12">
          <div
            className={clsx(styles.imgWrapper, 'flex justify-center w-full')}
            style={{
              borderRadius: '14px',
              boxShadow: '0 0 6px rgba(0,0,0,0.04), 0 0 8px rgba(0,0,0,0.04)',
            }}
          >
            <img
              className="w-full"
              style={{
                borderRadius: '14px',
              }}
              src={useBaseUrl('img/details/REPORT.png')}
              alt="time savings"
            />
          </div>
        </div>
      </Figure>
    </section>
  );
};
