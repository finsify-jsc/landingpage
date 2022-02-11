import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Translate from '@docusaurus/Translate';

export const Reviews = () => {
  const settings = {
    arrows: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    responsive: [
      {
        breakpoint: 912,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          autoplay: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          autoplay: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <section className="container mt-14 lg:mt-44">
      <style>{css}</style>
      <h2 className="text-dark-tiny tracking-tight text-26 lg:text-40 lg:leading-52 font-medium leading-32 text-center">
        <Translate id="reviews">See what others have to say</Translate>
      </h2>

      <p className="flex justify-center mt-4 lg:mb-8">
        <img src={useBaseUrl('/img/Stars.svg')} alt="" />
        <p className="pl-1">
          <span className="font-bold">4.9</span>
          <span className="text-dark-brown">
            <Translate id="reviews.star">Based on user reviews</Translate>
          </span>
        </p>
      </p>
      <Slider {...settings}>
        <div className="review-slide lg:h-screen grid grid-rows-6 px-4 py-6 lg:p-6 text-center">
          <p className="text-dark-brown lg:h-screen">
            <Translate id="reviews.one">
              Perfect app. My husband and I use it to track all our expenses and
              income. We generate our household accounts and budget using this
              fab app. Furthermore, the developers are hands-on and extremely
              helpful. Do not look any further. Get this app now!.
            </Translate>
          </p>
          <p className="pt-4 font-bold leading-20">Lorna Mifsud Cachia</p>
        </div>
        <div className="review-slide lg:h-screen grid grid-rows-6 px-4 py-6 lg:p-6 text-center">
          <p className="text-dark-brown lg:h-screen">
            <Translate id="reviews.two">
              This will keep you organized and in control, of money you do have
              and money you will have. This application is easy to use and will
              help you keep track of every dollar.
            </Translate>
          </p>
          <p className="pt-4 font-bold leading-20">Minh & Tam</p>
        </div>
        <div className="review-slide lg:h-screen grid grid-rows-6 px-4 py-6 lg:p-6 text-center">
          <p className="text-dark-brown lg:h-screen">
            <Translate id="reviews.three">
              A simple, accessible app that allows you to budget across weeks,
              months and years. The neat financial calendar lets you set up
              alerts and keep tabs on all transactions. Plus, it works with all
              currencies.
            </Translate>
          </p>
          <p className="pt-4 font-bold leading-20">Jeveny Johnson</p>
        </div>
      </Slider>
    </section>
  );
};

const css = ` 
  @media screen and (min-width: 1024px) {
      .slick-slide > div {
        margin: 0 15px;
      }
  }
  .review-slide p {
    max-height: 240px;
  }
  .review-slide {
    max-width: 370px;
    max-height: 324px;
    margin-top: 24px;
    border: 1px solid #f0f0f0 !important;
    border-radius: 8px;
    box-sizing: border-box;
  }
`;
