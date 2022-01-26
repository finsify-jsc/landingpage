/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import { socialLinks } from '../social-links';

const Footer = () => {
  const {
    footer: { links },
  } = useThemeConfig();
  return (
    <footer className="mt-10 mb-20 border-t border-monochrome-medium-tint">
      <div className="container">
        <section className="grid grid-cols-1 gap-y-4">
          <p className="mt-6 text-16 leading-24 text-dark-brown text-center">
            © 2022 Finsify Technology Co., Ltd. <br className="md:hidden" />
            All rights reserved.
          </p>
          <div className="mt-4 grid grid-cols-1">
            <div className="flex justify-between">
              {links[0].items.map(({ label, href }) => (
                <a
                  key={Math.random()}
                  href={href}
                  className="text-16 font-normal text-dark-brown"
                >
                  {label}
                </a>
              ))}
            </div>
            <ul className="flex items-center mt-5 mb-3 gap-x-2">
              {socialLinks.map(({ Icon, link }) => (
                <li key={link}>
                  <Link to={link} className="cursor-pointer">
                    <Icon />
                  </Link>
                </li>
              ))}

              <li className="ml-auto">
                <button className="flex items-center gap-x-2 px-4 py-3 bg-green-ml text-monochrome-white font-bold rounded-3xl">
                  <img
                    className="inline-block"
                    src={useBaseUrl('/img/Support.svg')}
                    alt=""
                  />
                  Support
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
