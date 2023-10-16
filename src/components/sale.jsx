import React from "react";
import img1 from "../assets/img/banner/banner12.png";
import img2 from "../assets/img/banner/banner13.png";
import { Link } from "react-router-dom";

const Sale = () => {
  return (
    <>
      <section className="banner__section banner__discount section--padding color-scheme-2 pt-0">
        <div className="container-fluid">
          <div className="banner__discount--inner position__relative">
            <div className="row row-cols-sm-2 row-cols-1">
              <div className="col">
                <div className="banner__items banner__discount--items position__relative">
                  <Link className="banner__items--thumbnail " to="shop">
                    <img
                      className="banner__items--thumbnail__img"
                      src={img1}
                      alt="banner-img"
                    />
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="banner__items banner__discount--items position__relative">
                  <Link className="banner__items--thumbnail " to="shop">
                    <img
                      className="banner__items--thumbnail__img"
                      src={img2}
                      alt="banner-img"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="banner__discount--content text-center">
              <span className="banner__discount--content__subtitle">
                Summer Collection 2022
              </span>
              <h2 className="banner__discount--content__title h3">
                Get 35% Diseount For <br />
                Couple Special
              </h2>
              <Link className="banner__discount--content__link" t0="shop">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sale;
