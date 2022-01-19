/* eslint-disable max-len */
import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useThemeConfig } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
// import { RellaxWrapper } from 'react-rellax-wrapper';

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

const FigureIntro: React.FC = ({ children }) => (
  <figure className="grid grid-cols-2 md:grid-cols-4">{children}</figure>
);

function Home() {
  const {
    navbar: { items },
  } = useThemeConfig();
  const { label, to }: any = items[items.length - 1];

  return (
    <Layout description="Simple way to manage personal finances">
      <main className={styles.mainPageWrapper}>
        <div className={clsx(styles.parallax)}>
          <div className="container md:pt-20 pb:12 md:pb-24 md:h-full">
            <div className="md:px-14 lg:px-44">
              <h1 className="font-ibm font-medium text-36 md:text-64 text-green-ml leading-52 md:leading-83 mb-1 text-center">
                Simple way
              </h1>
              <p className="font-ibm text-36 text-dark-brown leading-48 md:leading-56 md:text-40 text-center">
                <h1 className="font-ibm text-dark-brown font-light text-36 leading-48 md:inline">
                  to manage
                </h1>
                <h1 className="font-ibm font-medium text-36 leading-48 md:inline text-green-ml">
                  personal finances
                </h1>
              </p>

              <div className="flex justify-around md:justify-around mt-9">
                <Link
                  style={{ textDecoration: 'none' }}
                  className="button-ml text-16 w-164px md:w-full"
                  to={useBaseUrl(to)}
                >
                  Try on browser
                </Link>
                <Link
                  style={{ textDecoration: 'none' }}
                  className="button-ml-primary bg-green-ml text-16 w-164px md:w-full"
                  to={useBaseUrl(to)}
                >
                  Download for free
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className="container bg-monochrome-bg pt-14 md:pt-0">
          <FigureIntro>
            <div className="flex mb-8 md:mb-0 mx-1 rounded-lg bg-monochrome-light flex-col items-center text-center">
              <img
                className="w-56px"
                src={useBaseUrl('/img/introfeature/1.svg')}
                alt=""
              />
              <p className="font-bold leading-3 px-4 mt-2 md:text-20 md:mt-4 md:leading-28">
                100% secured data
              </p>
            </div>
            <div className="flex mb-8 md:mb-0 mx-1 rounded-lg bg-monochrome-light flex-col items-center whitespace-nowrap text-center">
              <img src={useBaseUrl('/img/introfeature/2.svg')} alt="" />
              <p className="font-bold leading-3 px-4 mt-2 md:text-20 md:mt-4 md:leading-28">
                10 Millions+ users
              </p>
            </div>
            <div className="flex mx-1 rounded-lg bg-monochrome-light flex-col items-center text-center">
              <img src={useBaseUrl('/img/introfeature/Cmt.svg')} alt="" />
              <p className="font-bold leading-3 px-4 mt-2 md:text-20 md:mt-4 md:leading-28">
                100K+ 5-star reviews
              </p>
            </div>
            <div className="flex mx-1 rounded-lg bg-monochrome-light flex-col items-center whitespace-nowrap text-center">
              <img src={useBaseUrl('/img/introfeature/F2.svg')} alt="" />
              <p className="font-bold leading-3 px-4 mt-2 md:text-20 md:mt-4 md:leading-28">
                App of the day
              </p>
            </div>
          </FigureIntro>
        </section>
        <section className="container bg-monochrome-bg pt-14">
          <Figure>
            <figcaption className="flex flex-col justify-center col-span-full md:col-span-4 lg:col-span-5 order-2">
              <h3 className="text-26 font-medium leading-32 text-dark-tiny">
                Simple money tracker
              </h3>
              <p className="mt-2 text-monochrome-shade">
                It takes seconds to record daily transactions. Put them into
                clear and visualized categories such as Expense: Food, Shopping
                or Income: Salary, Gift.
              </p>
            </figcaption>
            <div className="relative mt-8 order-2 md:order-1 col-span-full md:col-span-4 lg:col-span-6 w-full md:w-11/12">
              <div
                className={clsx(
                  styles.imgWrapper,
                  'flex justify-center w-full',
                )}
                style={{
                  borderRadius: '14px',
                  boxShadow: '0px 0px 64px rgba(0, 0, 0, 0.08)',
                }}
              >
                <img
                  className="w-full"
                  style={{
                    borderRadius: '14px',
                  }}
                  src={useBaseUrl('img/details/Transaction.svg')}
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
                Set budgets that are easy to stick to, based on your own
                spending habits. You’re one step closer to that stuff you want
                to buy.
              </p>
            </figcaption>
            <div className="relative mt-8 order-2 md:order-2 lg:col-start-7 col-span-full md:col-span-4 lg:col-span-6 z-10 w-full">
              <div
                className={clsx(
                  styles.imgWrapper,
                  'flex justify-center w-full',
                )}
                style={{
                  borderRadius: '14px',
                  boxShadow: '0px 0px 64px rgba(0, 0, 0, 0.08)',
                }}
              >
                <img
                  className="w-full"
                  src={useBaseUrl('img/details/budget.svg')}
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
                Understand where your money comes and goes with easy-to-read
                graphs.
              </p>
            </figcaption>
            <div className="relative mt-8 order-2 md:order-1 col-span-full md:col-span-4 lg:col-span-6 w-full md:w-11/12">
              <div
                className={clsx(
                  styles.imgWrapper,
                  'flex justify-center w-full',
                )}
                style={{
                  borderRadius: '14px',
                  boxShadow: '0px 0px 64px rgba(0, 0, 0, 0.08)',
                }}
              >
                <img
                  className="w-full"
                  src={useBaseUrl('img/details/REPORT.svg')}
                  alt="time savings"
                />
              </div>
            </div>
          </Figure>
        </section>
        <section className="pt-16 lg:pt-44">
          <h1 className="text-26 text-dark-tiny leading-32 font-medium text-center">
            Features our users love
          </h1>
          <div className="grid pt-6 lg:pt-12 grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center mb-8">
              <img src={useBaseUrl('img/features/1.svg')} alt="" />
              <h3 className="text-16 font-bold lg:pt-6 leading-24 text-center mt-3 text-dark-tiny">
                Multiple devices
              </h3>
              <p className="pt-1 px-4 lg:pt-2 text-16 leading-24 text-dark-brown text-center">
                Safely synchronize across devices with Bank standard security.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-8">
              <img src={useBaseUrl('img/features/2.svg')} alt="" />
              <h3 className="text-16 font-bold lg:pt-6 leading-24 text-center mt-3 text-dark-tiny">
                Recurring transaction
              </h3>
              <p className="pt-1 px-4 lg:pt-2 text-16 leading-24 text-dark-brown text-center">
                Get notified of recurring bills and transactions before due
                date.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-8">
              <img src={useBaseUrl('img/features/3.svg')} alt="" />
              <h3 className="text-16 font-bold lg:pt-6 leading-24 text-center mt-3 text-dark-tiny">
                Travel mode
              </h3>
              <p className="pt-1 px-4 lg:pt-2 text-16 leading-24 text-dark-brown text-center">
                All currencies supported with up-to-date exchange rate.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-8">
              <img src={useBaseUrl('img/features/4.svg')} alt="" />
              <h3 className="text-16 font-bold lg:pt-6 leading-24 text-center mt-3 text-dark-tiny">
                Saving plan
              </h3>
              <p className="pt-1 px-4 lg:pt-2 text-16 leading-24 text-dark-brown text-center">
                Keep track on savings process to meet your financial goals.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-8">
              <img src={useBaseUrl('img/features/5.svg')} alt="" />
              <h3 className="text-16 font-bold lg:pt-6 leading-24 text-center mt-3 text-dark-tiny">
                Debt and loan
              </h3>
              <p className="pt-1 px-4 lg:pt-2 text-16 leading-24 text-dark-brown text-center">
                Manage your debts, loans and payment process in one place.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-8">
              <img src={useBaseUrl('img/features/5.svg')} alt="" />
              <h3 className="text-16 font-bold lg:pt-6 leading-24 text-center mt-3 text-dark-tiny">
                Scan receipt
              </h3>
              <p className="pt-1 px-4 lg:pt-2 text-16 leading-24 text-dark-brown text-center">
                Take pictures of your receipts to auto-process and organize
                them.
              </p>
            </div>
          </div>
        </section>
        <section
          className={clsx(
            styles.quickStart,
            'flex justify-center mt-18 lg:mt-44 md:pb-14 w-full',
          )}
        >
          <div className="relative bg-green-ml mx-4 py-12 lg:py-20 lg:px-28 rounded-2xl w-full lg:w-9/12">
            <p className="mb-2 text-24 px-4 leading-32 font-medium text-center lg:text-left lg:font-medium lg:text-40 lg:leading-52">
              Take your finances to <br className="hidden lg:block" /> the next
              levels!
            </p>
            <p className="mb-9 text-center lg:text-left md:mb-8 leading-32">
              Don&rsquo;t hesite, money matters.
            </p>
            <div className="flex justify-center lg:justify-start w-full">
              <a href="/" className="mr-2">
                <img src={useBaseUrl('img/marketplace/appstore.png')} alt="" />
              </a>
              <a href="/" className="ml-2">
                <img
                  src={useBaseUrl('img/marketplace/google-play.png')}
                  alt=""
                />
              </a>
            </div>
            <img
              className="invisible md:invisible lg:visible absolute bottom-0 lg:right-28"
              src={useBaseUrl('img/MOCKUP.svg')}
              alt=""
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
