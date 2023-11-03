import React from "react";
import logo1 from "../assets/img/logo/brand-logo1.png"
import logo2 from "../assets/img/logo/brand-logo2.png"
import logo3 from "../assets/img/logo/brand-logo3.png"
import logo4 from "../assets/img/logo/brand-logo4.png"
import logo5 from "../assets/img/logo/brand-logo5.png"
import logo6 from "../assets/img/logo/brand-logo6.png"
import logo7 from "../assets/img/logo/brand-logo7.png"
import logo8 from "../assets/img/logo/brand-logo8.png"
const Brand = () => {
  return (
    <>
      <div className="brand__logo--section  section--padding color-scheme-2" style={{backgroundColor:"#FFFFFF "}}>
        <div className="container-fluid">

        <div className="text-center mb-35">
            <h2 className="section__heading--maintitle style2 text-white">
          Top Brands
            </h2>
          </div>
          <div className="row row-cols-1" >
            <div className="col">
              <div className="brand__logo--section__inner d-flex justify-content-center align-items-center">
                <div className="brand__logo--items">
                  <div className="brand">
                  <img
                    className="brand__logo--items__thumbnail--img display-block"
                    src={logo1}
                    alt="brand logo img"
                  />
                  </div>
                 
                </div>
                <div className="brand__logo--items">
                <div className="brand">
                  <img
                    className="brand__logo--items__thumbnail--img display-block"
                    src={logo2}
                    alt="brand logo img"
                  />
                  </div>
                </div>
                <div className="brand__logo--items">
                <div className="brand">
                  <img
                    className="brand__logo--items__thumbnail--img display-block"
                    src={logo3}
                    alt="brand logo img"
                  />
                  </div>
                </div>
                <div className="brand__logo--items">
                <div className="brand">
                  <img
                    className="brand__logo--items__thumbnail--img display-block"
                    src={logo4}
                    alt="brand logo img"
                  />
                  </div>
                </div>
      
              </div>
            </div>
            
          </div>
          <div className="row row-cols-1" style={{marginTop:"20px"}}>
            <div className="col">
              <div className="brand__logo--section__inner d-flex justify-content-center align-items-center">
                <div className="brand__logo--items">
                <div className="brand">
                  <img
                    className="brand__logo--items__thumbnail--img display-block"
                    src={logo5}
                    alt="brand logo img"
                  />
                  </div>
                </div>
                <div className="brand__logo--items">
                <div className="brand">
                  <img
                    className="brand__logo--items__thumbnail--img display-block"
                    src={logo6}
                    alt="brand logo img"
                  />
                  </div>
                </div>
                <div className="brand__logo--items">   
                  <div className="brand">
                  <img
                    className="brand__logo--items__thumbnail--img display-block"
                    src={logo7}
                    alt="brand logo img"
                  />
                  </div>
                </div>
                <div className="brand__logo--items">
                <div className="brand">
                  <img
                    className="brand__logo--items__thumbnail--img display-block"
                    src={logo8}
                    alt="brand logo img"
                  />
                  </div>
                </div>
      
              </div>
            </div>
            
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Brand;
