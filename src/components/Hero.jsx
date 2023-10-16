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
                    <div className="hero__slider--items__inner hero__slider--bg2__inner">
                      <div className="row row-cols-1">
                        <div className="col">
                          <div className="slider__content">
                            <p
                              className="slider__content--desc desc1 text__secondary mb-15"
                              style={{ color: "#FFAF06" }}
                            >
                              {" "}
                              Big Offer 50% off
                            </p>
                            <h2 className="slider__content--maintitle h1">
                              New Collection <br />
                              Summer Sale
                            </h2>
                            <p className="slider__content--desc desc2 d-sm-2-none mb-40">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do <br />
                              eiusmod tempor incididunt ut labore et dolore
                              magna
                            </p>
                            <Link
                              className="bg__secondary slider__btn primary__btn"
                              style={{ backgroundColor: "#FFAF06" }}
                              to="/shop"
                            >
                              Show Collection
                              <svg
                                className="primary__btn--arrow__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20.2"
                                height="12.2"
                                viewBox="0 0 6.2 6.2"
                              >
                                <path
                                  d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z"
                                  transform="translate(-4 -4)"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="hero__slider--items home2__slider--bg two">
                  <div className="container-fluid">
                    <div className="hero__slider--items__inner hero__slider--bg2__inner">
                      <div className="slider__content">
                        <p
                          className="slider__content--desc desc1 text__secondary2 mb-15"
                          style={{ color: "#FFAF06" }}
                        >
                          {" "}
                          Big Offer 50% off
                        </p>
                        <h2 className="slider__content--maintitle h1">
                          New Collection <br /> Summer Sale
                        </h2>
                        <p className="slider__content--desc desc2 d-sm-2-none mb-40">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do <br />
                          eiusmod tempor incididunt ut labore et dolore magna
                        </p>
                        <Link
                          className=" slider__btn primary__btn"
                          style={{ backgroundColor: "#FFAF06" }}
                          to="shop"
                        >
                          Show Collection
                          <svg
                            className="primary__btn--arrow__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20.2"
                            height="12.2"
                            viewBox="0 0 6.2 6.2"
                          >
                            <path
                              d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z"
                              transform="translate(-4 -4)"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="hero__slider--items home2__slider--bg three">
                  <div className="container-fluid">
                    <div className="hero__slider--items__inner hero__slider--bg2__inner">
                      <div className="slider__content">
                        <p
                          className="slider__content--desc desc1 text__secondary2 mb-15"
                          style={{ color: "#FFAF06" }}
                        >
                          {" "}
                          Big Offer 50% off
                        </p>
                        <h2 className="slider__content--maintitle h1">
                          New Collection <br /> Summer Sale
                        </h2>
                        <p className="slider__content--desc desc2 d-sm-2-none mb-40">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do <br />
                          eiusmod tempor incididunt ut labore et dolore magna
                        </p>
                        <Link
                          className=" slider__btn primary__btn"
                          style={{ backgroundColor: "#FFAF06" }}
                          to="shop"
                        >
                          Show Collection
                          <svg
                            className="primary__btn--arrow__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20.2"
                            height="12.2"
                            viewBox="0 0 6.2 6.2"
                          >
                            <path
                              d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z"
                              transform="translate(-4 -4)"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          {/* <div className="swiper__nav--btn swiper-button-next"></div>
          <div className="swiper__nav--btn swiper-button-prev"></div> */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
