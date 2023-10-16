import React from "react";
import img1 from "../assets/img/other/testimonial-thumb1.png";
import img2 from "../assets/img/other/testimonial-thumb2.png";
import img3 from "../assets/img/other/testimonial-thumb3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    
 
  };
  return (
    <>
      <section className="testimonial__section testimonial__bg position__relative section--padding color-scheme-2">
        <div className="container">
          <div className="testimonial__bg--inner testimonial__activation--column1 swiper">
            <div className="swiper-wrapper">
              <Slider 
              >
                <div className="swiper-slide">
                  <div className="testimonial__items--style2 testimonial__items text-center">
                    <div className="testimonial__items--style2__thumbnail mb-10">
                      <img
                        className="testimonial__items--style2__thumbnail--img border-radius-50" style={{margin:"0px auto"}}
                        src={img1}
                        alt="testimonial-img"
                      />
                    </div>
                    <div className="testimonial__items--content">
                      <h2 className="testimonial__items--title text-white h3">
                        Richard Anderson
                      </h2>
                      <span className="testimonial__items--subtitle text-white">
                        Nevada, USA
                      </span>
                      <p className="testimonial__items--desc style2 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicin elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial__items--style2 testimonial__items text-center">
                    <div className="testimonial__items--style2__thumbnail mb-10">
                      <img
                        className="testimonial__items--style2__thumbnail--img border-radius-50" style={{margin:"0px auto"}}
                        src={img2}
                        alt="testimonial-img"
                      />
                    </div>
                    <div className="testimonial__items--content">
                      <h2 className="testimonial__items--title text-white h3">
                        Nike Mardson
                      </h2>
                      <span className="testimonial__items--subtitle text-white">
                        fashion
                      </span>
                      <p className="testimonial__items--desc style2 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicin elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial__items--style2 testimonial__items text-center">
                    <div className="testimonial__items--style2__thumbnail mb-10">
                      <img
                        className="testimonial__items--style2__thumbnail--img border-radius-50" style={{margin:"0px auto"}}
                        src={img3}
                        alt="testimonial-img"
                      />
                    </div>
                    <div className="testimonial__items--content">
                      <h2 className="testimonial__items--title text-white h3">
                        Nike Mardson
                      </h2>
                      <span className="testimonial__items--subtitle text-white">
                        fashion
                      </span>
                      <p className="testimonial__items--desc style2 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicin elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="testimonial__pagination style2 swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
