import "../styles/cart.css";

function Cart({
  cart,
  removeFromCart,
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart Empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="cart-item"
            >
              <span>
                {item.name}
              </span>

              <button
                onClick={() =>
                  removeFromCart(index)
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;