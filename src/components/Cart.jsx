import "../styles/cart.css";

function Cart({
  cart,
  updateQuantity,
  removeFromCart,
  clearCart,
}) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("🎉 Cảm ơn bạn đã mua sắm tại NovaTech! Đơn hàng của bạn đang được xử lý.");
    clearCart();
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Giỏ hàng ({cart.reduce((s, i) => s + i.quantity, 0)})</h2>
        {cart.length > 0 && (
          <button className="clear-cart-btn" onClick={clearCart}>
            Xóa tất cả
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <p>Giỏ hàng của bạn đang trống</p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-img"
                />
                
                <div className="cart-item-info">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">
                    ${item.price * item.quantity}
                  </span>
                </div>

                <div className="cart-item-actions">
                  <div className="qty-control">
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, -1)}
                      aria-label="Giảm số lượng"
                    >
                      -
                    </button>
                    <span className="qty-val">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                      aria-label="Tăng số lượng"
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Xóa ${item.name} khỏi giỏ hàng`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="promo-box">
            <input
              type="text"
              placeholder="Mã giảm giá (ví dụ: NOVATECH)"
              className="promo-input"
            />
            <button className="promo-btn">Áp dụng</button>
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Tạm tính</span>
              <span>${subtotal}</span>
            </div>
            <div className="summary-row">
              <span>Phí vận chuyển</span>
              <span style={{ color: "#10b981", fontWeight: 600 }}>Miễn phí</span>
            </div>
            <div className="summary-row total">
              <span>Tổng cộng</span>
              <span>${subtotal}</span>
            </div>
            
            <button className="checkout-btn" onClick={handleCheckout}>
              Thanh toán ngay
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;