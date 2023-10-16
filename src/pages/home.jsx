import React from "react";
import Hero from "../components/Hero";
import { Banner } from "../components/banner";
import Brand from "../components/brand";
import Feauture from "../components/feauture";


import Testimonial from "../components/testimonial";
import Contact from "../components/contact";

import Products from "../components/products";


const Home = () => {
  return (
    <main class="main__content_wrapper">
      <Hero />
      <Banner />
      <Products />
  
      <Feauture />
      <Brand />
     
      <Testimonial />
      <Contact />
     
    
    </main>
  );
};

export default Home;
