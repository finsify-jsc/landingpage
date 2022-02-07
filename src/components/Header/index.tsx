import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

export const Header = ({ to }) => {
  const pinnedButton = useRef<HTMLDivElement>(null);

  useEffect(() => {
    $.fn.isOnScreen = function () {
      var win = $(window);
      var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft(),
        right: 0,
        bottom: 0,
      };
      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();
      var bounds = this.offset();
      bounds.right = bounds.left + this.outerWidth();
      bounds.bottom = bounds.top + this.outerHeight();

      return !(
        viewport.right < bounds.left ||
        viewport.left > bounds.right ||
        viewport.bottom < bounds.top ||
        viewport.top > bounds.bottom
      );
    };

    $(window).scroll(function () {
      if ($('#cta').isOnScreen() == true) {
        if (pinnedButton.current) {
          pinnedButton.current.classList.add('invisible');
        }
      } else {
        if (pinnedButton.current) {
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
        }
      }
    });
  });

  return (
    <div className="container md:pt-20 pb:12 lg:mb-24 md:h-full">
      <div className="md:px-14 lg:px-44">
        <h1 className="font-ibm lg:text-64 lg:leading-83 font-medium text-36 md:text-64 text-green-ml leading-52 md:leading-83 mb-1 text-center">
          Simple way
        </h1>
        <p className="font-ibm text-36 text-dark-brown leading-48 md:leading-56 md:text-40 text-center">
          <h1 className="font-ibm lg:text-64 lg:leading-83 text-dark-brown font-light text-36 leading-48 md:inline">
            to manage{' '}
          </h1>
          <h1 className="font-ibm lg:text-64 lg:leading-83 font-medium text-36 leading-48 md:inline text-green-ml">
            personal finances
          </h1>
        </p>

        <div className="grid grid-cols-2 gap-x-2 md:flex md:justify-center mt-9 lg:mt-12">
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
          className="invisible lg:invisible fixed bg-monochrome-white bottom-0 inset-x-0 z-10 flex justify-around"
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
