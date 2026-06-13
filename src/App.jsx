import "./styles/app.css";

function App() {
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
    <div>
      <h1>Task Management</h1>
    </div>
        </div>
  );
}
export default App;
