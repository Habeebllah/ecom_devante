import React from "react";
import logo from "../assets/img/logo/nav-logo.png";
// import img from "../assets/img/product/small-product7.png";
import img1 from "../assets/img/icon/credit-card.svg";
import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../products";
const CheckoutWithId = (props) => {
  const { id } = useParams();
  console.log("id:", id);
  const queryParams = new URLSearchParams(window.location.search);
  const quantity = queryParams.get("quantity");

  const selectedProduct = PRODUCTS.find(
    (product) => product.id === parseInt(id)
  );
  console.log("selectedProduct:", selectedProduct);

  const totalPrice = selectedProduct.current_price * quantity;

  return (
    <>
      {/*     
    <!-- Start checkout page area --> */}
      <div className="checkout__page--area">
        <div className="container">
          <div className="checkout__page--inner d-flex">
            <div className="main checkout__mian">
              <header className="main__header checkout__mian--header mb-30">
                <h1 className="main__logo--title">
                  <Link className="logo logo__left mb-20" to="/">
                    <img
                      src={logo}
                      alt="logo"
                      width={"120px"}
                      height={"120px"}
                    />
                  </Link>
                </h1>
                <nav>
                  <ol className="breadcrumb checkout__breadcrumb d-flex">
                    <li className="breadcrumb__item breadcrumb__item--completed d-flex align-items-center">
                      <a className="breadcrumb__link" href="cart.html">
                        Cart
                      </a>
                      <svg
                        className="readcrumb__chevron-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17.007"
                        height="16.831"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="48"
                          d="M184 112l144 144-144 144"
                        ></path>
                      </svg>
                    </li>
                    <li className="breadcrumb__item breadcrumb__item--current d-flex align-items-center">
                      <a className="breadcrumb__link" href="cart.html">
                        Information
                      </a>
                      <svg
                        className="readcrumb__chevron-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17.007"
                        height="16.831"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="48"
                          d="M184 112l144 144-144 144"
                        ></path>
                      </svg>
                    </li>
                    <li className="breadcrumb__item breadcrumb__item--blank d-flex align-items-center">
                      <a className="breadcrumb__link" href="cart.html">
                        Shipping
                      </a>
                      <svg
                        className="readcrumb__chevron-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17.007"
                        height="16.831"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="48"
                          d="M184 112l144 144-144 144"
                        ></path>
                      </svg>
                    </li>
                    <li className="breadcrumb__item breadcrumb__item--blank">
                      <span className="breadcrumb__text current">Payment</span>
                    </li>
                  </ol>
                </nav>
              </header>
              <main className="main__content_wrapper">
                <form action="#">
                  <div className="checkout__content--step checkout__contact--information2 border-radius-5">
                    <div className="checkout__review d-flex justify-content-between align-items-center">
                      <div className="checkout__review--inner d-flex align-items-center">
                        <label className="checkout__review--label">
                          Contact
                        </label>
                        <span className="checkout__review--content">
                          info42@gmail.com
                        </span>
                      </div>
                      <div className="checkout__review--link">
                        <button
                          className="checkout__review--link__text"
                          type="button"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                    <div className="checkout__review d-flex justify-content-between align-items-center">
                      <div className="checkout__review--inner d-flex align-items-center">
                        <label className="checkout__review--label">
                          {" "}
                          Ship to
                        </label>
                        <span className="checkout__review--content">
                          {" "}
                          Dhaka, DHaka 1219, Bangladesh
                        </span>
                      </div>
                      <div className="checkout__review--link">
                        <button
                          className="checkout__review--link__text"
                          type="button"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                    <div className="checkout__review d-flex justify-content-between align-items-center">
                      <div className="checkout__review--inner d-flex align-items-center">
                        <label className="checkout__review--label">
                          {" "}
                          Method
                        </label>
                        <span className="checkout__review--content">
                          {" "}
                          Standard . <strong>$0.23</strong>
                        </span>
                      </div>
                      <div className="checkout__review--link">
                        <button
                          className="checkout__review--link__text"
                          type="button"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="checkout__content--step section__shipping--address">
                    <div className="section__header mb-25">
                      <h3 className="section__header--title">Payment</h3>
                      <p className="section__header--desc">
                        All transactions are secure and encrypted.
                      </p>
                    </div>
                    <div className="checkout__content--step__inner3 border-radius-5">
                      <div className="checkout__address--content__header d-flex align-items-center justify-content-between">
                        <span className="checkout__address--content__title">
                          Credit card
                        </span>
                        <span className="heckout__address--content__icon">
                          <img src={img1} alt="card" />
                        </span>
                      </div>
                      <div className="checkout__content--input__box--wrapper ">
                        <div className="row">
                          <div className="col-12 mb-12">
                            <div className="checkout__input--list position__relative">
                              <label>
                                <input
                                  className="checkout__input--field border-radius-5"
                                  placeholder="Card number"
                                  type="text"
                                />
                              </label>
                              <button
                                className="checkout__input--field__button"
                                type="button"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="15.51"
                                  height="15.443"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    d="M336 208v-95a80 80 0 00-160 0v95"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                  />
                                  <rect
                                    x="96"
                                    y="208"
                                    width="320"
                                    height="272"
                                    rx="48"
                                    ry="48"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="col-12 mb-12">
                            <div className="checkout__input--list">
                              <label>
                                <input
                                  className="checkout__input--field border-radius-5"
                                  placeholder="Name on card"
                                  type="text"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-12">
                            <div className="checkout__input--list">
                              <label>
                                <input
                                  className="checkout__input--field border-radius-5"
                                  placeholder="piration date (MM / YY)"
                                  type="text"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-12">
                            <div className="checkout__input--list position__relative">
                              <label>
                                <input
                                  className="checkout__input--field border-radius-5"
                                  placeholder="Security code"
                                  type="text"
                                />
                              </label>
                              <button
                                className="checkout__input--field__button"
                                type="button"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18.51"
                                  height="18.443"
                                  viewBox="0 0 512 512"
                                >
                                  <title>
                                    Help Circle - shared on themelock.com
                                  </title>
                                  <path
                                    d="M256 80a176 176 0 10176 176A176 176 0 00256 80z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-miterlimit="10"
                                    stroke-width="32"
                                  />
                                  <path
                                    d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    stroke-width="28"
                                  />
                                  <circle cx="250" cy="348" r="20" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="checkout__content--step section__shipping--address pt-10">
                    <div className="section__header mb-25">
                      <h3 className="section__header--title">
                        Billing address
                      </h3>
                      <p className="section__header--desc">
                        Select the address that matches your card or payment
                        method.
                      </p>
                    </div>
                    <div className="checkout__content--step__inner3 border-radius-5">
                      <div className="checkout__address--content__header">
                        <div className="shipping__contact--box__list">
                          <div className="shipping__radio--input">
                            <input
                              className="shipping__radio--input__field"
                              id="radiobox"
                              name="checkmethod"
                              type="radio"
                            />
                          </div>
                          <label
                            className="shipping__radio--label"
                            for="radiobox"
                          >
                            <span className="shipping__radio--label__primary">
                              Same as shipping address
                            </span>
                          </label>
                        </div>
                        <div className="shipping__contact--box__list">
                          <div className="shipping__radio--input">
                            <input
                              className="shipping__radio--input__field"
                              id="radiobox2"
                              name="checkmethod"
                              type="radio"
                            />
                          </div>
                          <label
                            className="shipping__radio--label"
                            for="radiobox2"
                          >
                            <span className="shipping__radio--label__primary">
                              Use a different billing address
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="checkout__content--input__box--wrapper ">
                        <div className="row">
                          <div className="col-lg-6 mb-12">
                            <div className="checkout__input--list ">
                              <label>
                                <input
                                  className="checkout__input--field border-radius-5"
                                  placeholder="First name (optional)"
                                  type="text"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-12">
                            <div className="checkout__input--list">
                              <label>
                                <input
                                  className="checkout__input--field border-radius-5"
                                  placeholder="Last name"
                                  type="text"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-12 mb-12">
                            <div className="checkout__input--list">
                              <label>
                                <input
                                  className="checkout__input--field border-radius-5"
                                  placeholder="Address1"
                                  type="text"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-12 mb-12">
                            <div className="checkout__input--list">
                              <label>
                                <input
                                  className="checkout__input--field border-radius-5"
                                  placeholder="Apartment, suite, etc. (optional)"
                                  type="text"
                                />
                              </label>{" "}
                            </div>
                          </div>
                          <div className="col-12 mb-12">
                            <div className="checkout__input--list">
                              <label>
                                <input
                                  className="checkout__input--field border-radius-5"
                                  placeholder="City"
                                  type="text"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-12">
                            <div className="checkout__input--list checkout__input--select select">
                              <label
                                className="checkout__select--label"
                                for="country"
                              >
                                Country/region
                              </label>
                              <select
                                className="checkout__input--select__field border-radius-5"
                                id="country"
                              >
                                <option value="1">India</option>
                                <option value="2">United States</option>
                                <option value="3">Netherlands</option>
                                <option value="4">Afghanistan</option>
                                <option value="5">Islands</option>
                                <option value="6">Albania</option>
                                <option value="7">Antigua Barbuda</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-12">
                            <div className="checkout__input--list">
                              <label>
                                <input
                                  className="checkout__input--field border-radius-5"
                                  placeholder="Postal code"
                                  type="text"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="checkout__content--step__footer d-flex align-items-center">
                    <a
                      className="continue__shipping--btn primary__btn border-radius-5"
                      href="checkout-3.html"
                    >
                      Pay now
                    </a>
                    <a className="previous__link--content" href="shop.html">
                      Return to shipping
                    </a>
                  </div>
                </form>
              </main>

              <footer className="main__footer checkout__footer">
                <p className="copyright__content">
                  Copyright © 2022{" "}
                  <a
                    className="copyright__content--link text__primary"
                    href="index.html"
                  >
                    Suruchi
                  </a>{" "}
                  . All Rights Reserved.Design By Suruchi
                </p>
              </footer>
            </div>
            <aside className="checkout__sidebar sidebar">
              <div className="cart__table checkout__product--table">
                <table className="cart__table--inner">
                  <tbody className="cart__table--body">
                    <tr className="cart__table--body__items">
                      <td className="cart__table--body__list">
                        <div className="product__image two  d-flex align-items-center">
                          <div className="product__thumbnail border-radius-5">
                            <a href="product-details.html">
                              <img
                                className="border-radius-5"
                                src={selectedProduct.img}
                                alt="cart-product"
                              />
                            </a>
                            <span className="product__thumbnail--quantity">
                              {quantity}
                            </span>
                          </div>
                          <div className="product__description">
                            <h3 className="product__description--name h4">
                              <a href="product-details.html">
                                {selectedProduct.product_title}
                              </a>
                            </h3>
                          </div>
                        </div>
                      </td>
                      <td className="cart__table--body__list">
                        <span className="cart__price">
                          ${totalPrice.toFixed(2)}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="checkout__discount--code">
                <form className="d-flex" action="#">
                  <label>
                    <input
                      className="checkout__discount--code__input--field border-radius-5"
                      placeholder="Gift card or discount code"
                      type="text"
                    />
                  </label>
                  <button
                    className="checkout__discount--code__btn primary__btn border-radius-5"
                    type="submit"
                  >
                    Apply
                  </button>
                </form>
              </div>
              <div className="checkout__total">
                <table className="checkout__total--table">
                  <tbody className="checkout__total--body">
                    <tr className="checkout__total--items">
                      <td className="checkout__total--title text-left">
                        Subtotal{" "}
                      </td>
                      <td className="checkout__total--amount text-right">
                        $860.00
                      </td>
                    </tr>
                    <tr className="checkout__total--items">
                      <td className="checkout__total--title text-left">
                        Shipping
                      </td>
                      <td className="checkout__total--calculated__text text-right">
                        Calculated at next step
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="checkout__total--footer">
                    <tr className="checkout__total--footer__items">
                      <td className="checkout__total--footer__title checkout__total--footer__list text-left">
                        Total{" "}
                      </td>
                      <td className="checkout__total--footer__amount checkout__total--footer__list text-right">
                        ${totalPrice.toFixed(2)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </aside>
          </div>
        </div>
      </div>
      {/* <!-- End checkout page area --> */}
    </>
  );
};

export default CheckoutWithId;
