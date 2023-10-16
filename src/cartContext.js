import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
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
