import React, { useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import brand1 from "../assets/img/logo/brand-logo1.png";
import brand2 from "../assets/img/logo/brand-logo2.png";
import brand3 from "../assets/img/logo/brand-logo3.png";
import brand4 from "../assets/img/logo/brand-logo4.png";
import brand5 from "../assets/img/logo/brand-logo5.png";

import { CartContext } from "../cartContext";

import { Link, Outlet } from "react-router-dom";
import { PRODUCTS } from "../products";
const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const handleQuantityChange = (itemId, amount) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max(prevQuantities[itemId] + amount, 1),
    }));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    for (const item of cartItems) {
      totalPrice += item.current_price * quantities[item.id];
    }

    return totalPrice.toFixed(2);
  };

  const calculateOverallTotalPrice = () => {
    let totalPrice = 0;

    for (const item of cartItems) {
      totalPrice += item.current_price * quantities[item.id];
    }

    return totalPrice.toFixed(2);
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    
    autoplay: true, //Set to true for automatic sliding
    autoplaySpeed: 1000, // Set the interval (in milliseconds)
  };
  return (
    <>
      <main class="main__content_wrapper">
        <section class="breadcrumb__section breadcrumb__bg">
          <div class="container">
            <div class="row row-cols-1">
              <div class="col">
                {/* <div class="breadcrumb__content text-center">
                  <h1 class="breadcrumb__content--title text-white mb-25">Shopping Cart</h1>
                  <ul class="breadcrumb__content--menu d-flex justify-content-center">
                      <li class="breadcrumb__content--menu__items"><a class="text-white" href="index.html">Home</a></li>
                      <li class="breadcrumb__content--menu__items"><span class="text-white">Shopping Cart</span></li>
                  </ul>
  </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* <!-- cart section start --> */}
        <section className="cart__section section--padding">
          <div className="container-fluid">
            <div className="cart__section--inner">
              <form action="#">
                <h2 className="cart__title mb-40">Shopping Cart</h2>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="cart__table">
                      <table className="cart__table--inner">
                        <thead className="cart__table--header">
                          <tr className="cart__table--header__items">
                            <th className="cart__table--header__list">
                              Product
                            </th>
                            <th className="cart__table--header__list">Price</th>
                            <th className="cart__table--header__list">
                              Quantity
                            </th>
                            <th className="cart__table--header__list">Total</th>
                          </tr>
                        </thead>
                        <tbody className="cart__table--body">
                          {cartItems.map((item) => (
                            <tr
                              key={item.id}
                              className="cart__table--body__items"
                            >
                              <td className="cart__table--body__list">
                                <div className="cart__product d-flex align-items-center">
                                  <button
                                    className="cart__remove--btn"
                                    aria-label="remove button"
                                    type="button"
                                    onClick={() => handleRemoveItem(item.id)}
                                  >
                                    <svg
                                      fill="currentColor"
                                      xmlns="http:www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="16px"
                                      height="16px"
                                    >
                                      <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                                    </svg>
                                  </button>
                                  <div className="cart__thumbnail">
                                    <Link to="productDetails">
                                      <img
                                        className="border-radius-5"
                                        src={item.img}
                                        alt={item.product_title}
                                      />
                                    </Link>
                                  </div>
                                  <div className="cart__content">
                                    <h4 className="cart__content--title">
                                      <a href="product-details.html">
                                        {item.product_title}
                                      </a>
                                    </h4>
                                    <span className="cart__content--variant">
                                      {item.color}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="cart__table--body__list">
                                <span className="cart__price">
                                  {" "}
                                  £{item.current_price}
                                </span>
                              </td>
                              <td className="cart__table--body__list">
                                <div className="quantity__box">
                                  <button
                                    type="button"
                                    className="quantity__value quickview__value--quantity decrease"
                                    aria-label="quantity value"
                                    value="Decrease Value"
                                    onClick={() =>
                                      handleQuantityChange(item.id, -1)
                                    }
                                  >
                                    -
                                  </button>
                                  <label>
                                    <input
                                      type="number"
                                      className="quantity__number quickview__value--number"
                                      value={quantities[item.id]}
                                      data-counter
                                      readOnly
                                    />
                                  </label>
                                  <button
                                    type="button"
                                    className="quantity__value quickview__value--quantity increase"
                                    aria-label="quantity value"
                                    value="Increase Value"
                                    onClick={() =>
                                      handleQuantityChange(item.id, 1)
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="cart__table--body__list">
                                <span className="cart__price end">
                                  {" "}
                                  £
                                  {(
                                    item.current_price * quantities[item.id]
                                  ).toFixed(2)}
                                </span>
                              </td>

                              {/* ...rest of your table cells */}
                            </tr>
                          ))}

                          <tr className="cart__table--body__items"></tr>
                        </tbody>
                      </table>
                      <div className="continue__shopping d-flex justify-content-between">
                        <Link className="continue__shopping--link" to="/shop">
                          Continue shopping
                        </Link>
                        <button
                          className="continue__shopping--clear"
                          type="submit"
                        >
                          Clear Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="cart__summary border-radius-10">
                      <div className="coupon__code mb-30">
                        <h3 className="coupon__code--title">Coupon</h3>
                        <p className="coupon__code--desc">
                          Enter your coupon code if you have one.
                        </p>
                        <div className="coupon__code--field d-flex">
                          <label>
                            <input
                              className="coupon__code--field__input border-radius-5"
                              placeholder="Coupon code"
                              type="text"
                            />
                          </label>
                          <button
                            className="coupon__code--field__btn primary__btn"
                            type="submit"
                          >
                            Apply Coupon
                          </button>
                        </div>
                      </div>
                      <div className="cart__note mb-20">
                        <h3 className="cart__note--title">Note</h3>
                        <p className="cart__note--desc">
                          Add special instructions for your seller...
                        </p>
                        <textarea className="cart__note--textarea border-radius-5"></textarea>
                      </div>
                      <div className="cart__summary--total mb-20">
                        <table className="cart__summary--total__table">
                          <tbody>
                            <tr className="cart__summary--total__list">
                              <td className="cart__summary--total__title text-left">
                                SUBTOTAL
                              </td>
                              <td className="cart__summary--amount text-right">
                                £{calculateTotalPrice()}
                              </td>
                            </tr>
                            <tr className="cart__summary--total__list">
                              <td className="cart__summary--total__title text-left">
                                GRAND TOTAL
                              </td>
                              <td className="cart__summary--amount text-right">
                                £{calculateOverallTotalPrice()}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="cart__summary--footer">
                        <p className="cart__summary--footer__desc">
                          Shipping & taxes calculated at checkout
                        </p>
                        <ul className="d-flex justify-content-between">
                          <li>
                            <button
                              className="cart__summary--footer__btn primary__btn cart"
                              type="submit"
                            >
                              Update Cart
                            </button>
                          </li>
                          <li>
                            <Link
                              className="cart__summary--footer__btn primary__btn checkout"
                              to="/checkout"
                            >
                              Check Out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* <!-- cart section end --> */}

        {/* <!-- Start product section --> */}
        <section className="product__section section--padding pt-0">
          <div className="container-fluid">
            <div className="section__heading text-center mb-50">
              <h2 className="section__heading--maintitle">New Products</h2>
            </div>
            <div className="product__section--inner product__swiper--activation swiper">
              <div className="swiper-wrapper" >
              <Slider {...settings}>
                  {PRODUCTS.slice(0, 10).map((product) => (
                    <div key={product.id} className="swiper-slide">
                      <div className="product__items" style={{margin:"0px 10px"}}>
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
                                  xmlns="http:www.w3.org/2000/svg"
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
                                  xmlns="http:www.w3.org/2000/svg"
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
                                  xmlns="http:www.w3.org/2000/svg"
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
                                  xmlns="http:www.w3.org/2000/svg"
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
                                  xmlns="http:www.w3.org/2000/svg"
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
                                to="/cart"
                              >
                                <svg
                                  className="product__items--action__btn--svg"
                                  xmlns="http:www.w3.org/2000/svg"
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
                </Slider>
              </div>
              {/* <div className="swiper__nav--btn swiper-button-next"></div>
        <div className="swiper__nav--btn swiper-button-prev"></div> */}
            </div>
          </div>
        </section>
        {/* <!-- End product section --> */}

        {/* <!-- Start brand logo section --> */}
        <div class="brand__logo--section bg__secondary section--padding">
          <div class="container-fluid">
            <div class="row row-cols-1">
              <div class="col">
                <div class="brand__logo--section__inner d-flex justify-content-center align-items-center">
                  <div class="brand__logo--items">
                    <img
                      class="brand__logo--items__thumbnail--img display-block"
                      src={brand1}
                      alt="brand logo"
                    />
                  </div>
                  <div class="brand__logo--items">
                    <img
                      class="brand__logo--items__thumbnail--img display-block"
                      src={brand2}
                      alt="brand logo"
                    />
                  </div>
                  <div class="brand__logo--items">
                    <img
                      class="brand__logo--items__thumbnail--img display-block"
                      src={brand3}
                      alt="brand logo"
                    />
                  </div>
                  <div class="brand__logo--items">
                    <img
                      class="brand__logo--items__thumbnail--img display-block"
                      src={brand4}
                      alt="brand logo"
                    />
                  </div>
                  <div class="brand__logo--items">
                    <img
                      class="brand__logo--items__thumbnail--img display-block"
                      src={brand5}
                      alt="brand logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End brand logo section --> */}
      </main>
    </>
  );
};

export default Cart;
