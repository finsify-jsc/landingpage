import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      <h2 className="text-dark-tiny text-26lg:text-40 lg:leading-52 font-medium leading-32 text-center">
        {' '}
        See what others have to say{' '}
      </h2>

      <p className="flex justify-center mt-4 lg:mb-12">
        <img src={useBaseUrl('/img/Stars.svg')} alt="" />
        <p className="pl-1">4.9 Đánh giá từ người dùng</p>
      </p>
      <Slider class="mx-auto" {...settings}>
        <div className="review-slide px-4 py-6 lg:p-6 text-center">
          <p className="text-dark-brown">
            Perfect app. My husband and I use it to track all our expenses and
            income. We generate our household accounts and budget using this fab
            app. Furthermore, the developers are hands-on and extremely helpful.
            Do not look any further. Get this app now!.
          </p>
          <p className="pt-4 font-bold leading-20">Minh & Tam</p>
        </div>
        <div className="review-slide px-4 py-6 lg:p-6 text-center">
          <p className="text-dark-brown">
            Perfect app. My husband and I use it to track all our expenses and
            income. We generate our household accounts and budget using this fab
            app. Furthermore, the developers are hands-on and extremely helpful.
            Do not look any further. Get this app now!.
          </p>
          <p className="pt-4 font-bold leading-20">Minh & Tam</p>
        </div>
        <div className="review-slide px-4 py-6 lg:p-6 text-center">
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
  @media screen and (min-width: 1024px) {
      .slick-slide > div {
        margin: 0 15px;
      }
  }
  @media screen and (min-width: 480px) {
    .slick-slide > div {
      margin: 0 auto;
    }
  }
  .review-slide {
    max-width: 370px;
    margin-top: 24px;
    border: 1px solid #f0f0f0 !important;
    border-radius: 8px;
    box-sizing: border-box;
  }
`;
