import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  

  const addToCart = (product) => {
    const isProductInCart = cartItems.some(item => item.id === product.id);
  
    if (!isProductInCart) {
      // If the product is not in the cart, add it with a quantity of 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    } else {
      // If the product is already in the cart, update the quantity
      const updatedCart = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    }
  };
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
    ).filter(item => item.quantity > 0);
  
    setCartItems(updatedCart);
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart ,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };



























