/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import { socialLinks } from '../social-links';
import clsx from 'clsx';
import { FooterLink } from './FooterLink';
const Footer = () => {
  return (
    <footer
      className={clsx(
        'lg:py-6 lg:m-0 mt-10 border-t border-monochrome-medium-tint',
      )}
    >
      <section className="container grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:mx-auto">
        <p className="mt-6 lg:mt-0 text-16 leading-24 text-dark-brown text-center lg:text-left">
          © 2022 Finsify Technology Co., Ltd. <br className="lg:hidden" />
          All rights reserved.
        </p>
        <div className="mt-4 lg:mt-0 grid grid-cols-1 lg:grid-cols-4 lg:gap-x-5">
          <div className="flex lg:col-span-3 lg:justify-end lg:gap-x-4 justify-between items-center">
            {FooterLink.map(({ label, to }) => (
              <a
                key={Math.random()}
                href={to}
                target="_blank"
                className="text-16 font-normal text-dark-brown hover:no-underline"
              >
                {label}
              </a>
            ))}
          </div>
          <ul className="flex items-center mt-5 mb-8 lg:mt-0 lg:mb-0 gap-x-2">
            {socialLinks.map(({ Icon, link }) => (
              <li key={link}>
                <Link to={link} className="cursor-pointer hover:no-underline">
                  <Icon width={32} height={32} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
