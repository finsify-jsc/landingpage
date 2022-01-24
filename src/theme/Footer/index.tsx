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
    <footer className="mt-10 border-t border-monochrome-medium-tint">
      <div className="navigationContainer">
        <section className="flex flex-col w-full">
          <p className="w-full pt-6 text-16 leading-24 text-dark-brown text-center">
            © 2022 Finsify Technology Co., Ltd. <br className="md:hidden" />
            All rights reserved.
          </p>
          <div className="flex flex-col">
            <div className="flex pt-4 justify-around">
              {links[0].items.map(({ label, href }) => (
                <a
                  key={Math.random()}
                  href={href}
                  className="text-16 text-dark-brown"
                >
                  {label}
                </a>
              ))}
            </div>
            <ul className="flex ml-5 mt-7 mb-8 justify-start gap-x-2 items-center">
              {socialLinks.map(({ Icon, link }) => (
                <li key={link}>
                  <Link to={link} className="cursor-pointer">
                    <Icon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
