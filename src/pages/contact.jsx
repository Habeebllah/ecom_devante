import React from "react";
// import img1 from "../assets/img/icon/bus.png";

// import img2 from "../assets/img/icon/email.png";
// import img3 from "../assets/img/icon/language-icon.png";
// import img4 from "../assets/img/icon/usd-icon.png";
// import img5 from "../assets/img/icon/lamp.png";
// import logo from "../assets/img/logo/nav-log.png";
// import product1 from "../assets/img/product/product1.png";
// import product2 from "../assets/img/product/product2.png";
// import img16 from "../assets/img/other/shipping1.png";
// import img17 from "../assets/img/other/shipping2.png";
// import img18 from "../assets/img/other/shipping3.png";
// import img19 from "../assets/img/other/shipping4.png";

const Contact = () => {
  return (
    <>
      <main class="main__content_wrapper">
        {/* <!-- Start contact section --> */}
        <section className="contact__section section--padding">
          <div className="container">
            <div className="section__heading text-center mb-40">
              <h2 className="section__heading--maintitle">Get In Touch</h2>
            </div>
            <div className="main__contact--area position__relative">
              <div className="contact__form">
                <h3 className="contact__form--title mb-40">Contact Me</h3>
                <form className="contact__form--inner" action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="contact__form--list mb-20">
                        <label className="contact__form--label" for="input1">
                          First Name{" "}
                          <span className="contact__form--label__star">*</span>
                        </label>
                        <input
                          className="contact__form--input"
                          name="firstname"
                          id="input1"
                          placeholder="Your First Name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="contact__form--list mb-20">
                        <label className="contact__form--label" for="input2">
                          Last Name{" "}
                          <span className="contact__form--label__star">*</span>
                        </label>
                        <input
                          className="contact__form--input"
                          name="lastname"
                          id="input2"
                          placeholder="Your Last Name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="contact__form--list mb-20">
                        <label className="contact__form--label" for="input3">
                          Phone Number{" "}
                          <span className="contact__form--label__star">*</span>
                        </label>
                        <input
                          className="contact__form--input"
                          name="number"
                          id="input3"
                          placeholder="Phone number"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="contact__form--list mb-20">
                        <label className="contact__form--label" for="input4">
                          Email{" "}
                          <span className="contact__form--label__star">*</span>
                        </label>
                        <input
                          className="contact__form--input"
                          name="email"
                          id="input4"
                          placeholder="Email"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contact__form--list mb-15">
                        <label className="contact__form--label" for="input5">
                          Write Your Message{" "}
                          <span className="contact__form--label__star">*</span>
                        </label>
                        <textarea
                          className="contact__form--textarea"
                          name="message"
                          id="input5"
                          placeholder="Write Your Message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button
                    className="contact__form--btn primary__btn"
                    type="submit"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
              <div className="contact__info border-radius-5">
                <div className="contact__info--items">
                  <h3 className="contact__info--content__title text-white mb-15">
                    Contact Us
                  </h3>
                  <div className="contact__info--items__inner d-flex">
                    <div className="contact__info--icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31.568"
                        height="31.128"
                        viewBox="0 0 31.568 31.128"
                      >
                        <path
                          id="ic_phone_forwarded_24px"
                          d="M26.676,16.564l7.892-7.782L26.676,1V5.669H20.362v6.226h6.314Zm3.157,7a18.162,18.162,0,0,1-5.635-.887,1.627,1.627,0,0,0-1.61.374l-3.472,3.424a23.585,23.585,0,0,1-10.4-10.257l3.472-3.44a1.48,1.48,0,0,0,.395-1.556,17.457,17.457,0,0,1-.9-5.556A1.572,1.572,0,0,0,10.1,4.113H4.578A1.572,1.572,0,0,0,3,5.669,26.645,26.645,0,0,0,29.832,32.128a1.572,1.572,0,0,0,1.578-1.556V25.124A1.572,1.572,0,0,0,29.832,23.568Z"
                          transform="translate(-3 -1)"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="contact__info--content">
                      <p className="contact__info--content__desc text-white">
                        <a href="tel:+01234-567890">07038151697</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact__info--items">
                  <h3 className="contact__info--content__title text-white mb-15">
                    Email Address
                  </h3>
                  <div className="contact__info--items__inner d-flex">
                    <div className="contact__info--icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31.57"
                        height="31.13"
                        viewBox="0 0 31.57 31.13"
                      >
                        <path
                          id="ic_email_24px"
                          d="M30.413,4H5.157C3.421,4,2.016,5.751,2.016,7.891L2,31.239c0,2.14,1.421,3.891,3.157,3.891H30.413c1.736,0,3.157-1.751,3.157-3.891V7.891C33.57,5.751,32.149,4,30.413,4Zm0,7.783L17.785,21.511,5.157,11.783V7.891l12.628,9.728L30.413,7.891Z"
                          transform="translate(-2 -4)"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="contact__info--content">
                      <p className="contact__info--content__desc text-white">
                        {" "}
                        <a href="mailto:godmother.aquila@gmail.com
">
                      godmother.aquila@gmail.com

                        </a>{" "}
                        
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact__info--items">
                  <h3 className="contact__info--content__title text-white mb-15">
                    Office Location
                  </h3>
                  <div className="contact__info--items__inner d-flex">
                    <div className="contact__info--icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31.57"
                        height="31.13"
                        viewBox="0 0 31.57 31.13"
                      >
                        <path
                          id="ic_account_balance_24px"
                          d="M5.323,14.341V24.718h4.985V14.341Zm9.969,0V24.718h4.985V14.341ZM2,32.13H33.57V27.683H2ZM25.262,14.341V24.718h4.985V14.341ZM17.785,1,2,8.412v2.965H33.57V8.412Z"
                          transform="translate(-2 -1)"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="contact__info--content">
                      <p className="contact__info--content__desc text-white">
                      Shop 38/34 Omida shopping complex Omida, Abeokuta, Ogun state.

                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact__info--items">
                  <h3 className="contact__info--content__title text-white mb-15">
                    Follow Us
                  </h3>
                  <ul className="contact__info--social d-flex">
                    <li className="contact__info--social__list">
                      <a
                        className="contact__info--social__icon"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/profile.php?id=100054852456392&mibextid=LQQJ4d"
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
                          ></path>
                        </svg>
                        <span className="visually-hidden">Facebook</span>
                      </a>
                    </li>
                    <li className="contact__info--social__list">
                      <a
                        className="contact__info--social__icon"
                        target="_blank"
                        rel="noreferrer"
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
                          ></path>
                        </svg>
                        <span className="visually-hidden">Twitter</span>
                      </a>
                    </li>
                    <li className="contact__info--social__list">
                      <a
                        className="contact__info--social__icon"
                        target="_blank"
                        rel="noreferrer"
                        href="https://instagram.com/devantijewellery?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"
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
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End contact section --> */}

        {/* <!-- Start contact map area --> */}
        <div class="contact__map--area section--padding pt-0">
          <iframe
            class="contact__map--iframe"
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3958.87308370327!2d3.336230674998593!3d7.140671842863503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d7.1409025999999995!2d3.3405939!4m5!1s0x103a4c767b8e725b%3A0xcfcbddbb8b59d9bf!2sgoogle%20map%20for%20this%20location%20Shop%2038%2F34%20Omida%20shopping%20complex%20Omida%2C%20Abeokuta%2C%20Ogun%20state.!3m2!1d7.1396453!2d3.3367237999999997!5e0!3m2!1sen!2sng!4v1699348764442!5m2!1sen!2sng"
            style={{ border: "0" }}
            title="Google map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
        {/* <!-- End contact map area --> */}

      </main>
    </>
  );
};

export default Contact;
