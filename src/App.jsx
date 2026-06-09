import { useState } from "react";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import products from "./data/products";

import "./styles/app.css";

function App() {
  const [cart, setCart] =
    useState([]);

  const addToCart = (product) => {
    setCart([
      ...cart,
      product,
    ]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];

    newCart.splice(index, 1);

    setCart(newCart);
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <ProductList
          products={products}
          addToCart={addToCart}
        />

        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
}

export default App;