import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img2 from "../assets/img/other/image.svg";
import img3 from "../assets/img/icon/signature.png";

import image1 from "../assets/img/other/testimonial-thumb1.png";
import image2 from "../assets/img/other/testimonial-thumb2.png";
import image3 from "../assets/img/other/testimonial-thumb3.png";

const About = () => {
  return (
    <>
      <main className="main__content_wrapper">
        {/* <!-- Start breadcrumb section --> */}
        <section className="breadcrumb__section breadcrumb__bg">
          <div className="container">
            
          </div>
        </section>
        {/* <!-- End breadcrumb section --> */}

        {/* <!-- Start about section --> */}
        <section className="about__section section--padding mb-95">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-6">
                <div className="about__thumb--items position__relative">
                  <img
                    className="about__thumb--img border-radius-5 display-block"
                    src={img2}
                    alt="about-thumb"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about__content">
                  <span className="about__content--subtitle text__secondary mb-20">
                    {" "}
                    Why Choose us
                  </span>
                  <h2 className="about__content--maintitle mb-25">
                    We do not just sell quality and affordable clothing and
                    jewelry accessories. Our aim is to make you re-gain the
                    confidence of being you.
                  </h2>
                  <p className="about__content--desc mb-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  <!-- Start testimonial section --> */}
        <section class="testimonial__section section--padding">
          <div class="container">
            <div class="section__heading text-center mb-40">
              <h2 class="section__heading--maintitle">Meet Our Team</h2>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-lg-3">
                <div class="testimonial__items text-center">
                  <div class="testimonial__items--thumbnail">
                    <img
                      class="testimonial__items--thumbnail__img border-radius-50"
                      src={image1}
                      alt="testimonial-img"
                    />
                  </div>
                  <div class="testimonial__items--content">
                    <h3 class="testimonial__items--title">Sarison samuel</h3>
                    
                    <p class="testimonial__items--desc">
                      CEO_founder
                    </p>
                   
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div class="testimonial__items text-center">
                  <div class="testimonial__items--thumbnail">
                    <img
                      class="testimonial__items--thumbnail__img border-radius-50"
                      src={image1}
                      alt="testimonial-img"
                    />
                  </div>
                  <div class="testimonial__items--content">
                    <h3 class="testimonial__items--title">Sarison samuel</h3>
                    
                    <p class="testimonial__items--desc">
                      CEO_founder
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div class="testimonial__items text-center">
                  <div class="testimonial__items--thumbnail">
                    <img
                      class="testimonial__items--thumbnail__img border-radius-50"
                      src={image1}
                      alt="testimonial-img"
                    />
                  </div>
                  <div class="testimonial__items--content">
                    <h3 class="testimonial__items--title">Sarison samuel</h3>
                    
                    <p class="testimonial__items--desc">
                      CEO_founder
                    </p>
                  
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div class="testimonial__items text-center">
                  <div class="testimonial__items--thumbnail">
                    <img
                      class="testimonial__items--thumbnail__img border-radius-50"
                      src={image1}
                      alt="testimonial-img"
                    />
                  </div>
                  <div class="testimonial__items--content">
                    <h3 class="testimonial__items--title">Sarison samuel</h3>
                    
                    <p class="testimonial__items--desc">
                      CEO_founder
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End testimonial section --> */}
      </main>

      <button id="scroll__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M112 244l144-144 144 144M256 120v292"
          />
        </svg>
      </button>
    </>
  );
};

export default About;
