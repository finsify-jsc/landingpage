/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@theme/MDXComponents';
import type { Props } from '@theme/MDXPage';
import clsx from 'clsx';

import { ContactUsViaTelegramBanner } from './contact-us-via-telegram-banner';
import { Banner } from '../../components';
import styles from './styles.module.scss';
import useBaseUrl from '@docusaurus/useBaseUrl';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function MDXPage(props: Props): JSX.Element {
  const { content: MDXPageContent } = props;
  const { frontMatter, metadata } = MDXPageContent;

  const { title, description, position, salary, time, wrapperClassName } =
    frontMatter;

  const { permalink } = metadata;

  return (
    <Layout
      title={title}
      description={description}
      permalink={permalink}
      wrapperClassName={wrapperClassName}
    >
      <main className="container md:grid grid-cols-2">
        <div className="pt-6 md:pt-12 md:pb-24 md:pl-8">
          <p className="flex md:pt-4 pb-4 md:pb-11 items-center">
            <img
              className="inline-block pr-2"
              src={useBaseUrl('/img/job-icons/arrow-back.png')}
              alt="salary"
            />{' '}
            Back to Jobs
          </p>
          <h1 className="text-24 leading-32 text-dark-tiny md:hidden">
            {title}
          </h1>
          <p className="flex pt-4 items-center">
            <img
              className="inline-block pr-2"
              src={useBaseUrl('/img/job-icons/money.png')}
              alt="salary"
            />{' '}
            {salary}
          </p>
          <p className="flex pt-4 items-center">
            <img
              className="inline-block pr-2"
              src={useBaseUrl('/img/job-icons/money.png')}
              alt="salary"
            />{' '}
            {position}
          </p>
          <p className="flex pt-4 items-center">
            <img
              className="inline-block pr-2"
              src={useBaseUrl('/img/job-icons/time.png')}
              alt="time"
            />{' '}
            {time}
          </p>
          <p className="flex pt-4 items-center">
            <img
              className="inline-block pr-2"
              src={useBaseUrl('/img/job-icons/place.png')}
              alt="place"
            />{' '}
            Tầng 4, 101 Láng Hạ, Đống Đa, Hà Nội
          </p>

          <p className="px-4 py-8 mt-4 mx-auto md:mx-0 text-16 leading-24 rounded-xl w-full md:w-11/12 text-dark-brown bg-green-light ">
            Ứng viên vui lòng gửi email <br className="hidden md:block" /> kèm
            CV đến địa chỉ <br className="hidden md:block" />
            <a
              style={{ textDecoration: 'none' }}
              className="text-green-ml hover:text-green-ml"
              href="mailto:talents@moneylover.me"
            >
              talents@moneylover.me
            </a>
          </p>
        </div>
        <div className="w-full pt-12 pb-24">
          <div className={clsx(styles.mdx, 'markdown w-auto mx-auto')}>
            <h1 className="hidden md:block lg:whitespace-nowrap">{title}</h1>
            <MDXProvider components={MDXComponents}>
              <MDXPageContent />
            </MDXProvider>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default MDXPage;
