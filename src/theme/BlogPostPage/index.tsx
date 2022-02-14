/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import type { Props } from '@theme/BlogPostPage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Link } from '@docusaurus/router';

function BlogPostPage(props: Props): JSX.Element {
  const { content: BlogPostContents, sidebar } = props;
  const { frontMatter, metadata } = BlogPostContents;
  const { description, editUrl } = metadata;
  const { position, salary, workTime, deadline, experience } = frontMatter;
  return (
    <Layout
      title={`${position}
    (Lương - ${salary}`}
      description={description}
    >
      {BlogPostContents && (
        <section className="container lg:flex lg:mt-20 lg:space-x-10 items-start">
          <div className="lg:w-3/12 lg:sticky lg:top-27 mb-4 flex flex-col gap-y-4">
            <Link
              style={{ textDecoration: 'none' }}
              className="lg:mb-10"
              to="/career"
            >
              <p className="flex text-dark-brown hover:text-green-ml items-center">
                <img
                  className="inline-block pr-2"
                  src={useBaseUrl('/img/job-icons/arrow-back.svg')}
                  alt="salary"
                />{' '}
                Back to Jobs
              </p>
            </Link>
            <h1 className="text-24 my-2 leading-32 text-dark-tiny lg:hidden">
              {position} (Lương - {salary})
            </h1>
            <p className="flex text-dark-brown items-center">
              <img
                className="inline-block mr-2"
                src={useBaseUrl('/img/job-icons/money.svg')}
                alt="salary"
              />{' '}
              Mức lương : {salary}
            </p>
            <p className="flex text-dark-brown items-center">
              <img
                className="inline-block mr-2"
                src={useBaseUrl('/img/job-icons/work.svg')}
                alt="time"
              />{' '}
              Kinh nghiệm : {experience}
            </p>
            <p className="flex text-dark-brown items-center">
              <img
                className="inline-block mr-2"
                src={useBaseUrl('/img/job-icons/time.svg')}
                alt="time"
              />{' '}
              Hình thức làm việc :{' '}
              {workTime === true ? 'Toàn thời gian' : 'Bán thời gian'}{' '}
            </p>
            <p className="flex text-dark-brown items-center">
              <img
                className="inline-block mr-2"
                src={useBaseUrl('/img/job-icons/noti.svg')}
                alt="time"
              />{' '}
              Thời hạn ứng tuyển : {deadline}
            </p>
            <p className="flex text-dark-brown items-center">
              <img
                className="inline-block mr-2"
                src={useBaseUrl('/img/job-icons/place.svg')}
                alt="place"
              />{' '}
              Địa điểm làm việc : Tầng 4, 101 Láng Hạ, Đống Đa, Hà Nội
            </p>

            <a
              style={{ textDecoration: 'none' }}
              className="button-apply text-16 w-full mt-2 mb-2"
              target="_blank"
              href="https://docs.google.com/forms/d/1C0kYc3Y14AXAaOooRj33Pgca2SKWDPwXi_l7Goyl4Is/edit"
            >
              Ứng tuyển ngay
            </a>
          </div>

          <div className="lg:w-9/12 lg:mb-4 lg:pb-26 markdown">
            <h1 className="text-24 leading-32 text-dark-tiny hidden lg:block">
              {position} (Lương - {salary})
            </h1>
            <BlogPostContents />
          </div>
        </section>
      )}
    </Layout>
  );
}

export default BlogPostPage;
