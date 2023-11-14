import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Header from "./layout/Header";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Contact from "./pages/contact";

import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./pages/about";

import Cart from "./pages/cart";
import Login from "./auth/login";
import NotFound from "./pages/404";

import ProductDetails from "./pages/productDetails";
import Checkout from "./pages/checkout";

import { CartProvider } from "../src/cartContext";
import CheckoutWithId from "./pages/checkoutWithId";
import Account from "./pages/account";
import Dashboard from "./pages/dashboard";
import Address from "./pages/address";
import SignIn from "./auth/signin";
import TrackyourOrder from "./pages/trackyourOrder";
import Profile from "./pages/profile";
import TermCondition from "./pages/termCondition";
import Privacy from "./pages/privacy";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating a delay for loading (can be replaced by actual loading logic)
    const delay = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the delay
    }, 2000); // Replace this with your actual loading process (e.g., fetching data)

    // Clear the timeout on unmount (clean-up)
    return () => clearTimeout(delay);
  }, []);

  const handleNavigate = async (path) => {
    setIsLoading(true);
    // Simulating a loading delay for demonstration purposes
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated 2-second loading

    navigate(path);
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <div className="loading">
          {/* Your loading animation or spinner */}
          <div className="spinner"></div>
        </div>
      ) : (
        <CartProvider>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />}></Route>
              <Route
                path="productdetails/:id"
                element={<ProductDetails />}
              ></Route>
              <Route path="shop" element={<Shop />}></Route>
              <Route path="about" element={<About />}></Route>

              <Route path="contact" element={<Contact />}></Route>

              <Route path="cart" element={<Cart />}></Route>

              <Route path="login" element={<Login />}></Route>
              <Route path="signup" element={<SignIn />}></Route>
              <Route path="account" element={<Account />}></Route>
              <Route path="dashboard" element={<Dashboard />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="privacy/policy" element={<Privacy />}></Route>
              <Route
                path="track-your-order"
                element={<TrackyourOrder />}
              ></Route>

              <Route
                path="terms-and-condition"
                element={<TermCondition />}
              ></Route>

              <Route path="*" element={<NotFound />}></Route>
            </Route>
            <Route path="/checkout/:id" element={<CheckoutWithId />}></Route>
            <Route path="checkout" element={<Checkout />}></Route>
          </Routes>
        </CartProvider>
      )}
    </>
  );
}

export default App;
