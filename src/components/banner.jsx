import React from "react";
import img1 from "../assets/img/banner/banner7.svg";
import img2 from "../assets/img/banner/banner8.svg";

export const Banner = () => {
  return (
    <>
      <section className="banner__section banner__style2 section--padding color-scheme-2">
        <div className="section__heading text-center mb-35">
          <h2 className="section__heading--maintitle style2">
            Shop by Categories
          </h2>
        </div>
        <div className="container">
          <div className="row" style={{padding:"0px 50px"}}>
            <div className="col-lg-6  mb-28">
              <div className="banner-button">
                <p> JEWELRY & ACCESSORIES</p>
              </div>
              <div className="banner__items position__relative">
                <a className="banner__items--thumbnail " href="shop.html">
                  <img
                    className="banner__items--thumbnail__img"
                    src={img1}
                    alt="banner-img"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6  mb-28">
              <div className="banner-button" style={{backgroundColor:"#FFAF06"}}>
                <p> FASHION & WEARS</p>
              </div>
              <div className="banner__items position__relative">
                <a className="banner__items--thumbnail " href="shop.html">
                  <img
                    className="banner__items--thumbnail__img"
                    src={img2}
                    alt="banner-img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
