import React from "react";
import img16 from "../assets/img/other/shipping1.png";
import img17 from "../assets/img/other/shipping2.png";
import img18 from "../assets/img/other/shipping3.png";
import img19 from "../assets/img/other/shipping4.png";
const Shipping = () => {
  return (
    <>
      {/* start shipping */}

      <main className="main__content_wrapper">
        <section className="shipping__section2 shipping__style3 section--padding pt-5">
          <div className="container">
            <div className="shipping__section2--inner shipping__style3--inner d-flex justify-content-between">
              <div className="shipping__items2 d-flex align-items-center">
                <div class="shipping__items2--icon">
                  <img src={img16} alt="" />
                </div>{" "}
                <div className="shipping__items2--content">
                  <h2 className="shipping__items2--content__title h3">
                    Shipping
                  </h2>
                  <p className="shipping__items2--content__desc">
                    From handpicked sellers
                  </p>
                </div>
              </div>
              <div className="shipping__items2 d-flex align-items-center">
                <div className="shipping__items2--icon">
                  <img src={img17} alt="" />
                </div>
                <div className="shipping__items2--content">
                  <h2 className="shipping__items2--content__title h3">
                    Payment
                  </h2>
                  <p className="shipping__items2--content__desc">
                    From handpicked sellers
                  </p>
                </div>
              </div>
              <div className="shipping__items2 d-flex align-items-center">
                <div className="shipping__items2--icon">
                  <img src={img18} alt="" />
                </div>
                <div className="shipping__items2--content">
                  <h2 className="shipping__items2--content__title h3">
                    Return
                  </h2>
                  <p className="shipping__items2--content__desc">
                    From handpicked sellers
                  </p>
                </div>
              </div>
              <div className="shipping__items2 d-flex align-items-center">
                <div className="shipping__items2--icon">
                  <img src={img19} alt="" />
                </div>
                <div className="shipping__items2--content">
                  <h2 className="shipping__items2--content__title h3">
                    Support
                  </h2>
                  <p className="shipping__items2--content__desc">
                    From handpicked sellers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* end shipping */}
    </>
  );
};

export default Shipping;
