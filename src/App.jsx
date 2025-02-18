import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import productsData from "./data/products.json";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  // Load cart data from local storage when the component mounts
  useEffect(() => {
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // Save cart data to local storage whenever cart updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
  };

  return (
    <div className="container mt-4">
      <Header cartCount={cart.length} />
      <div className="container mt-4">
        <ProductList products={productsData} addToCart={addToCart} />
        <div className="cart-container mt-4 p-3">
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
};

export default App;
