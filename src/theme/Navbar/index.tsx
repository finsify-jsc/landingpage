/* eslint-disable @typescript-eslint/indent */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import useHideableNavbar from '@theme/hooks/useHideableNavbar';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import { useSessionStorage } from '../../hooks/use-session-storage';
import styles from './styles.module.scss';

const Navbar = () => {
  const {
    navbar: { items },
  } = useThemeConfig();
  const { pathname } = useLocation();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  useLockBodyScroll(isNavbarVisible);
  const links = [...items];
  const { navbarRef, isNavbarVisible: isHeaderVisibleAfterScroll } =
    useHideableNavbar(true);

  return (
    <header
      ref={navbarRef}
      className={clsx('fixed top-0 inset-x-0 z-50 h-22', styles.header, {
        [styles.headerHidden]: !isHeaderVisibleAfterScroll,
      })}
    >
      <Head>
        {/* <meta
          name="google-site-verification"
          content="Exn7kPLIy4JTsgoCYicqJbRNhglNbVv20lkzpVDzUU0"
        /> */}
      </Head>
      <div className="absolute top-0 left-0 z-40 w-full bg-monochrome-white">
        <nav className="flex items-center justify-between h-22 container">
          <Link to={useBaseUrl('/')}>
            <img src={useBaseUrl('/img/logo.svg')} alt="drill-logo" />
          </Link>
          <div className="md:flex items-center">
            <ul className="invisible md:visible fixed md:static flex flex-row gap-6 items-center">
              {links.map(({ to = '', label = '' }: any) => (
                <li key={to}>
                  <Link
                    style={{ textDecoration: 'none' }}
                    className={`flex items-center h-22
                      text-16 text-dark-brown
                      ${
                        pathname.includes(to.split('/')[0])
                          ? styles.activeTab
                          : styles.tab
                      }
                      `}
                    to={useBaseUrl(to)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              aria-label="menu button"
              style={{
                backgroundPosition: 'center',
              }}
              className={clsx(
                `flex items-center justify-center w-9 h-9 md:hidden text-green-ml fill-current ${
                  isNavbarVisible ? 'bg-close' : 'bg-menu'
                } bg-no-repeat`,
              )}
              type="button"
              onClick={() => setIsNavbarVisible(!isNavbarVisible)}
            />
          </div>
        </nav>
      </div>
      {isNavbarVisible && (
        <nav className="visible md:invisible fixed w-full h-full left-0 top-14">
          <div className="bg-monochrome-white">
            <div className="container pt-2 pb-6">
              <ul>
                {links.map(({ to = '', label = '' }: any) => (
                  <li className="border-t border-monochrome-medium-tint">
                    <Link
                      style={{
                        textDecoration: 'none',
                      }}
                      className="inline-flex text-16 font-medium text-dark-brown leading-24 py-4 w-full h-full"
                      to={useBaseUrl(to)}
                      onClick={() => setIsNavbarVisible(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="w-full h-full bg-monochrome-black bg-opacity-50"
            onClick={() => setIsNavbarVisible(!isNavbarVisible)}
          />
        </nav>
      )}
    </header>
  );
};

export default Navbar;
