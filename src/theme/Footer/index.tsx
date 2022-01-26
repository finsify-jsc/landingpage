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
import { socialLinks } from '../social-links';

const Footer = () => {
  const {
    footer: { links },
  } = useThemeConfig();
  return (
    <footer className="lg:py-6 lg:m-0 mt-10 mb-20 border-t border-monochrome-medium-tint">
      <section className="container grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:mx-auto">
        <p className="mt-6 lg:mt-0 text-16 leading-24 text-dark-brown text-center lg:text-left">
          © 2022 Finsify Technology Co., Ltd. <br className="lg:hidden" />
          All rights reserved.
        </p>
        <div className="mt-4 lg:mt-0 grid grid-cols-1 lg:grid-cols-4 lg:gap-x-5">
          <div className="flex lg:col-span-3 lg:justify-end lg:gap-x-4 justify-between items-center">
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
          <ul className="flex items-center mt-5 mb-3 lg:mt-0 lg:mb-0 gap-x-2">
            {socialLinks.map(({ Icon, link }) => (
              <li key={link}>
                <Link to={link} className="cursor-pointer">
                  <Icon />
                </Link>
              </li>
            ))}

            <li className="ml-auto lg:ml-0 lg:fixed lg:bottom-26 lg:right-10">
              <button className="flex items-center hover:bg-green-dark active:bg-green-dark gap-x-2 px-4 py-3 bg-green-ml text-monochrome-white font-bold rounded-3xl">
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
    </footer>
  );
};

export default Footer;
