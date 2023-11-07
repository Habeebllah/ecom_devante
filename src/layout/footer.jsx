import React from "react";

import { AiFillFacebook } from "react-icons/ai";
import vector from "../assets/img/logo/Vector.png"

import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import logo from "../assets/img/logo/logo.png";
import img7 from "..//assets/img/other/payment-visa-card.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        className="footer__section  color-scheme-2"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="container-fluid">
          <div className="main__footer d-flex justify-content-between">
            <div className="footer__widget footer__widget--width">
              <h2 className="footer__widget--title text-ofwhite h3">
                About Us
                {/* <button
                  className="footer__widget--button"
                  aria-label="footer widget button"
                >
                  <svg
                    className="footer__widget--title__arrowdown--icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.355"
                    height="8.394"
                    viewBox="0 0 10.355 6.394"
                  >
                    <path
                      d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                      transform="translate(-6 -8.59)"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button> */}
              </h2>
              <div className="footer__widget--inner">
                <p className="footer__widget--desc text-ofwhite mb-20 footer-wid">
                  Devanti Couture is the home of fashion and accessories store
                  in Nigeria. We deliver quality accessories and ready to wear
                  dresses that fits your needs.
                </p>
                <div>
                  <img src={logo} alt="logo" />
                </div>
              </div>
            </div>
            <div className="footer__widget">
              <h2 className="footer__widget--title text-ofwhite h3">
                Categories
              </h2>

              <ul className="footer__widget--menu footer__widget--inner">
                <li className="footer__widget--menu__list">
                  <a className="footer__widget--menu__text" href="#">
                    Beads
                  </a>
                </li>
                <li className="footer__widget--menu__list">
                  <a className="footer__widget--menu__text" href="#">
                    Bracelets
                  </a>
                </li>
                <li className="footer__widget--menu__list">
                  <a className="footer__widget--menu__text" href="">
                    Earrings
                  </a>
                </li>
                <li className="footer__widget--menu__list">
                  <a className="footer__widget--menu__text" href="">
                    Jewelry
                  </a>
                </li>
                <li className="footer__widget--menu__list">
                  <a className="footer__widget--menu__text" href="">
                    Dresses
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__widget">
              <h2 className="footer__widget--title text-ofwhite h3">Company</h2>

              <ul className="footer__widget--menu footer__widget--inner">
                <li className="footer__widget--menu__list">
                  <Link className="footer__widget--menu__text" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="footer__widget--menu__list">
                  <Link className="footer__widget--menu__text" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li className="footer__widget--menu__list">
                  <Link className="footer__widget--menu__text" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="footer__widget--menu__list">
                  <Link
                    className="footer__widget--menu__text"
                    to="privacy/policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="footer__widget--menu__list">
                  <Link
                    className="footer__widget--menu__text"
                    to="terms-and-condition"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__widget">
              <h2 className="footer__widget--title text-ofwhite h3">
                My Account
              </h2>

              <ul className="footer__widget--menu footer__widget--inner">
                <li className="footer__widget--menu__list">
                  <Link className="footer__widget--menu__text" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="footer__widget--menu__list">
                  <Link
                    className="footer__widget--menu__text"
                    to="/track-your-order"
                  >
                    Track Order
                  </Link>
                </li>
                <li className="footer__widget--menu__list">
                  <Link className="footer__widget--menu__text" to="/cart">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__widget footer__widget--width">
              <h2 className="footer__widget--title text-ofwhite h3">
                Newsletter
                <button
                  className="footer__widget--button"
                  aria-label="footer widget button"
                >
                  <svg
                    className="footer__widget--title__arrowdown--icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.355"
                    height="8.394"
                    viewBox="0 0 10.355 6.394"
                  >
                    <path
                      d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                      transform="translate(-6 -8.59)"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div className="footer__widget--inner">
                <p className="footer__widget--desc text-ofwhite m-0">
                  Fill their seed open meat. Sea you <br /> great Saw image stl
                </p>
                <div className="newsletter__subscribe">
                  <form className="newsletter__subscribe--form" action="#">
                    <label>
                      <input
                        className="newsletter__subscribe--input"
                        placeholder="Email Address"
                        type="email"
                      />
                    </label>
                    <button
                      className="newsletter__subscribe--button"
                      type="submit"
                      style={{ backgroundColor: "#FFAF06 " }}
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom d-flex justify-content-between align-items-center">

            <p className="copyright__content text-ofwhite m-0" style={{display:"flex" , alignItems:"center" , gap:"7px"}}>
            <img src={vector} alt=""  />   2023 Devanti Couture. All rights reserved.
            </p>

            <div className="footer__widget--inner footer__social--style3">
              <ul
                className="social__shear"
                style={{ position: "relative", top: "10px" }}
              >
                {/* <li className="social__shear--list">
                  <a
                    className="social__shear--list__icon"
                    target="_blank"
                    href="https://x.com/Medmallp"
                  >
                    <BsTwitter color="white" fontSize="22px" />
                  </a>
                </li> */}
                <li className="social__shear--list">
                  <a
                    className="social__shear--list__icon"
                    target="_blank"
                    href="https://wa.me/message/L7X6WRVH3WAVP1"
                  >
                    <BsWhatsapp color="white" fontSize="22px" />
                  </a>
                </li>
                <li className="social__shear--list">
                  <a
                    className="social__shear--list__icon"
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100054852456392&mibextid=LQQJ4d"
                  >
                    <AiFillFacebook color="white" fontSize="22px" />
                  </a>
                </li>
                {/* <li className="social__shear--list">
                  <a
                    className="social__shear--list__icon"
                    target="_blank"
                    href="https://www.linkedin.com/company/medmallpharmacy/"
                  >
                    <BsLinkedin color="white" fontSize="22px" />
                  </a>
                </li> */}
                <li className="social__shear--list">
                  <a
                    className="social__shear--list__icon"
                    target="_blank"
                    href="https://instagram.com/devantijewellery?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"
                  >
                    <BsInstagram color="white" fontSize="22px" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__payment text-right">
              <p className="copyright__content text-ofwhite m-0">
                By Vaticore Technologies
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
