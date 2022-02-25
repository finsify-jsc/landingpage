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
      <section className="container grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-8 lg:mx-auto">
        <p className="flex items-center mt-6 lg:mt-0 lg:col-span-6 text-16 leading-24 text-dark-brown">
          © 2022 Finsify Technology Co., Ltd. All rights reserved.
        </p>
        <div className="flex flex-col lg:flex-row justify-center gap-y-4 lg:col-span-5 lg:gap-x-4">
          {FooterLink.map(({ label, to }) => (
            <Link
              key={Math.random()}
              to={to}
              target="_blank"
              className="flex items-center leading-24 text-16 font-medium text-dark-brown hover:no-underline"
            >
              {label}
            </Link>
          ))}
        </div>
        <ul className="lg:col-span-1 lg:place-self-end flex items-center justify-start mt-5 mb-8 lg:mt-0 lg:mb-0 gap-x-2">
          {socialLinks.map(({ Icon, link }) => (
            <li key={link}>
              <Link to={link} className="cursor-pointer hover:no-underline">
                <Icon width={32} height={32} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
