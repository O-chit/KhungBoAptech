import "../styles/cart.css";

function Cart({
  cart,
  removeFromCart,
  editTask,
}) {
  return (
    <div className="cart">
      <h2>Task List</h2>

      {cart.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >
              <span>
                {item.name}
              </span>

              <div>
                <button
                  onClick={() =>
                    editTask(item)
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Cart;
