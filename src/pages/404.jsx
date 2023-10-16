import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img/other/404-thumb.png";
const NotFound = () => {
  return (
    <main className="main__content_wrapper">
      {/* <!-- Start breadcrumb section --> */}
      <section className="breadcrumb__section breadcrumb__bg">
        <div className="container">
          <div className="row row-cols-1">
            <div className="col"></div>
          </div>
        </div>
      </section>
      {/* <!-- End breadcrumb section --> */}

      {/* <!-- Start error section --> */}
      <section className="error__section section--padding">
        <div className="container">
          <div className="row row-cols-1">
            <div className="col">
              <div className="error__content text-center">
                <img
                  className="error__content--img mb-50"
                  src={img1}
                  alt="error-img"
                />
                <h2 className="error__content--title">
                  Opps ! We,ar Not Found This Page{" "}
                </h2>
                <p className="error__content--desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi animi aliquid minima assumenda.
                </p>
                <Link to="/" className="error__content--btn primary__btn">
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End error section --> */}
    </main>
  );
};

export default NotFound;
