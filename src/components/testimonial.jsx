import React from "react";
import img1 from "../assets/img/other/testimonial-thumb1.png";
import img2 from "../assets/img/other/testimonial-thumb2.png";
import img3 from "../assets/img/other/testimonial-thumb3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Ibukunoluwa",
    role: "Entrepreneur",
    content: "I have been a loyal customer of Devanti for a while, and I can't speak highly enough about their exceptional service and knowledgeable staff.",
    image: img1,
  },
  {
    name: "Ibukunoluwa",
    role: "Entrepreneur",
    content: "I have been a loyal customer of Devanti for a while, and I can't speak highly enough about their exceptional service and knowledgeable staff.",
    image: img2,
  },
  {
    name: "Ibukunoluwa",
    role: "Entrepreneur",
    content: "I have been a loyal customer of Devanti for a while, and I can't speak highly enough about their exceptional service and knowledgeable staff.",
    image: img3,
  },
];
const Testimonial = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true, // Set to true for automatic sliding
    autoplaySpeed: 2000, // Set the interval (in milliseconds)
    
 
  };
  return (
    <>
      

<section className="testimonial__section  position__relative section--padding color-scheme-2" style={{backgroundColor:"#000000"}}>
      <div className="container">
      <div className=" text-center  mb-35">
            <h2 className="section__heading--maintitle style2 text-white">
          Testmonial
            </h2>
          </div>
        <div className="testimonial__bg--inner testimonial__activation--column1">
          <div className="swiper-wrapper">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="testimonial__items--style2 testimonial__items text-center">
                    <div className="testimonial__items--style2__thumbnail mb-10">
                      <img
                        className="testimonial__items--style2__thumbnail--img border-radius-50"
                        style={{ margin: "0px auto" }}
                        src={testimonial.image}
                        alt={`testimonial-img-${index}`}
                      />
                    </div>
                    <div className="testimonial__items--content">
                      <h2 className="testimonial__items--title text-white h3">
                        {testimonial.name}
                      </h2>
                      <span className="testimonial__items--subtitle text-white">
                        {testimonial.role}
                      </span>
                      <p className="testimonial__items--desc style2 text-white">
                        {testimonial.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        
        </div>
      </div>
    </section>



    </>
  );
};

export default Testimonial;
