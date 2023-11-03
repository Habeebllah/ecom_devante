import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Set to true for automatic sliding
    autoplaySpeed: 2000, // Set the interval (in milliseconds)
  };

  return (
    <div>
      <section className="hero__slider--section color-scheme-2">
        <div className="hero__slider--inner hero__slider--activation swiper">
          <div className="hero__slider--wrapper swiper-wrapper">
            <Slider {...settings}>
              <div className="swiper-slide ">
                <div className="hero__slider--items home2__slider--bg">
                  <div className="container-fluid">
                    <div className="hero__slider--items__inner hero__slider--bg2__inner"></div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="hero__slider--items home2__slider--bg two">
                  <div className="container-fluid">
                    <div className="hero__slider--items__inner hero__slider--bg2__inner"></div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="hero__slider--items home2__slider--bg three">
                  <div className="container-fluid">
                    <div className="hero__slider--items__inner hero__slider--bg2__inner"></div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="hero__slider--items home2__slider--bg four">
                  <div className="container-fluid">
                    <div className="hero__slider--items__inner hero__slider--bg2__inner"></div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="hero__slider--items home2__slider--bg five">
                  <div className="container-fluid">
                    <div className="hero__slider--items__inner hero__slider--bg2__inner"></div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
