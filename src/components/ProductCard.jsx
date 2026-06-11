import "../styles/product.css";

function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <button
        onClick={() => addToCart(product)}
      >
        Edit
      </button>
    </div>
  );
}

export default ProductCard;
