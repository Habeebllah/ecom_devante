import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";


import Header from "./layout/Header";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Contact from "./pages/contact";



import { Route, Routes } from "react-router-dom";
import About from "./pages/about";

import Cart from "./pages/cart";
import Login from "./auth/login";
import NotFound from "./pages/404";

import ProductDetails from "./pages/productDetails";
import Checkout from "./pages/checkout";

import { CartProvider } from "../src/cartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />}></Route>
            <Route path="shop" element={<Shop />}></Route>
            <Route path="about" element={<About />}></Route>

            <Route path="contact" element={<Contact />}></Route> 
           
            <Route path="cart" element={<Cart />}></Route>

            <Route path="productdetails" element={<ProductDetails />}></Route>
            <Route path="login" element={<Login />}></Route>

            <Route path="*" element={<NotFound />}></Route>
          </Route>

         
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;


