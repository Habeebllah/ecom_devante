import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const isProductInCart = cartItems.some(item => item.id === product.id);

    if (!isProductInCart) {
      setCartItems([...cartItems, product]);
    }
  };
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart ,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
