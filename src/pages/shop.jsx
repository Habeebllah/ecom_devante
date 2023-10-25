import React, { useContext, useEffect } from "react";
import product1 from "../assets/img/product/small-product1.png";

import { Link } from "react-router-dom";
import { PRODUCTS } from "../products";
import { CartContext } from "../cartContext";
const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (product) => {
    addToCart(product);
    console.log("Product added to cart:", product);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="main__content_wrapper">
        <section className="breadcrumb__section breadcrumb__bg">
          <div className="container">
            <div className="row row-cols-1">
              <div className="col">
                <div className="breadcrumb__content text-center"></div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Start shop section --> */}
        <section className="shop__section section--padding">
          <div className="container-fluid">
            <div className="shop__header bg__gray--color d-flex align-items-center justify-content-between mb-30">
              <button
                className="widget__filter--btn d-flex d-lg-none align-items-center"
                data-offcanvas
              >
                <svg
                  className="widget__filter--btn__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="28"
                    d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"
                  />
                  <circle
                    cx="336"
                    cy="128"
                    r="28"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="28"
                  />
                  <circle
                    cx="176"
                    cy="256"
                    r="28"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="28"
                  />
                  <circle
                    cx="336"
                    cy="384"
                    r="28"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="28"
                  />
                </svg>
                <span className="widget__filter--btn__text">Filter</span>
              </button>
              <div className="product__view--mode d-flex align-items-center">
                <div className="product__view--mode__list product__short--by align-items-center d-none d-lg-flex">
                  <label className="product__view--label">Prev Page :</label>
                  <div className="select shop__header--select">
                    <select className="product__view--select">
                      <option selected value="1">
                        65
                      </option>
                      <option value="2">40</option>
                      <option value="3">42</option>
                      <option value="4">57 </option>
                      <option value="5">60 </option>
                    </select>
                  </div>
                </div>
                <div className="product__view--mode__list product__short--by align-items-center d-none d-lg-flex">
                  <label className="product__view--label">Sort By :</label>
                  <div className="select shop__header--select">
                    <select className="product__view--select">
                      <option selected value="1">
                        Sort by latest
                      </option>
                      <option value="2">Sort by popularity</option>
                      <option value="3">Sort by newness</option>
                      <option value="4">Sort by rating </option>
                    </select>
                  </div>
                </div>
                <div className="product__view--mode__list">
                  <div className="product__grid--column__buttons d-flex justify-content-center">
                    <button
                      className="product__grid--column__buttons--icons active"
                      aria-label="product grid button"
                      data-toggle="tab"
                      data-target="#product_grid"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 9 9"
                      >
                        <g transform="translate(-1360 -479)">
                          <rect
                            id="Rectangle_5725"
                            data-name="Rectangle 5725"
                            width="4"
                            height="4"
                            transform="translate(1360 479)"
                            fill="currentColor"
                          />
                          <rect
                            id="Rectangle_5727"
                            data-name="Rectangle 5727"
                            width="4"
                            height="4"
                            transform="translate(1360 484)"
                            fill="currentColor"
                          />
                          <rect
                            id="Rectangle_5726"
                            data-name="Rectangle 5726"
                            width="4"
                            height="4"
                            transform="translate(1365 479)"
                            fill="currentColor"
                          />
                          <rect
                            id="Rectangle_5728"
                            data-name="Rectangle 5728"
                            width="4"
                            height="4"
                            transform="translate(1365 484)"
                            fill="currentColor"
                          />
                        </g>
                      </svg>
                    </button>
                    <button
                      className="product__grid--column__buttons--icons"
                      aria-label="product list button"
                      data-toggle="tab"
                      data-target="#product_list"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 13 8"
                      >
                        <g
                          id="Group_14700"
                          data-name="Group 14700"
                          transform="translate(-1376 -478)"
                        >
                          <g transform="translate(12 -2)">
                            <g id="Group_1326" data-name="Group 1326">
                              <rect
                                id="Rectangle_5729"
                                data-name="Rectangle 5729"
                                width="3"
                                height="2"
                                transform="translate(1364 483)"
                                fill="currentColor"
                              />
                              <rect
                                id="Rectangle_5730"
                                data-name="Rectangle 5730"
                                width="9"
                                height="2"
                                transform="translate(1368 483)"
                                fill="currentColor"
                              />
                            </g>
                            <g
                              id="Group_1328"
                              data-name="Group 1328"
                              transform="translate(0 -3)"
                            >
                              <rect
                                id="Rectangle_5729-2"
                                data-name="Rectangle 5729"
                                width="3"
                                height="2"
                                transform="translate(1364 483)"
                                fill="currentColor"
                              />
                              <rect
                                id="Rectangle_5730-2"
                                data-name="Rectangle 5730"
                                width="9"
                                height="2"
                                transform="translate(1368 483)"
                                fill="currentColor"
                              />
                            </g>
                            <g
                              id="Group_1327"
                              data-name="Group 1327"
                              transform="translate(0 -1)"
                            >
                              <rect
                                id="Rectangle_5731"
                                data-name="Rectangle 5731"
                                width="3"
                                height="2"
                                transform="translate(1364 487)"
                                fill="currentColor"
                              />
                              <rect
                                id="Rectangle_5732"
                                data-name="Rectangle 5732"
                                width="9"
                                height="2"
                                transform="translate(1368 487)"
                                fill="currentColor"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="product__view--mode__list product__view--search d-none d-lg-block">
                  <form className="product__view--search__form" action="#">
                    <label>
                      <input
                        className="product__view--search__input borde-r-0"
                        placeholder="Search by"
                        type="text"
                      />
                    </label>
                    <button
                      className="product__view--search__btn"
                      aria-label="shop button"
                      type="submit"
                    >
                      <svg
                        className="product__view--search__btn--svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22.51"
                        height="20.443"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                          stroke-width="32"
                        />
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="32"
                          d="M338.29 338.29L448 448"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
              <p className="product__showing--count">
                Showing 1–9 of 21 results
              </p>
            </div>
            <div className="row">
              <div className="col-xl-9 col-lg-8">
                <div className="shop__product--wrapper">
                  <div className="tab_content">
                    <div id="product_grid" className="tab_pane active show">
                      <div className="product__section--inner product__grid--inner">
                        <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-2 mb--n30">
                          {PRODUCTS.map((product) => (
                            <div className="col mb-30">
                              <div className="product__items ">
                                <div className="product__items--thumbnail">
                                  <Link
                                    className="product__items--link"
                                    to={`/productdetails/${product.id}`}
                                  >
                                    <img
                                      className="product__items--img product__primary--img"
                                      src={product.img}
                                      alt={product.title}
                                    />
                                  </Link>
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
                                      ${product.current_price}
                                    </span>
                                    <span className="price__divided"></span>
                                    <span className="old__price">
                                      {" "}
                                      ${product.old_price}{" "}
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
                                      <Link
                                        className="product__items--action__btn add__to--cart"
                                        onClick={() => handleAddToCart(product)}
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
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pagination__area bg__gray--color">
                    <nav className="pagination justify-content-center">
                      <ul className="pagination__wrapper d-flex align-items-center justify-content-center">
                        <li className="pagination__list">
                          <a
                            href="shop.html"
                            className="pagination__item--arrow  link "
                          >
                            <svg
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
                                d="M244 400L100 256l144-144M120 256h292"
                              />
                            </svg>
                            <span className="visually-hidden">
                              pagination arrow
                            </span>
                          </a>
                        </li>
                        <li className="pagination__list">
                          <span className="pagination__item pagination__item--current">
                            1
                          </span>
                        </li>
                        <li className="pagination__list">
                          <a href="shop.html" className="pagination__item link">
                            2
                          </a>
                        </li>
                        <li className="pagination__list">
                          <a href="shop.html" className="pagination__item link">
                            3
                          </a>
                        </li>
                        <li className="pagination__list">
                          <a href="shop.html" className="pagination__item link">
                            4
                          </a>
                        </li>
                        <li className="pagination__list">
                          <a
                            href="shop.html"
                            className="pagination__item--arrow  link "
                          >
                            <svg
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
                              />
                            </svg>
                            <span className="visually-hidden">
                              pagination arrow
                            </span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="shop__sidebar--widget widget__area d-none d-lg-block">
                  <div className="single__widget widget__bg">
                    <h2 className="widget__title h3">Categories</h2>
                    <ul className="widget__categories--menu">
                      <li className="widget__categories--menu__list">
                        <label className="widget__categories--menu__label d-flex align-items-center">
                          <img
                            className="widget__categories--menu__img"
                            src={product1}
                            alt="categories-img"
                          />
                          <span className="widget__categories--menu__text">
                            Denim Jacket
                          </span>
                          <svg
                            className="widget__categories--menu__arrowdown--icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.355"
                            height="8.394"
                          >
                            <path
                              d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                              transform="translate(-6 -8.59)"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </label>
                        <ul className="widget__categories--sub__menu">
                          <li className="widget__categories--sub__menu--list">
                            <a
                              className="widget__categories--sub__menu--link d-flex align-items-center"
                              href="shop.html"
                            >
                              <img
                                className="widget__categories--sub__menu--img"
                                src={product1}
                                alt="categories-img"
                              />
                              <span className="widget__categories--sub__menu--text">
                                Jacket, Women
                              </span>
                            </a>
                          </li>
                          <li className="widget__categories--sub__menu--list">
                            <a
                              className="widget__categories--sub__menu--link d-flex align-items-center"
                              href="shop.html"
                            >
                              <img
                                className="widget__categories--sub__menu--img"
                                src={product1}
                                alt="categories-img"
                              />
                              <span className="widget__categories--sub__menu--text">
                                Woolend Jacket
                              </span>
                            </a>
                          </li>
                          <li className="widget__categories--sub__menu--list">
                            <a
                              className="widget__categories--sub__menu--link d-flex align-items-center"
                              href="shop.html"
                            >
                              <img
                                className="widget__categories--sub__menu--img"
                                src={product1}
                                alt="categories-img"
                              />
                              <span className="widget__categories--sub__menu--text">
                                Western denim
                              </span>
                            </a>
                          </li>
                          <li className="widget__categories--sub__menu--list">
                            <a
                              className="widget__categories--sub__menu--link d-flex align-items-center"
                              href="shop.html"
                            >
                              <img
                                className="widget__categories--sub__menu--img"
                                src={product1}
                                alt="categories-img"
                              />
                              <span className="widget__categories--sub__menu--text">
                                Mini Dresss
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="widget__categories--menu__list">
                        <label className="widget__categories--menu__label d-flex align-items-center">
                          <img
                            className="widget__categories--menu__img"
                            src={product1}
                            alt="categories-img"
                          />
                          <span className="widget__categories--menu__text">
                            Oversize Cotton
                          </span>
                          <svg
                            className="widget__categories--menu__arrowdown--icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.355"
                            height="8.394"
                          >
                            <path
                              d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                              transform="translate(-6 -8.59)"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </label>
                        <ul className="widget__categories--sub__menu">
                          <li className="widget__categories--sub__menu--list">
                            <a
                              className="widget__categories--sub__menu--link d-flex align-items-center"
                              href="shop.html"
                            >
                              <img
                                className="widget__categories--sub__menu--img"
                                src={product1}
                                alt="categories-img"
                              />
                              <span className="widget__categories--sub__menu--text">
                                Jacket, Women
                              </span>
                            </a>
                          </li>
                          <li className="widget__categories--sub__menu--list">
                            <a
                              className="widget__categories--sub__menu--link d-flex align-items-center"
                              href="shop.html"
                            >
                              <img
                                className="widget__categories--sub__menu--img"
                                src={product1}
                                alt="categories-img"
                              />
                              <span className="widget__categories--sub__menu--text">
                                Woolend Jacket
                              </span>
                            </a>
                          </li>
                          <li className="widget__categories--sub__menu--list">
                            <a
                              className="widget__categories--sub__menu--link d-flex align-items-center"
                              href="shop.html"
                            >
                              <img
                                className="widget__categories--sub__menu--img"
                                src={product1}
                                alt="categories-img"
                              />
                              <span className="widget__categories--sub__menu--text">
                                Western denim
                              </span>
                            </a>
                          </li>
                          <li className="widget__categories--sub__menu--list">
                            <a
                              className="widget__categories--sub__menu--link d-flex align-items-center"
                              href="shop.html"
                            >
                              <img
                                className="widget__categories--sub__menu--img"
                                src={product1}
                                alt="categories-img"
                              />
                              <span className="widget__categories--sub__menu--text">
                                Mini Dresss
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="widget__categories--menu__list">
                        <label className="widget__categories--menu__label d-flex align-items-center">
                          <img
                            className="widget__categories--menu__img"
                            src={product1}
                            alt="categories-img"
                          />
                          <span className="widget__categories--menu__text">
                            Dairy & chesse
                          </span>
                          <svg
                            className="widget__categories--menu__arrowdown--icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.355"
                            height="8.394"
                          >
                            <path
                              d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                              transform="translate(-6 -8.59)"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </label>
                        <ul className="widget__categories--sub__menu">
                          <li className="widget__categories--sub__menu--list">
                            <a
                              className="widget__categories--sub__menu--link d-flex align-items-center"
                              href="shop.html"
                            >
                              <img
                                className="widget__categories--sub__menu--img"
                                src={product1}
                                alt="categories-img"
                              />
                              <span className="widget__categories--sub__menu--text">
                                Jacket, Women
                              </span>
                            </a>
                          </li>
                          <li className="widget__categories--sub__menu--list">
                            <a
                              className="widget__categories--sub__menu--link d-flex align-items-center"
                              href="shop.html"
                            >
                              <img
                                className="widget__categories--sub__menu--img"
                                src={product1}
                                alt="categories-img"
                              />
                              <span className="widget__categories--sub__menu--text">
                                Woolend Jacket
                              </span>
                            </a>
                          </li>
                          <li className="widget__categories--sub__menu--list">
                            <a
                              className="widget__categories--sub__menu--link d-flex align-items-center"
                              href="shop.html"
                            >
                              <img
                                className="widget__categories--sub__menu--img"
                                src={product1}
                                alt="categories-img"
                              />
                              <span className="widget__categories--sub__menu--text">
                                Western denim
                              </span>
                            </a>
                          </li>
                          <li className="widget__categories--sub__menu--list">
                            <a
                              className="widget__categories--sub__menu--link d-flex align-items-center"
                              href="shop.html"
                            >
                              <img
                                className="widget__categories--sub__menu--img"
                                src={product1}
                                alt="categories-img"
                              />
                              <span className="widget__categories--sub__menu--text">
                                Mini Dresss
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="widget__categories--menu__list">
                        <label className="widget__categories--menu__label d-flex align-items-center">
                          <img
                            className="widget__categories--menu__img"
                            src={product1}
                            alt="categories-img"
                          />
                          <span className="widget__categories--menu__text">
                            Shoulder Bag
                          </span>
                          <svg
                            className="widget__categories--menu__arrowdown--icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.355"
                            height="8.394"
                          >
                            <path
                              d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                              transform="translate(-6 -8.59)"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </label>
                        <ul className="widget__categories--sub__menu">
                          <li className="widget__categories--sub__menu--list">
                            <a
                              className="widget__categories--sub__menu--link d-flex align-items-center"
                              href="shop.html"
                            >
                              <img
                                className="widget__categories--sub__menu--img"
                                src={product1}
                                alt="categories-img"
                              />
                              <span className="widget__categories--sub__menu--text">
                                Jacket, Women
                              </span>
                            </a>
                          </li>
                          <li className="widget__categories--sub__menu--list">
                            <a
                              className="widget__categories--sub__menu--link d-flex align-items-center"
                              href="shop.html"
                            >
                              <img
                                className="widget__categories--sub__menu--img"
                                src={product1}
                                alt="categories-img"
                              />
                              <span className="widget__categories--sub__menu--text">
                                Woolend Jacket
                              </span>
                            </a>
                          </li>
                          <li className="widget__categories--sub__menu--list">
                            <a
                              className="widget__categories--sub__menu--link d-flex align-items-center"
                              href="shop.html"
                            >
                              <img
                                className="widget__categories--sub__menu--img"
                                src={product1}
                                alt="categories-img"
                              />
                              <span className="widget__categories--sub__menu--text">
                                Western denim
                              </span>
                            </a>
                          </li>
                          <li className="widget__categories--sub__menu--list">
                            <a
                              className="widget__categories--sub__menu--link d-flex align-items-center"
                              href="shop.html"
                            >
                              <img
                                className="widget__categories--sub__menu--img"
                                src={product1}
                                alt="categories-img"
                              />
                              <span className="widget__categories--sub__menu--text">
                                Mini Dresss
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="single__widget widget__bg">
                    <h2 className="widget__title h3">Dietary Needs</h2>
                    <ul className="widget__form--check">
                      <li className="widget__form--check__list">
                        <label
                          className="widget__form--check__label"
                          for="check1"
                        >
                          Denim shirt
                        </label>
                        <input
                          className="widget__form--check__input"
                          id="ch /eck1"
                          type="checkbox"
                        />
                        <span className="widget__form--checkmark"></span>
                      </li>
                      <li className="widget__form--check__list">
                        <label
                          className="widget__form--check__label"
                          for="check2"
                        >
                          Need Winter
                        </label>
                        <input
                          className="widget__form--check__input"
                          id="check2"
                          type="checkbox"
                        />
                        <span className="widget__form--checkmark"></span>
                      </li>
                      <li className="widget__form--check__list">
                        <label
                          className="widget__form--check__label"
                          for="check3"
                        >
                          Fashion Trends
                        </label>
                        <input
                          className="widget__form--check__input"
                          id="check3"
                          type="checkbox"
                        />
                        <span className="widget__form--checkmark"></span>
                      </li>
                      <li className="widget__form--check__list">
                        <label
                          className="widget__form--check__label"
                          for="check4"
                        >
                          Oversize Cotton
                        </label>
                        <input
                          className="widget__form--check__input"
                          id="check4"
                          type="checkbox"
                        />
                        <span className="widget__form--checkmark"></span>
                      </li>
                      <li className="widget__form--check__list">
                        <label
                          className="widget__form--check__label"
                          for="check5"
                        >
                          Baking material
                        </label>
                        <input
                          className="widget__form--check__input"
                          id="check5"
                          type="checkbox"
                        />
                        <span className="widget__form--checkmark"></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              ;
            </div>
          </div>
        </section>
        {/* <!-- End shop section --> */}
      </main>

      <button id="scroll__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
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

export default Shop;
