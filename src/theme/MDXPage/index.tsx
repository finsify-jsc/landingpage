import React from 'react';
import Layout from '@theme/Layout';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@theme/MDXComponents';
import type { Props } from '@theme/MDXPage';
import clsx from 'clsx';

import styles from './styles.module.scss';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function MDXPage(props: Props): JSX.Element {
  const { content: MDXPageContent } = props;
  const { frontMatter, metadata } = MDXPageContent;

  const { title, description, wrapperClassName } = frontMatter;
  const { permalink } = metadata;

  return (
    <Layout
      title={title}
      description={description}
      permalink={permalink}
      wrapperClassName={wrapperClassName}
    >
      <main>
        <div className="container pt-12 pb-24">
          <div className={clsx(styles.mdx, 'markdown-page w-auto mx-auto')}>
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
