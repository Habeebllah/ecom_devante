import React from "react";
import img1 from "../assets/img/other/shipping1.png";
import img2 from "../assets/img/other/shipping2.png";
import img3 from "../assets/img/other/shipping3.png";
import img4 from "../assets/img/other/shipping4.png";
import img5 from "../assets/img/other/shipping5.png";
const Shipping = () => {
  return (
    <>
      <main className="main__content_wrapper" style={{backgroundColor:"#FFFFFF"}}>
        <div className="">
          <h2
            className="section__heading--maintitle style2"
            style={{ position: "relative", top: "50px" }}
          >
           Four Easy Steps To Get Your Order To Your Door Step
          </h2>
        </div>
        <section class="shipping__section2 shipping__style3 section--padding">
          <div class="container">
            <div className="shipping-contain">
              <div class="shipping__section2--inner ">
                <div className="shipping__style3--inner d-flex justify-content-between">
                  <div class="shipping__items2 d-flex align-items-center">
                    <img src={img1} alt="" width={"50px"} />

                    <div class="shipping__items2--content">
                      <h2 class="shipping__items2--content__title h3">
                        Make your order
                      </h2>
                      <p class="shipping__items2--content__desc">
                        Add products to cart
                      </p>
                    </div>
                  </div>
                  <div class="shipping__items2 d-flex align-items-center">
                    <img src={img2} alt="" width={"50px"} />

                    <div class="shipping__items2--content">
                      <h2 class="shipping__items2--content__title h3">
                        Make payment
                      </h2>
                      <p class="shipping__items2--content__desc">
                        checkout your orders
                      </p>
                    </div>
                  </div>
                  <div class="shipping__items2 d-flex align-items-center">
                    <img src={img3} alt="" width={"50px"} />

                    <div class="shipping__items2--content">
                      <h2 class="shipping__items2--content__title h3">
                        Order Confirmed
                      </h2>
                      <p class="shipping__items2--content__desc">
                        Order is confirmed by us
                      </p>
                    </div>
                  </div>
                  <div class="shipping__items2 d-flex align-items-center">
                    <img src={img4} alt="" width={"50px"} />

                    <div class="shipping__items2--content">
                      <h2 class="shipping__items2--content__title h3">
                        Order Shipped
                      </h2>
                      <p class="shipping__items2--content__desc">
                        All orders delivered to your door step.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="shiiping-img">
                  <img src={img5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Shipping;
