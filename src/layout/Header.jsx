import React, { useContext } from "react";
import img1 from "../assets/img/icon/bus.png";

import img2 from "../assets/img/icon/email.png";
import img3 from "../assets/img/icon/language-icon.png";
import img4 from "../assets/img/icon/usd-icon.png";
import img5 from "../assets/img/icon/lamp.png";
import logo from "../assets/img/logo/nav-logo.png";
import product1 from "../assets/img/product/product1.png";
import product2 from "../assets/img/product/product2.png";
import { Link, Outlet } from "react-router-dom";
import Shipping from "./shipping";
import Footer from "./footer";
import { CartContext } from '../cartContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <header className="header__section">
        <div className="header__topbar bg__secondary" >
          <div className="container-fluid">
            <div className="header__topbar--inner d-flex align-items-center justify-content-between">
              <div className="header__shipping">
                <ul className="header__shipping--wrapper d-flex">
                  <li className="header__shipping--text text-white">
                    Welcome to Devanty Couture online Store
                  </li>
                
                  <li className="header__shipping--text text-white d-sm-2-none">
                    <img
                      className="header__shipping--text__icon"
                      src={img2}
                      alt="email-icon"
                    />
                    <a
                      className="header__shipping--text__link"
                      href="mailto:demo@gmail.com"
                    >
                      demo@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="language__currency d-none d-lg-block">
                <ul className="d-flex align-items-center">
                <li className="header__shipping--text text-white d-sm-2-none">
                    <img
                      className="header__shipping--text__icon"
                      src={img1}
                      alt="bus-icon"
                    />{" "}
                    Track Your Order
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="main__header header__sticky">
          <div className="container-fluid">
            <div className="main__header--inner position__relative d-flex justify-content-between align-items-center">
              <div className="offcanvas__header--menu__open ">
                <a
                  className="offcanvas__header--menu__open--btn"
                  href="javascript:void(0)"
                  data-offcanvas
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon offcanvas__header--menu__open--svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="32"
                      d="M80 160h352M80 256h352M80 352h352"
                    />
                  </svg>
                  <span className="visually-hidden">Menu Open</span>
                </a>
              </div>
              <div className="main__logo">
                <Link className="main__logo--link" to="/">
                  <img className="main__logo--img" src={logo} alt="logo-img" width={"200px"} height={"200px"} />
                </Link>
              </div>
              <div className="header__search--widget header__sticky--none d-none d-lg-block">
                <form className="d-flex header__search--form" action="#">
                  <div className="header__select--categories select">
                    <select className="header__select--inner">
                      <option selected value="1">
                        All Categories
                      </option>
                      <option value="2">Accessories</option>
                      <option value="3">Accessories & More</option>
                      <option value="4">Camera & Video </option>
                      <option value="5">Butters & Eggs </option>
                    </select>
                  </div>
                  <div className="header__search--box">
                    <label>
                      <input
                        className="header__search--input"
                        placeholder="Keyword here..."
                        type="text"
                      />
                    </label>
                    <button
                      className="header__search--button  text-white"
                      type="submit"
                      aria-label="search button"
                    
                    >
                      <svg
                        className="header__search--button__svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="27.51"
                        height="26.443"
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
                    </button>
                  </div>
                </form>
              </div>
              <div className="header__account header__sticky--none">
                <ul className="d-flex">
                  <li className="header__account--items">
                    <a className="header__account--btn" href="my-account.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26.51"
                        height="23.443"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                        />
                        <path
                          d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                          stroke-width="32"
                        />
                      </svg>
                      <span className="header__account--btn__text">
                        My Account
                      </span>
                    </a>
                  </li>
                 
                  <Link className="header__account--items" to="cart">
                    <a
                      className="header__account--btn minicart__open--btn"
                      href="javascript:void(0)"
                      data-offcanvas
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26.51"
                        height="23.443"
                        viewBox="0 0 14.706 13.534"
                      >
                        <g transform="translate(0 0)">
                          <g>
                            <path
                              data-name="Path 16787"
                              d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                              transform="translate(0 -463.248)"
                              fill="currentColor"
                            />
                            <path
                              data-name="Path 16788"
                              d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                              transform="translate(-1.191 -466.622)"
                              fill="currentColor"
                            />
                            <path
                              data-name="Path 16789"
                              d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                              transform="translate(-2.875 -466.622)"
                              fill="currentColor"
                            />
                          </g>
                        </g>
                      </svg>
                      <span className="header__account--btn__text">
                        {" "}
                        My cart
                      </span>
                      <span className="items__count">{cartItems.length}</span>
                    </a>
                  </Link>
                </ul>
              </div>
              <div className="header__menu d-none header__sticky--block d-lg-block">
                <nav className="header__menu--navigation">
                  <ul className="d-flex">
                    <li className="header__menu--items style2">
                      <Link className="header__menu--link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="header__menu--items mega__menu--items style2">
                      <Link className="header__menu--link" to="shop">
                        Shop
                      </Link>
                    </li>
                    <li className="header__menu--items style2">
                      <Link className="header__menu--link" to="about">
                        About US
                      </Link>
                    </li>

                    <li className="header__menu--items style2">
                      <Link className="header__menu--link" href="contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header__account header__account2 header__sticky--block">
                <ul className="d-flex">
                  <li className="header__account--items header__account2--items  header__account--search__items d-none d-lg-block">
                    <a
                      className="header__account--btn search__open--btn"
                      href="javascript:void(0)"
                      data-offcanvas
                    >
                      <svg
                        className="header__search--button__svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="26.51"
                        height="23.443"
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
                      <span className="visually-hidden">Search</span>
                    </a>
                  </li>
                  <li className="header__account--items header__account2--items">
                    <a className="header__account--btn" href="my-account.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26.51"
                        height="23.443"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                        />
                        <path
                          d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                          stroke-width="32"
                        />
                      </svg>
                      <span className="visually-hidden">My Account</span>
                    </a>
                  </li>
                  <li className="header__account--items header__account2--items d-none d-lg-block">
                    <a className="header__account--btn" href="wishlist.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28.51"
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
                      <span className="items__count  wishlist style2">02</span>
                    </a>
                  </li>
                  <li className="header__account--items header__account2--items">
                    <a
                      className="header__account--btn minicart__open--btn"
                      href="javascript:void(0)"
                      data-offcanvas
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26.51"
                        height="23.443"
                        viewBox="0 0 14.706 13.534"
                      >
                        <g transform="translate(0 0)">
                          <g>
                            <path
                              data-name="Path 16787"
                              d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                              transform="translate(0 -463.248)"
                              fill="currentColor"
                            />
                            <path
                              data-name="Path 16788"
                              d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                              transform="translate(-1.191 -466.622)"
                              fill="currentColor"
                            />
                            <path
                              data-name="Path 16789"
                              d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                              transform="translate(-2.875 -466.622)"
                              fill="currentColor"
                            />
                          </g>
                        </g>
                      </svg>
                      <span className="items__count style2">02</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header__bottom">
          <div className="container-fluid">
            <div className="header__bottom--inner position__relative d-none d-lg-flex justify-content-between align-items-center">
              <div className="header__menu">
                <nav className="header__menu--navigation">
                  <ul className="d-flex">
                    <li className="header__menu--items">
                      <Link className="header__menu--link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="header__menu--items mega__menu--items">
                      <Link className="header__menu--link" to="shop">
                        Shop
                      </Link>
                    </li>
                    <li className="header__menu--items">
                      <Link className="header__menu--link" to="about">
                        About US{" "}
                      </Link>
                    </li>

                    <li className="header__menu--items">
                      <Link className="header__menu--link" to="contact">
                        Contact{" "}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <p className="header__discount--text">
                <img
                  className="header__discount--icon__img"
                  src={img5}
                  alt="lamp-img"
                />{" "}
                Special up to 60% Off all item
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Start Offcanvas header menu --> */}
        <div className="offcanvas__header">
          <div className="offcanvas__inner">
            <div className="offcanvas__logo">
              <a className="offcanvas__logo_link" href="index.html">
                <img src={logo} alt="Grocee Logo" width="158" height="36" />
              </a>
              <button className="offcanvas__close--btn" data-offcanvas>
                close
              </button>
            </div>
            <nav className="offcanvas__menu">
              <ul className="offcanvas__menu_ul">
                <li className="offcanvas__menu_li">
                  <a className="offcanvas__menu_item" to="/">
                    Home
                  </a>
                </li>
                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" to="shop">
                    Shop
                  </Link>
                </li>

                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" to="about">
                    About
                  </Link>
                </li>
                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" to="contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="offcanvas__account--items">
                <a
                  className="offcanvas__account--items__btn d-flex align-items-center"
                  href="login.html"
                >
                  <span className="offcanvas__account--items__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.51"
                      height="19.443"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      />
                      <path
                        d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="32"
                      />
                    </svg>
                  </span>
                  <span className="offcanvas__account--items__label">
                    Login / Register
                  </span>
                </a>
              </div>
              <div className="language__currency">
                <ul className="d-flex align-items-center">
                  <li className="language__currency--list">
                    <a className="offcanvas__language--switcher" href="#">
                      <img
                        className="language__switcher--icon__img"
                        src={img3}
                        alt="currency"
                      />
                      <span>English</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11.797"
                        height="9.05"
                        viewBox="0 0 9.797 6.05"
                      >
                        <path
                          d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                          transform="translate(-6 -8.59)"
                          fill="currentColor"
                          opacity="0.7"
                        />
                      </svg>
                    </a>
                    <div className="offcanvas__dropdown--language">
                      <ul>
                        <li className="language__items">
                          <a className="language__text" href="#">
                            France
                          </a>
                        </li>
                        <li className="language__items">
                          <a className="language__text" href="#">
                            Russia
                          </a>
                        </li>
                        <li className="language__items">
                          <a className="language__text" href="#">
                            Spanish
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="language__currency--list">
                    <a className="offcanvas__account--currency__menu" href="#">
                      <img src={img4} alt="currency" />
                      <span>$ US Dollar</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11.797"
                        height="9.05"
                        viewBox="0 0 9.797 6.05"
                      >
                        <path
                          d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                          transform="translate(-6 -8.59)"
                          fill="currentColor"
                          opacity="0.7"
                        />
                      </svg>
                    </a>
                    <div className="offcanvas__account--currency__submenu">
                      <ul>
                        <li className="currency__items">
                          <a className="currency__text" href="#">
                            CAD
                          </a>
                        </li>
                        <li className="currency__items">
                          <a className="currency__text" href="#">
                            CNY
                          </a>
                        </li>
                        <li className="currency__items">
                          <a className="currency__text" href="#">
                            EUR
                          </a>
                        </li>
                        <li className="currency__items">
                          <a className="currency__text" href="#">
                            GBP
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* <!-- End Offcanvas header menu --> */}

        {/* <!-- Start Offcanvas stikcy toolbar --> */}
        <div className="offcanvas__stikcy--toolbar">
          <ul className="d-flex justify-content-between">
            <li className="offcanvas__stikcy--toolbar__list">
              <a className="offcanvas__stikcy--toolbar__btn" href="index.html">
                <span className="offcanvas__stikcy--toolbar__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="21.51"
                    height="21.443"
                    viewBox="0 0 22 17"
                  >
                    <path
                      fill="currentColor"
                      d="M20.9141 7.93359c.1406.11719.2109.26953.2109.45703 0 .14063-.0469.25782-.1406.35157l-.3516.42187c-.1172.14063-.2578.21094-.4219.21094-.1406 0-.2578-.04688-.3515-.14062l-.9844-.77344V15c0 .3047-.1172.5625-.3516.7734-.2109.2344-.4687.3516-.7734.3516h-4.5c-.3047 0-.5742-.1172-.8086-.3516-.2109-.2109-.3164-.4687-.3164-.7734v-3.6562h-2.25V15c0 .3047-.11719.5625-.35156.7734-.21094.2344-.46875.3516-.77344.3516h-4.5c-.30469 0-.57422-.1172-.80859-.3516-.21094-.2109-.31641-.4687-.31641-.7734V8.46094l-.94922.77344c-.11719.09374-.24609.14062-.38672.14062-.16406 0-.30468-.07031-.42187-.21094l-.35157-.42187C.921875 8.625.875 8.50781.875 8.39062c0-.1875.070312-.33984.21094-.45703L9.73438.832031C10.1094.527344 10.5312.375 11 .375s.8906.152344 1.2656.457031l8.6485 7.101559zm-3.7266 6.50391V7.05469L11 1.99219l-6.1875 5.0625v7.38281h3.375v-3.6563c0-.3046.10547-.5624.31641-.7734.23437-.23436.5039-.35155.80859-.35155h3.375c.3047 0 .5625.11719.7734.35155.2344.211.3516.4688.3516.7734v3.6563h3.375z"
                    ></path>
                  </svg>
                </span>
                <span className="offcanvas__stikcy--toolbar__label">Home</span>
              </a>
            </li>
            <li className="offcanvas__stikcy--toolbar__list">
              <a className="offcanvas__stikcy--toolbar__btn" href="shop.html">
                <span className="offcanvas__stikcy--toolbar__icon">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.51"
                    height="17.443"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-16 48v152H248V80zm-200 0v152H48V80zM48 432V280h152v152zm200 0V280h152v152z"></path>
                  </svg>
                </span>
                <span className="offcanvas__stikcy--toolbar__label">Shop</span>
              </a>
            </li>
            <li className="offcanvas__stikcy--toolbar__list ">
              <a
                className="offcanvas__stikcy--toolbar__btn search__open--btn"
                href="javascript:void(0)"
                data-offcanvas
              >
                <span className="offcanvas__stikcy--toolbar__icon">
                  <svg
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
                </span>
                <span className="offcanvas__stikcy--toolbar__label">
                  Search
                </span>
              </a>
            </li>
            <li className="offcanvas__stikcy--toolbar__list">
              <a
                className="offcanvas__stikcy--toolbar__btn minicart__open--btn"
                href="javascript:void(0)"
                data-offcanvas
              >
                <span className="offcanvas__stikcy--toolbar__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.51"
                    height="15.443"
                    viewBox="0 0 18.51 15.443"
                  >
                    <path
                      d="M79.963,138.379l-13.358,0-.56-1.927a.871.871,0,0,0-.6-.592l-1.961-.529a.91.91,0,0,0-.226-.03.864.864,0,0,0-.226,1.7l1.491.4,3.026,10.919a1.277,1.277,0,1,0,1.844,1.144.358.358,0,0,0,0-.049h6.163c0,.017,0,.034,0,.049a1.277,1.277,0,1,0,1.434-1.267c-1.531-.247-7.783-.55-7.783-.55l-.205-.8h7.8a.9.9,0,0,0,.863-.651l1.688-5.943h.62a.936.936,0,1,0,0-1.872Zm-9.934,6.474H68.568c-.04,0-.1.008-.125-.085-.034-.118-.082-.283-.082-.283l-1.146-4.037a.061.061,0,0,1,.011-.057.064.064,0,0,1,.053-.025h1.777a.064.064,0,0,1,.063.051l.969,4.34,0,.013a.058.058,0,0,1,0,.019A.063.063,0,0,1,70.03,144.853Zm3.731-4.41-.789,4.359a.066.066,0,0,1-.063.051h-1.1a.064.064,0,0,1-.063-.051l-.789-4.357a.064.064,0,0,1,.013-.055.07.07,0,0,1,.051-.025H73.7a.06.06,0,0,1,.051.025A.064.064,0,0,1,73.76,140.443Zm3.737,0L76.26,144.8a.068.068,0,0,1-.063.049H74.684a.063.063,0,0,1-.051-.025.064.064,0,0,1-.013-.055l.973-4.357a.066.066,0,0,1,.063-.051h1.777a.071.071,0,0,1,.053.025A.076.076,0,0,1,77.5,140.448Z"
                      transform="translate(-62.393 -135.3)"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="offcanvas__stikcy--toolbar__label">Cart</span>
                <span className="items__count">3</span>
              </a>
            </li>
            {/* <li className="offcanvas__stikcy--toolbar__list">
              <a
                className="offcanvas__stikcy--toolbar__btn"
                href="wishlist.html"
              >
                <span className="offcanvas__stikcy--toolbar__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.541"
                    height="15.557"
                    viewBox="0 0 18.541 15.557"
                  >
                    <path
                      d="M71.775,135.51a5.153,5.153,0,0,1,1.267-1.524,4.986,4.986,0,0,1,6.584.358,4.728,4.728,0,0,1,1.174,4.914,10.458,10.458,0,0,1-2.132,3.808,22.591,22.591,0,0,1-5.4,4.558c-.445.282-.9.549-1.356.812a.306.306,0,0,1-.254.013,25.491,25.491,0,0,1-6.279-4.8,11.648,11.648,0,0,1-2.52-4.009,4.957,4.957,0,0,1,.028-3.787,4.629,4.629,0,0,1,3.744-2.863,4.782,4.782,0,0,1,5.086,2.447c.013.019.025.034.057.076Z"
                      transform="translate(-62.498 -132.915)"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="offcanvas__stikcy--toolbar__label">
                  Wishlist
                </span>
                <span className="items__count">3</span>
              </a>
            </li> */}
          </ul>
        </div>
        {/* <!-- End Offcanvas stikcy toolbar --> */}

        {/* <!-- Start offCanvas minicart --> */}
        <div className="offCanvas__minicart">
          <div className="minicart__header ">
            <div className="minicart__header--top d-flex justify-content-between align-items-center">
              <h2 className="minicart__title h3"> Shopping Cart</h2>
              <button
                className="minicart__close--btn"
                aria-label="minicart close button"
                data-offcanvas
              >
                <svg
                  className="minicart__close--icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M368 368L144 144M368 144L144 368"
                  />
                </svg>
              </button>
            </div>
            <p className="minicart__header--desc">
              Clothing and fashion products are limited
            </p>
          </div>
          <div className="minicart__product">
            <div className="minicart__product--items d-flex">
              <div className="minicart__thumb">
                <a href="product-details.html">
                  <img src={product1} alt="prduct-img" />
                </a>
              </div>
              <div className="minicart__text">
                <h3 className="minicart__subtitle h4">
                  <a href="product-details.html">Oversize Cotton Dress</a>
                </h3>
                <span className="color__variant">
                  <b>Color:</b> Beige
                </span>
                <div className="minicart__price">
                  <span className="current__price">$125.00</span>
                  <span className="old__price">$140.00</span>
                </div>
                <div className="minicart__text--footer d-flex align-items-center">
                  <div className="quantity__box minicart__quantity">
                    <button
                      type="button"
                      className="quantity__value decrease"
                      aria-label="quantity value"
                      value="Decrease Value"
                    >
                      -
                    </button>
                    <label>
                      <input
                        type="number"
                        className="quantity__number"
                        value="1"
                        data-counter
                      />
                    </label>
                    <button
                      type="button"
                      className="quantity__value increase"
                      value="Increase Value"
                    >
                      +
                    </button>
                  </div>
                  <button className="minicart__product--remove">Remove</button>
                </div>
              </div>
            </div>
            <div className="minicart__product--items d-flex">
              <div className="minicart__thumb">
                <a href="product-details.html">
                  <img src={product2} alt="prduct-img" />
                </a>
              </div>
              <div className="minicart__text">
                <h3 className="minicart__subtitle h4">
                  <a href="product-details.html">Boxy Denim Jacket</a>
                </h3>
                <span className="color__variant">
                  <b>Color:</b> Green
                </span>
                <div className="minicart__price">
                  <span className="current__price">$115.00</span>
                  <span className="old__price">$130.00</span>
                </div>
                <div className="minicart__text--footer d-flex align-items-center">
                  <div className="quantity__box minicart__quantity">
                    <button
                      type="button"
                      className="quantity__value decrease"
                      aria-label="quantity value"
                      value="Decrease Value"
                    >
                      -
                    </button>
                    <label>
                      <input
                        type="number"
                        className="quantity__number"
                        value="1"
                        data-counter
                      />
                    </label>
                    <button
                      type="button"
                      className="quantity__value increase"
                      aria-label="quantity value"
                      value="Increase Value"
                    >
                      +
                    </button>
                  </div>
                  <button className="minicart__product--remove">Remove</button>
                </div>
              </div>
            </div>
          </div>
          <div className="minicart__amount">
            <div className="minicart__amount_list d-flex justify-content-between">
              <span>Sub Total:</span>
              <span>
                <b>$240.00</b>
              </span>
            </div>
            <div className="minicart__amount_list d-flex justify-content-between">
              <span>Total:</span>
              <span>
                <b>$240.00</b>
              </span>
            </div>
          </div>
          <div className="minicart__conditions text-center">
            <input
              className="minicart__conditions--input"
              id="accept"
              type="checkbox"
            />
            <label className="minicart__conditions--label" for="accept">
              I agree with the{" "}
              <a
                className="minicart__conditions--link"
                href="privacy-policy.html"
              >
                Privacy and Policy
              </a>
            </label>
          </div>
          <div className="minicart__button d-flex justify-content-center">
            <a className="primary__btn minicart__button--link" href="cart.html">
              View cart
            </a>
            <a
              className="primary__btn minicart__button--link"
              href="checkout.html"
            >
              Checkout
            </a>
          </div>
        </div>
        {/* <!-- End offCanvas minicart --> */}

        {/* <!-- Start serch box area --> */}
        <div className="predictive__search--box ">
          <div className="predictive__search--box__inner">
            <h2 className="predictive__search--title">Search Products</h2>
            <form className="predictive__search--form" action="#">
              <label>
                <input
                  className="predictive__search--input"
                  placeholder="Search Here"
                  type="text"
                />
              </label>
              <button
                className="predictive__search--button"
                aria-label="search button"
                type="submit"
              >
                <svg
                  className="header__search--button__svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30.51"
                  height="25.443"
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
                </svg>{" "}
              </button>
            </form>
          </div>
          <button
            className="predictive__search--close__btn"
            aria-label="search close button"
            data-offcanvas
          >
            <svg
              className="predictive__search--close__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="40.51"
              height="30.443"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </button>
        </div>
        {/* <!-- End serch box area --> */}
      </header>

      <main>
        <Outlet/>
      </main>

      <Shipping />
      <Footer />
    </>
  );
};

export default Header;
