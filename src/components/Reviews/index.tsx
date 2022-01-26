import clsx from 'clsx';
import React, { Component } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Slider from 'react-slick';
import styles from './styles.module.scss';
export const Reviews = () => {
  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: true,
          autoplay: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="container mt-14">
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <style>{css}</style>
      <h2 className="text-dark-tiny text-26 leading-32 text-center mx-4">
        {' '}
        See what others have to say{' '}
      </h2>

      <p className="flex justify-center mt-4 lg:mb-12">
        <img src={useBaseUrl('/img/Stars.svg')} alt="" />
        <p className="pl-1">4.9 Đánh giá từ người dùng</p>
      </p>
      <Slider {...settings}>
        <div className="px-4 py-6 lg:p-6 text-center">
          <p className="text-dark-brown">
            Perfect app. My husband and I use it to track all our expenses and
            income. We generate our household accounts and budget using this fab
            app. Furthermore, the developers are hands-on and extremely helpful.
            Do not look any further. Get this app now!.
          </p>
          <p className="pt-4 font-bold leading-20">Minh & Tam</p>
        </div>
        <div className="px-4 py-6 lg:p-6 text-center">
          <p className="text-dark-brown">
            Perfect app. My husband and I use it to track all our expenses and
            income. We generate our household accounts and budget using this fab
            app. Furthermore, the developers are hands-on and extremely helpful.
            Do not look any further. Get this app now!.
          </p>
          <p className="pt-4 font-bold leading-20">Minh & Tam</p>
        </div>
        <div className="px-4 py-6 lg:p-6 text-center">
          <p className="text-dark-brown">
            Perfect app. My husband and I use it to track all our expenses and
            income. We generate our household accounts and budget using this fab
            app. Furthermore, the developers are hands-on and extremely helpful.
            Do not look any further. Get this app now!.
          </p>
          <p className="pt-4 font-bold leading-20">Minh & Tam</p>
        </div>
      </Slider>
    </section>
  );
};

const css = ` 
  .slick-track {
    display:flex;
    justify-content: center;
  }
  .slick-slide {
    max-width: 370px;
    margin: 0 15px;
    margin-top: 24px;
    border: 1px solid #f0f0f0 !important;
    border-radius: 8px;
    box-sizing: border-box;
  }
`;
