/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import { MDXProvider } from '@mdx-js/react';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import MDXComponents from '@theme/MDXComponents';
import Seo from '@theme/Seo';
import type { Props } from '@theme/BlogPostItem';

import styles from './styles.module.css';

function BlogPostItem(props: Props): JSX.Element {
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    isBlogPostPage = false,
  } = props;
  const { date, formattedDate, permalink } = metadata;
  const { position, salary, workTime, image, keywords } = frontMatter;

  const timeSince = (date) => {
    let seconds = Math.floor(
      (new Date().getTime() - new Date(date).getTime()) / 1000,
    );
    let interval = seconds / 31536000;
    if (interval > 1) {
      return `${Math.floor(interval)} years ago`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return `${Math.floor(interval)} months ago`;
    }
    interval = seconds / 86400;
    return `${Math.floor(interval)} days ago`;
  };

  const renderPost = () => {
    return (
      <article
        style={{ border: '1px solid #F1F1F1' }}
        className="px-6 py-4 w-full rounded-lg"
      >
        <Link
          style={{
            textDecoration: 'none',
          }}
          className="font-bold text-left text-20 leading-28 text-dark-tiny"
          to={permalink}
        >
          {position} <br />
          (Lương - {salary})
        </Link>
        <p className="mt-2 text-16 leading-24 text-dark-brown whitespace-nowrap">
          {workTime === true ? 'Toàn thời gian' : 'Bán thời gian'} • Hà Nội •{' '}
          {timeSince(date)}
        </p>
      </article>
    );
  };

  return (
    <>
      <Seo {...{ keywords, image }} />
      {renderPost()}
    </>
  );
}

export default BlogPostItem;
