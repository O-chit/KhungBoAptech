import { useState } from "react";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import products from "./data/products";

import "./styles/app.css";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const categories = ["Tất cả", ...new Set(products.map((p) => p.category))];
  
  const filteredProducts = selectedCategory === "Tất cả"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-container">
      <Navbar
        cartCount={cartCount}
        activeTab={selectedCategory}
        onTabChange={setSelectedCategory}
      />

      <main className="main-content">
        <div className="catalog-section">
          {/* Landing Hero Banner (only visible on Cửa hàng tab) */}
          {selectedCategory === "Tất cả" && (
            <div className="hero-banner">
              <div className="hero-content">
                <span className="hero-tag">🔥 KHAI PHÓNG SỨC MẠNH CÔNG NGHỆ</span>
                <h1>NovaTech - Trải Nghiệm Tương Lai Ngay Hôm Nay</h1>
                <p>
                  Sở hữu ngay các dòng máy tính xách tay cấu hình cao, điện thoại di động thông minh đỉnh cao và các thiết bị âm thanh tinh tế với chính sách bảo hành 2 năm và miễn phí vận chuyển.
                </p>
                <div className="hero-actions">
                  <button
                    className="hero-btn-primary"
                    onClick={() => setSelectedCategory("Laptop")}
                  >
                    Mua Laptop
                  </button>
                  <button
                    className="hero-btn-secondary"
                    onClick={() => setSelectedCategory("Điện thoại")}
                  >
                    Xem Điện thoại
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="section-header">
            <h2>
              {selectedCategory === "Tất cả" ? "Sản phẩm nổi bật" : `Danh mục: ${selectedCategory}`}
            </h2>
            <span className="products-count">
              Hiển thị {filteredProducts.length} sản phẩm
            </span>
          </div>

          <ProductList
            products={filteredProducts}
            addToCart={addToCart}
          />
        </div>

        <div className="cart-section">
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        </div>
      </main>
    </div>
  );
}

export default App;