/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import type { Props } from '@theme/BlogPostPage';
import BlogSidebar from '@theme/BlogSidebar';
import TOC from '@theme/TOC';
import EditThisPage from '@theme/EditThisPage';
import { ThemeClassNames } from '@docusaurus/theme-common';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Link } from '@docusaurus/router';

function BlogPostPage(props: Props): JSX.Element {
  const { content: BlogPostContents, sidebar } = props;
  const { frontMatter, metadata } = BlogPostContents;
  const { description, editUrl } = metadata;
  const { position, salary, workTime } = frontMatter;
  return (
    <Layout
      title={`${position}
    (Lương - ${salary}`}
      description={description}
    >
      {BlogPostContents && (
        <main className="container md:grid grid-cols-2">
          <div className="pt-6 md:pt-12 md:pb-24 md:pl-8">
            <Link to="/career">
              <p className="flex md:pt-4 pb-4 md:pb-11 items-center">
                <img
                  className="inline-block pr-2"
                  src={useBaseUrl('/img/job-icons/arrow-back.png')}
                  alt="salary"
                />{' '}
                Back to Jobs
              </p>
            </Link>
            <h1 className="text-24 leading-32 text-dark-tiny md:hidden">
              {position} (Lương - {salary})
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
              {workTime === true ? 'Toàn thời gian' : 'Bán thời gian'}{' '}
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
            <BlogPostContents />
          </div>
        </main>
      )}
    </Layout>
  );
}

export default BlogPostPage;
