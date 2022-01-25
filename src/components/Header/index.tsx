import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';

export const Header = ({ to }) => {
  const pinnedButton = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y >= 330) {
        if (pinnedButton.current) {
          pinnedButton.current.classList.remove('invisible');
        }
      } else {
        if (pinnedButton.current) {
          pinnedButton.current.classList.add('invisible');
        }
      }
    });
  });

  return (
    <div className="container md:pt-20 pb:12 md:pb-24 md:h-full">
      <div className="md:px-14 lg:px-44">
        <h1 className="font-ibm font-medium text-36 md:text-64 text-green-ml leading-52 md:leading-83 mb-1 text-center">
          Simple way
        </h1>
        <p className="font-ibm text-36 text-dark-brown leading-48 md:leading-56 md:text-40 text-center">
          <h1 className="font-ibm text-dark-brown font-light text-36 leading-48 md:inline">
            to manage{' '}
          </h1>
          <h1 className="font-ibm font-medium text-36 leading-48 md:inline text-green-ml">
            personal finances
          </h1>
        </p>

        <div className="grid grid-cols-2 gap-x-2 md:flex md:justify-center mt-9">
          <Link
            style={{ textDecoration: 'none' }}
            className="button-ml text-16 md:w-full"
            to={useBaseUrl(to)}
          >
            Try on browser
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            className="button-ml-primary bg-green-ml text-16 md:w-full"
            to={useBaseUrl(to)}
          >
            Download for free
          </Link>
        </div>
        <div
          ref={pinnedButton}
          style={{ boxShadow: '0px -4px 16px rgba(0, 0, 0, 0.04)' }}
          className="invisible lg:invisible fixed bg-monochrome-white bottom-0 inset-x-0 z-50 w-full"
        >
          <div className="grid grid-cols-2 gap-2 mx-4 my-4">
            {' '}
            <Link
              style={{ textDecoration: 'none' }}
              className="button-ml text-16 md:w-full"
              to={useBaseUrl(to)}
            >
              Try on browser
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              className="button-ml-primary bg-green-ml text-16 md:w-full"
              to={useBaseUrl(to)}
            >
              Download for free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
