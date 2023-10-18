import React, { useContext, useEffect, useState } from "react";

import img7 from "../assets/img/other/comment-thumb1.png";
import product1 from "../assets/img/product/small-product7.png";
import product2 from "../assets/img/product/product4.png";
import { CartContext } from "../cartContext"; // Import the CartContext
import { PRODUCTS } from "../products";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1); // Added quantity state
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const { id } = useParams();

  const selectedProduct = PRODUCTS.find(
    (product) => product.id === parseInt(id)
  );

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const { product_title, current_price, old_price, img } = selectedProduct;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Set to true for automatic sliding
    autoplaySpeed: 1000, // Set the interval (in milliseconds)
  };
  return (
    <>
      <main className="main__content_wrapper">
        {/* <!-- Start breadcrumb section --> */}
        <section className="breadcrumb__section breadcrumb__bg">
          <div className="container">
            <div className="row row-cols-1">
              <div className="col">
                {/* <div className="breadcrumb__content text-center">
                     <h1 className="breadcrumb__content--title text-white mb-25">Product Details</h1>
                     <ul className="breadcrumb__content--menu d-flex justify-content-center">
                         <li className="breadcrumb__content--menu__items"><a className="text-white" href="index.html">Home</a></li>
                         <li className="breadcrumb__content--menu__items"><span className="text-white">Product Details</span></li>
                     </ul>
                 </div> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End breadcrumb section --> */}

        {/* <!-- Start product details section --> */}
        <section className="product__details--section section--padding">
          <div className="container">
            <div className="row row-cols-lg-2 row-cols-md-2">
              <div className="col">
                <div className="product__details--media">
                  <div className="product__media--preview  swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="product__media--preview__items">
                          <a
                            className="product__media--preview__items--link glightbox"
                            data-gallery="product-media-preview"
                            href="assets/img/product/big-product2.jpg"
                          >
                            <img
                              className="product__media--preview__items--img"
                              src={img}
                              alt="product-media-img"
                            />
                          </a>
                          <div className="product__media--view__icon">
                            <a
                              className="product__media--view__icon--link glightbox"
                              href="assets/img/product/big-product2.jpg"
                              data-gallery="product-media-preview"
                            >
                              <svg
                                className="product__media--view__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="22.51"
                                height="22.443"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-miterlimit="10"
                                  stroke-width="32"
                                ></path>
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-miterlimit="10"
                                  stroke-width="32"
                                  d="M338.29 338.29L448 448"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product__media--nav swiper">
                    <div className="swiper-wrapper">
                      <Slider {...settings}>
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img
                              className="product__media--nav__items--img"
                              src={product1}
                              alt="product-nav-img"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img
                              className="product__media--nav__items--img"
                              src={product1}
                              alt="product-nav-img"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img
                              className="product__media--nav__items--img"
                              src={product1}
                              alt="product-nav-img"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img
                              className="product__media--nav__items--img"
                              src={product1}
                              alt="product-nav-img"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img
                              className="product__media--nav__items--img"
                              src={product1}
                              alt="product-nav-img"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img
                              className="product__media--nav__items--img"
                              src={product1}
                              alt="product-nav-img"
                            />
                          </div>
                        </div>
                      </Slider>
                    </div>
                    {/* <div className="swiper__nav--btn swiper-button-next"></div>
                    <div className="swiper__nav--btn swiper-button-prev"></div> */}
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product__details--info">
                  <form action="#">
                    <h2 className="product__details--info__title mb-15">
                      {product_title}
                    </h2>
                    <div className="product__details--info__price mb-10">
                      <span className="current__price">{current_price}</span>
                      <span className="price__divided"></span>
                      <span className="old__price">{old_price}</span>
                    </div>
                    <div className="product__details--info__rating d-flex align-items-center mb-15">
                      <ul className="rating d-flex justify-content-center">
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.105"
                              height="14.732"
                              viewBox="0 0 10.105 9.732"
                            >
                              <path
                                data-name="star - Copy"
                                d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                transform="translate(0 -0.018)"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.105"
                              height="14.732"
                              viewBox="0 0 10.105 9.732"
                            >
                              <path
                                data-name="star - Copy"
                                d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                transform="translate(0 -0.018)"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.105"
                              height="14.732"
                              viewBox="0 0 10.105 9.732"
                            >
                              <path
                                data-name="star - Copy"
                                d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                transform="translate(0 -0.018)"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.105"
                              height="14.732"
                              viewBox="0 0 10.105 9.732"
                            >
                              <path
                                data-name="star - Copy"
                                d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                transform="translate(0 -0.018)"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.105"
                              height="14.732"
                              viewBox="0 0 10.105 9.732"
                            >
                              <path
                                data-name="star - Copy"
                                d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                transform="translate(0 -0.018)"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </li>
                      </ul>
                      <span className="product__items--rating__count--number">
                        (24)
                      </span>
                    </div>
                    <p className="product__details--info__desc mb-15">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut numquam ullam is recusandae laborum explicabo id sequi
                      quisquam, ab sunt deleniti quidem ea animi facilis quod
                      nostrum odit! Repellendus voluptas suscipit cum harum
                      dolor sciunt.
                    </p>
                    <div className="product__variant">
                      {/* <div className="product__variant--list mb-10">
                        <fieldset className="variant__input--fieldset">
                          <legend className="product__variant--title mb-8">
                            Color :
                          </legend>
                          <input
                            id="color-red1"
                            name="color"
                            type="radio"
                            checked
                          />
                          <label
                            className="variant__color--value red"
                            for="color-red1"
                            title="Red"
                          >
                            <img
                              className="variant__color--value__img"
                              src={product2}
                              alt="variant-color-img"
                            />
                          </label>
                          <input id="color-red2" name="color" type="radio" />
                          <label
                            className="variant__color--value red"
                            for="color-red2"
                            title="Black"
                          >
                            <img
                              className="variant__color--value__img"
                              src={product2}
                              alt="variant-color-img"
                            />
                          </label>
                          <input id="color-red3" name="color" type="radio" />
                          <label
                            className="variant__color--value red"
                            for="color-red3"
                            title="Pink"
                          >
                            <img
                              className="variant__color--value__img"
                              src={product2}
                              alt="variant-color-img"
                            />
                          </label>
                          <input id="color-red4" name="color" type="radio" />
                          <label
                            className="variant__color--value red"
                            for="color-red4"
                            title="Orange"
                          >
                            <img
                              className="variant__color--value__img"
                              src={product2}
                              alt="variant-color-img"
                            />
                          </label>
                        </fieldset>
                      </div> */}
                      {/* <div className="product__variant--list mb-15">
                        <fieldset className="variant__input--fieldset weight">
                          <legend className="product__variant--title mb-8">
                            Weight :
                          </legend>
                          <input
                            id="weight1"
                            name="weight"
                            type="radio"
                            checked
                          />
                          <label
                            className="variant__size--value red"
                            for="weight1"
                          >
                            5 kg
                          </label>
                          <input id="weight2" name="weight" type="radio" />
                          <label
                            className="variant__size--value red"
                            for="weight2"
                          >
                            3 kg
                          </label>
                          <input id="weight3" name="weight" type="radio" />
                          <label
                            className="variant__size--value red"
                            for="weight3"
                          >
                            2 kg
                          </label>
                        </fieldset>
                      </div> */}
                      <div className="product__variant--list quantity d-flex align-items-center mb-20">
                        <div className="quantity__box">
                          <button
                            type="button"
                            className="quantity__value quickview__value--quantity decrease"
                            aria-label="quantity value"
                            value="Decrease Value"
                            onClick={() =>
                              setQuantity(Math.max(1, quantity - 1))
                            }
                          >
                            -
                          </button>
                          <label>
                            <input
                              type="number"
                              className="quantity__number quickview__value--number"
                              value={quantity}
                              onChange={(e) =>
                                setQuantity(
                                  Math.max(1, parseInt(e.target.value))
                                )
                              }
                            />
                          </label>
                          <button
                            type="button"
                            className="quantity__value quickview__value--quantity increase"
                            aria-label="quantity value"
                            value="Increase Value"
                            onClick={() => setQuantity(quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="quickview__cart--btn primary__btn"
                          type="submit"
                          onClick={() => addToCart(selectedProduct)}
                        >
                          Add To Cart
                        </button>
                      </div>
                      <Link
                        className="product__variant--list mb-15"
                        to={`/checkout/${id}?quantity=${quantity}`}
                      >
                        <button
                          className="variant__buy--now__btn primary__btn"
                          type="submit"
                        >
                          Buy it now
                        </button>
                      </Link>
                    </div>

                    <div className="product__details--info__meta">
                      <p className="product__details--info__meta--list">
                        <strong>Barcode:</strong> <span>565461</span>{" "}
                      </p>
                      <p className="product__details--info__meta--list">
                        <strong>Sky:</strong> <span>4420</span>{" "}
                      </p>
                      <p className="product__details--info__meta--list">
                        <strong>Vendor:</strong> <span>Belo</span>{" "}
                      </p>
                      <p className="product__details--info__meta--list">
                        <strong>Type:</strong> <span>Dress</span>{" "}
                      </p>
                    </div>
                    <div className="quickview__social d-flex align-items-center mb-15">
                      <label className="quickview__social--title">
                        Social Share:
                      </label>
                      <ul className="quickview__social--wrapper mt-0 d-flex">
                        <li className="quickview__social--list">
                          <a
                            className="quickview__social--icon"
                            target="_blank"
                            href="https://www.facebook.com"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="7.667"
                              height="16.524"
                              viewBox="0 0 7.667 16.524"
                            >
                              <path
                                data-name="Path 237"
                                d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z"
                                transform="translate(-960.13 -345.407)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Facebook</span>
                          </a>
                        </li>
                        <li className="quickview__social--list">
                          <a
                            className="quickview__social--icon"
                            target="_blank"
                            href="https://twitter.com"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.489"
                              height="13.384"
                              viewBox="0 0 16.489 13.384"
                            >
                              <path
                                data-name="Path 303"
                                d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z"
                                transform="translate(-951.23 -1140.849)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Twitter</span>
                          </a>
                        </li>
                        <li className="quickview__social--list">
                          <a
                            className="quickview__social--icon"
                            target="_blank"
                            href="https://www.instagram.com"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.497"
                              height="16.492"
                              viewBox="0 0 19.497 19.492"
                            >
                              <path
                                data-name="Icon awesome-instagram"
                                d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z"
                                transform="translate(0.004 -1.492)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Instagram</span>
                          </a>
                        </li>
                        <li className="quickview__social--list">
                          <a
                            className="quickview__social--icon"
                            target="_blank"
                            href="https://www.youtube.com"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.49"
                              height="11.582"
                              viewBox="0 0 16.49 11.582"
                            >
                              <path
                                data-name="Path 321"
                                d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z"
                                transform="translate(-951.269 -1359.8)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Youtube</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End product details section --> */}

        {/* <!-- Start product details tab section --> */}
        <section className="product__details--tab__section section--padding">
          <div className="container">
            <div className="row row-cols-1">
              <div className="col">
                <ul className="product__details--tab d-flex mb-30">
                  <li
                    className={`product__details--tab__list ${
                      activeTab === "description" ? "active" : ""
                    } `}
                    data-toggle="tab"
                    data-target="#description"
                    onClick={() => handleTabClick("description")}
                  >
                    Description
                  </li>

                  <li
                    className={`product__details--tab__list ${
                      activeTab === "reviews" ? "active" : ""
                    }`}
                    data-toggle="tab"
                    data-target="#reviews"
                    onClick={() => handleTabClick("reviews")}
                  >
                    Product Reviews
                  </li>
                  <li
                    className={`product__details--tab__list ${
                      activeTab === "information" ? "active" : ""
                    }`}
                    data-toggle="tab"
                    data-target="#information"
                    onClick={() => handleTabClick("information")}
                  >
                    Additional Info
                  </li>
                </ul>
                <div className="product__details--tab__inner border-radius-10">
                  <div className="tab_content">
                    <div
                      id="description"
                      className={`tab_pane ${
                        activeTab === "description" ? "active show" : ""
                      }`}
                    >
                      <div className="product__tab--content">
                        <div className="product__tab--content__step mb-30">
                          <h2 className="product__tab--content__title h4 mb-10">
                            Nam provident sequi
                          </h2>
                          <p className="product__tab--content__desc">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nam provident sequi, nemo sapiente culpa
                            nostrum rem eum perferendis quibusdam, magnam a
                            vitae corporis! Magnam enim modi, illo harum
                            suscipit tempore aut dolore doloribus deserunt
                            voluptatum illum, est porro? Ducimus dolore
                            accusamus impedit ipsum maiores, ea iusto temporibus
                            numquam eaque mollitia fugiat laborum dolor tempora
                            eligendi voluptatem quis necessitatibus nam ab?
                          </p>
                        </div>
                        <div className="product__tab--content__step">
                          <h4 className="product__tab--content__title mb-10">
                            More Details
                          </h4>
                          <ul>
                            <li className="product__tab--content__list">
                              <svg
                                className="product__tab--content__list--icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="22.51"
                                height="20.443"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="48"
                                  d="M268 112l144 144-144 144M392 256H100"
                                ></path>
                              </svg>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Laboriosam, dolorum?
                            </li>
                            <li className="product__tab--content__list">
                              <svg
                                className="product__tab--content__list--icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="22.51"
                                height="20.443"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="48"
                                  d="M268 112l144 144-144 144M392 256H100"
                                ></path>
                              </svg>
                              Magnam enim modi, illo harum suscipit tempore aut
                              dolore?
                            </li>

                            <li className="product__tab--content__list">
                              <svg
                                className="product__tab--content__list--icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="22.51"
                                height="20.443"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="48"
                                  d="M268 112l144 144-144 144M392 256H100"
                                ></path>
                              </svg>
                              Repellendus itaque sit quia consequuntur, unde
                              veritatis. dolorum?
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      id="reviews"
                      className={`tab_pane ${
                        activeTab === "reviews" ? "active show" : ""
                      }`}
                    >
                      <div className="product__reviews">
                        <div className="product__reviews--header">
                          <h2 className="product__reviews--header__title h3 mb-20">
                            Customer Reviews
                          </h2>
                          <div className="reviews__ratting d-flex align-items-center">
                            <ul className="rating d-flex">
                              <li className="rating__list">
                                <span className="rating__list--icon">
                                  <svg
                                    className="rating__list--icon__svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14.105"
                                    height="14.732"
                                    viewBox="0 0 10.105 9.732"
                                  >
                                    <path
                                      data-name="star - Copy"
                                      d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                      transform="translate(0 -0.018)"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                              </li>
                              <li className="rating__list">
                                <span className="rating__list--icon">
                                  <svg
                                    className="rating__list--icon__svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14.105"
                                    height="14.732"
                                    viewBox="0 0 10.105 9.732"
                                  >
                                    <path
                                      data-name="star - Copy"
                                      d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                      transform="translate(0 -0.018)"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                              </li>
                              <li className="rating__list">
                                <span className="rating__list--icon">
                                  <svg
                                    className="rating__list--icon__svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14.105"
                                    height="14.732"
                                    viewBox="0 0 10.105 9.732"
                                  >
                                    <path
                                      data-name="star - Copy"
                                      d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                      transform="translate(0 -0.018)"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                              </li>
                              <li className="rating__list">
                                <span className="rating__list--icon">
                                  <svg
                                    className="rating__list--icon__svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14.105"
                                    height="14.732"
                                    viewBox="0 0 10.105 9.732"
                                  >
                                    <path
                                      data-name="star - Copy"
                                      d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                      transform="translate(0 -0.018)"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                              </li>
                              <li className="rating__list">
                                <span className="rating__list--icon">
                                  <svg
                                    className="rating__list--icon__svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14.105"
                                    height="14.732"
                                    viewBox="0 0 10.105 9.732"
                                  >
                                    <path
                                      data-name="star - Copy"
                                      d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                      transform="translate(0 -0.018)"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                              </li>
                            </ul>
                            <span className="reviews__summary--caption">
                              Based on 2 reviews
                            </span>
                          </div>
                          <a
                            className="actions__newreviews--btn primary__btn"
                            href="#writereview"
                          >
                            Write A Review
                          </a>
                        </div>
                        <div className="reviews__comment--area">
                          <div className="reviews__comment--list d-flex">
                            <div className="reviews__comment--thumb">
                              <img src={img7} alt="comment-thumb" />
                            </div>
                            <div className="reviews__comment--content">
                              <div className="reviews__comment--top d-flex justify-content-between">
                                <div className="reviews__comment--top__left">
                                  <h3 className="reviews__comment--content__title h4">
                                    Richard Smith
                                  </h3>
                                  <ul className="rating reviews__comment--rating d-flex">
                                    <li className="rating__list">
                                      <span className="rating__list--icon">
                                        <svg
                                          className="rating__list--icon__svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14.105"
                                          height="14.732"
                                          viewBox="0 0 10.105 9.732"
                                        >
                                          <path
                                            data-name="star - Copy"
                                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                            transform="translate(0 -0.018)"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </li>
                                    <li className="rating__list">
                                      <span className="rating__list--icon">
                                        <svg
                                          className="rating__list--icon__svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14.105"
                                          height="14.732"
                                          viewBox="0 0 10.105 9.732"
                                        >
                                          <path
                                            data-name="star - Copy"
                                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                            transform="translate(0 -0.018)"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </li>
                                    <li className="rating__list">
                                      <span className="rating__list--icon">
                                        <svg
                                          className="rating__list--icon__svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14.105"
                                          height="14.732"
                                          viewBox="0 0 10.105 9.732"
                                        >
                                          <path
                                            data-name="star - Copy"
                                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                            transform="translate(0 -0.018)"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </li>
                                    <li className="rating__list">
                                      <span className="rating__list--icon">
                                        <svg
                                          className="rating__list--icon__svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14.105"
                                          height="14.732"
                                          viewBox="0 0 10.105 9.732"
                                        >
                                          <path
                                            data-name="star - Copy"
                                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                            transform="translate(0 -0.018)"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </li>
                                    <li className="rating__list">
                                      <span className="rating__list--icon">
                                        <svg
                                          className="rating__list--icon__svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14.105"
                                          height="14.732"
                                          viewBox="0 0 10.105 9.732"
                                        >
                                          <path
                                            data-name="star - Copy"
                                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                            transform="translate(0 -0.018)"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                                <span className="reviews__comment--content__date">
                                  February 18, 2022
                                </span>
                              </div>
                              <p className="reviews__comment--content__desc">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Eos ex repellat officiis
                                neque. Veniam, rem nesciunt. Assumenda
                                distinctio, autem error repellat eveniet ratione
                                dolor facilis accusantium amet pariatur, non
                                eius!
                              </p>
                            </div>
                          </div>
                          <div className="reviews__comment--list margin__left d-flex">
                            <div className="reviews__comment--thumb">
                              <img src={img7} alt="comment-thumb" />
                            </div>
                            <div className="reviews__comment--content">
                              <div className="reviews__comment--top d-flex justify-content-between">
                                <div className="reviews__comment--top__left">
                                  <h3 className="reviews__comment--content__title h4">
                                    Laura Johnson
                                  </h3>
                                  <ul className="rating reviews__comment--rating d-flex">
                                    <li className="rating__list">
                                      <span className="rating__list--icon">
                                        <svg
                                          className="rating__list--icon__svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14.105"
                                          height="14.732"
                                          viewBox="0 0 10.105 9.732"
                                        >
                                          <path
                                            data-name="star - Copy"
                                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                            transform="translate(0 -0.018)"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </li>
                                    <li className="rating__list">
                                      <span className="rating__list--icon">
                                        <svg
                                          className="rating__list--icon__svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14.105"
                                          height="14.732"
                                          viewBox="0 0 10.105 9.732"
                                        >
                                          <path
                                            data-name="star - Copy"
                                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                            transform="translate(0 -0.018)"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </li>
                                    <li className="rating__list">
                                      <span className="rating__list--icon">
                                        <svg
                                          className="rating__list--icon__svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14.105"
                                          height="14.732"
                                          viewBox="0 0 10.105 9.732"
                                        >
                                          <path
                                            data-name="star - Copy"
                                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                            transform="translate(0 -0.018)"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </li>
                                    <li className="rating__list">
                                      <span className="rating__list--icon">
                                        <svg
                                          className="rating__list--icon__svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14.105"
                                          height="14.732"
                                          viewBox="0 0 10.105 9.732"
                                        >
                                          <path
                                            data-name="star - Copy"
                                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                            transform="translate(0 -0.018)"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </li>
                                    <li className="rating__list">
                                      <span className="rating__list--icon">
                                        <svg
                                          className="rating__list--icon__svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14.105"
                                          height="14.732"
                                          viewBox="0 0 10.105 9.732"
                                        >
                                          <path
                                            data-name="star - Copy"
                                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                            transform="translate(0 -0.018)"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                                <span className="reviews__comment--content__date">
                                  February 18, 2022
                                </span>
                              </div>
                              <p className="reviews__comment--content__desc">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Eos ex repellat officiis
                                neque. Veniam, rem nesciunt. Assumenda
                                distinctio, autem error repellat eveniet ratione
                                dolor facilis accusantium amet pariatur, non
                                eius!
                              </p>
                            </div>
                          </div>
                          <div className="reviews__comment--list d-flex">
                            <div className="reviews__comment--thumb">
                              <img src={img7} alt="comment-thumb" />
                            </div>
                            <div className="reviews__comment--content">
                              <div className="reviews__comment--top d-flex justify-content-between">
                                <div className="reviews__comment--top__left">
                                  <h3 className="reviews__comment--content__title h4">
                                    John Deo
                                  </h3>
                                  <ul className="rating reviews__comment--rating d-flex">
                                    <li className="rating__list">
                                      <span className="rating__list--icon">
                                        <svg
                                          className="rating__list--icon__svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14.105"
                                          height="14.732"
                                          viewBox="0 0 10.105 9.732"
                                        >
                                          <path
                                            data-name="star - Copy"
                                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                            transform="translate(0 -0.018)"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </li>
                                    <li className="rating__list">
                                      <span className="rating__list--icon">
                                        <svg
                                          className="rating__list--icon__svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14.105"
                                          height="14.732"
                                          viewBox="0 0 10.105 9.732"
                                        >
                                          <path
                                            data-name="star - Copy"
                                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                            transform="translate(0 -0.018)"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </li>
                                    <li className="rating__list">
                                      <span className="rating__list--icon">
                                        <svg
                                          className="rating__list--icon__svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14.105"
                                          height="14.732"
                                          viewBox="0 0 10.105 9.732"
                                        >
                                          <path
                                            data-name="star - Copy"
                                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                            transform="translate(0 -0.018)"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </li>
                                    <li className="rating__list">
                                      <span className="rating__list--icon">
                                        <svg
                                          className="rating__list--icon__svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14.105"
                                          height="14.732"
                                          viewBox="0 0 10.105 9.732"
                                        >
                                          <path
                                            data-name="star - Copy"
                                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                            transform="translate(0 -0.018)"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </li>
                                    <li className="rating__list">
                                      <span className="rating__list--icon">
                                        <svg
                                          className="rating__list--icon__svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14.105"
                                          height="14.732"
                                          viewBox="0 0 10.105 9.732"
                                        >
                                          <path
                                            data-name="star - Copy"
                                            d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                            transform="translate(0 -0.018)"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                                <span className="reviews__comment--content__date">
                                  February 18, 2022
                                </span>
                              </div>
                              <p className="reviews__comment--content__desc">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Eos ex repellat officiis
                                neque. Veniam, rem nesciunt. Assumenda
                                distinctio, autem error repellat eveniet ratione
                                dolor facilis accusantium amet pariatur, non
                                eius!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          id="writereview"
                          className="reviews__comment--reply__area"
                        >
                          <form action="#">
                            <h3 className="reviews__comment--reply__title mb-15">
                              Add a review{" "}
                            </h3>
                            <div className="reviews__ratting d-flex align-items-center mb-20">
                              <ul className="rating d-flex">
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg
                                      className="rating__list--icon__svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14.105"
                                      height="14.732"
                                      viewBox="0 0 10.105 9.732"
                                    >
                                      <path
                                        data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg
                                      className="rating__list--icon__svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14.105"
                                      height="14.732"
                                      viewBox="0 0 10.105 9.732"
                                    >
                                      <path
                                        data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg
                                      className="rating__list--icon__svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14.105"
                                      height="14.732"
                                      viewBox="0 0 10.105 9.732"
                                    >
                                      <path
                                        data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg
                                      className="rating__list--icon__svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14.105"
                                      height="14.732"
                                      viewBox="0 0 10.105 9.732"
                                    >
                                      <path
                                        data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg
                                      className="rating__list--icon__svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14.105"
                                      height="14.732"
                                      viewBox="0 0 10.105 9.732"
                                    >
                                      <path
                                        data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="row">
                              <div className="col-12 mb-10">
                                <textarea
                                  className="reviews__comment--reply__textarea"
                                  placeholder="Your Comments...."
                                ></textarea>
                              </div>
                              <div className="col-lg-6 col-md-6 mb-15">
                                <label>
                                  <input
                                    className="reviews__comment--reply__input"
                                    placeholder="Your Name...."
                                    type="text"
                                  />
                                </label>
                              </div>
                              <div className="col-lg-6 col-md-6 mb-15">
                                <label>
                                  <input
                                    className="reviews__comment--reply__input"
                                    placeholder="Your Email...."
                                    type="email"
                                  />
                                </label>
                              </div>
                            </div>
                            <button
                              className="reviews__comment--btn text-white primary__btn"
                              data-hover="Submit"
                              type="submit"
                            >
                              SUBMIT
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div
                      id="information"
                      class={`tab_pane ${
                        activeTab === "information" ? "active show" : ""
                      }`}
                    >
                      <div className="product__tab--conten">
                        <div className="product__tab--content__step mb-30">
                          <h2 className="product__tab--content__title h4 mb-10">
                            Nam provident sequi
                          </h2>
                          <p className="product__tab--content__desc">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nam provident sequi, nemo sapiente culpa
                            nostrum rem eum perferendis quibusdam, magnam a
                            vitae corporis! Magnam enim modi, illo harum
                            suscipit tempore aut dolore doloribus deserunt
                            voluptatum illum, est porro? Ducimus dolore
                            accusamus impedit ipsum maiores, ea iusto temporibus
                            numquam eaque mollitia fugiat laborum dolor tempora
                            eligendi voluptatem quis necessitatibus nam ab?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End product details tab section --> */}

        {/* <!-- Start product section --> */}

        <section className="product__section product__section--style3 section--padding">
          <div className="container product3__section--container">
            <div className="section__heading text-center mb-50">
              <h2 className="section__heading--maintitle">You may also like</h2>
            </div>
            <div className="product__section--inner product__swiper--column4__activation swiper">
              <div className="swiper-wrapper">
                <Slider {...settings}>
                  {PRODUCTS.slice(0, 8).map((product) => (
                    <div key={product.id} className="swiper-slide">
                      <div
                        className="product__items"
                        style={{ margin: "0px 10px" }}
                      >
                        <div className="product__items--thumbnail">
                          <a
                            className="product__items--link"
                            href="product-details.html"
                          >
                            <img
                              className="product__items--img product__primary--img"
                              src={product.img}
                              alt="product-img"
                            />
                          </a>
                          <div className="product__badge">
                            <span className="product__badge--items sale">
                              {product.sale}
                            </span>
                          </div>
                        </div>
                        <div className="product__items--content">
                          <span className="product__items--content__subtitle">
                            {product.title}
                          </span>
                          <h3 className="product__items--content__title h4">
                            <a href="product-details.html">
                              {product.product_title}
                            </a>
                          </h3>
                          <div className="product__items--price">
                            <span className="current__price">
                              {product.current_price}
                            </span>
                            <span className="price__divided"></span>
                            <span className="old__price">
                              {product.old_price}
                            </span>
                          </div>
                          <ul className="rating product__rating d-flex">
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg
                                  className="rating__list--icon__svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14.105"
                                  height="14.732"
                                  viewBox="0 0 10.105 9.732"
                                >
                                  <path
                                    data-name="star - Copy"
                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                    transform="translate(0 -0.018)"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg
                                  className="rating__list--icon__svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14.105"
                                  height="14.732"
                                  viewBox="0 0 10.105 9.732"
                                >
                                  <path
                                    data-name="star - Copy"
                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                    transform="translate(0 -0.018)"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg
                                  className="rating__list--icon__svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14.105"
                                  height="14.732"
                                  viewBox="0 0 10.105 9.732"
                                >
                                  <path
                                    data-name="star - Copy"
                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                    transform="translate(0 -0.018)"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg
                                  className="rating__list--icon__svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14.105"
                                  height="14.732"
                                  viewBox="0 0 10.105 9.732"
                                >
                                  <path
                                    data-name="star - Copy"
                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                    transform="translate(0 -0.018)"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                            </li>
                            <li className="rating__list">
                              <span className="rating__list--icon">
                                <svg
                                  className="rating__list--icon__svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14.105"
                                  height="14.732"
                                  viewBox="0 0 10.105 9.732"
                                >
                                  <path
                                    data-name="star - Copy"
                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                    transform="translate(0 -0.018)"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                            </li>
                          </ul>
                          <ul className="product__items--action d-flex">
                            <li className="product__items--action__list">
                              <a
                                className="product__items--action__btn add__to--cart"
                                href="cart.html"
                              >
                                <svg
                                  className="product__items--action__btn--svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22.51"
                                  height="20.443"
                                  viewBox="0 0 14.706 13.534"
                                >
                                  <g transform="translate(0 0)">
                                    <g>
                                      <path
                                        data-name="Path 16787"
                                        d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                                        transform="translate(0 -463.248)"
                                        fill="currentColor"
                                      ></path>
                                      <path
                                        data-name="Path 16788"
                                        d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                                        transform="translate(-1.191 -466.622)"
                                        fill="currentColor"
                                      ></path>
                                      <path
                                        data-name="Path 16789"
                                        d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                                        transform="translate(-2.875 -466.622)"
                                        fill="currentColor"
                                      ></path>
                                    </g>
                                  </g>
                                </svg>
                                <span className="add__to--cart__text">
                                  {" "}
                                  + Add to cart
                                </span>
                              </a>
                            </li>
                            <li className="product__items--action__list">
                              <a
                                className="product__items--action__btn"
                                href="wishlist.html"
                              >
                                <svg
                                  className="product__items--action__btn--svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="25.51"
                                  height="23.443"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                  ></path>
                                </svg>
                                <span className="visually-hidden">
                                  Wishlist
                                </span>
                              </a>
                            </li>
                            <li className="product__items--action__list">
                              <a
                                className="product__items--action__btn"
                                data-open="modal1"
                                href="javascript:void(0)"
                              >
                                <svg
                                  className="product__items--action__btn--svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="25.51"
                                  height="23.443"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                  />
                                  <circle
                                    cx="256"
                                    cy="256"
                                    r="80"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-miterlimit="10"
                                    stroke-width="32"
                                  />
                                </svg>
                                <span className="visually-hidden">
                                  Quick View
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="swiper__nav--btn swiper-button-next"></div>
              <div className="swiper__nav--btn swiper-button-prev"></div>
            </div>
          </div>
        </section>
        {/* <!-- End product section --> */}
      </main>
    </>
  );
};

export default ProductDetails;
