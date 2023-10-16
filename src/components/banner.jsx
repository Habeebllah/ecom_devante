import React from "react";
import img1 from "../assets/img/banner/banner7.png";
import img2 from "../assets/img/banner/banner8.png";
import img3 from "../assets/img/banner/banner9.png";
import img4 from "../assets/img/banner/banner10.png";
import img5 from "../assets/img/banner/banner11.png";

export const Banner = () => {
  return (
    <>
      <section className="banner__section banner__style2 section--padding color-scheme-2">
        <div className="section__heading text-center mb-35">
          <h2 className="section__heading--maintitle style2">Shop by Categories</h2>
        </div>
        <div className="container-fluid">
          <div className="row mb--n28">
            <div className="col-lg-4 col-md-order mb-28">
              <div className="banner__items position__relative">
                <a className="banner__items--thumbnail " href="shop.html">
                  <img
                    className="banner__items--thumbnail__img"
                    src={img1}
                    alt="banner-img"
                  />
                  <div className="banner__items--content style2">
                    <h3 className="banner__items--content__title style2">
                      NEW <br />
                      ACCESSORIES
                    </h3>
                    <span className="banner__items--content__link style2">
                      SHOP NOW
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="banner__style2--top__sidebar d-flex">
                <div className="banner__items position__relative mr-30 mb-28">
                  <a className="banner__items--thumbnail" href="shop.html">
                    <img
                      className="banner__items--thumbnail__img banner__img--max__height"
                      src={img2}
                      alt="banner-img"
                    />
                    <div className="banner__items--content style2">
                      <h3 className="banner__items--content__title style2">
                        NEW <br />
                        ACCESSORIES
                      </h3>
                      <span className="banner__items--content__link style2">
                        SHOP NOW
                      </span>
                    </div>
                  </a>
                </div>
                <div className="banner__items position__relative mb-28">
                  <a className="banner__items--thumbnail" href="shop.html">
                    <img
                      className="banner__items--thumbnail__img"
                      src={img3}
                      alt="banner-img"
                    />
                    <div className="banner__items--content style2">
                      <h3 className="banner__items--content__title style2">
                        TRENDING <br />
                        NOW
                      </h3>
                      <span className="banner__items--content__link style2">
                        SHOP NOW
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row row-cols-sm-2 row-cols-1">
                <div className="col mb-28">
                  <div className="banner__items position__relative">
                    <a className="banner__items--thumbnail" href="shop.html">
                      <img
                        className="banner__items--thumbnail__img banner__img--max__height"
                        src={img4}
                        alt="banner-img"
                      />
                      <div className="banner__items--content style2">
                        <h3 className="banner__items--content__title style2">
                          TOP <br />
                          SELLER
                        </h3>
                        <span className="banner__items--content__link style2">
                          SHOP NOW
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col mb-28">
                  <div className="banner__items position__relative">
                    <a className="banner__items--thumbnail" href="shop.html">
                      <img
                        className="banner__items--thumbnail__img banner__img--max__height"
                        src={img5}
                        alt="banner-img"
                      />
                      <div className="banner__items--content style2 right">
                        <h3 className="banner__items--content__title style2">
                          TOP <br />
                          DECORATION
                        </h3>
                        <span className="banner__items--content__link style2">
                          SHOP NOW
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
