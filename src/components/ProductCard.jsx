import "../styles/product.css";

function ProductCard({ product, addToCart }) {
  const renderStars = (rating) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          viewBox="0 0 24 24"
          style={i > floorRating ? { opacity: 0.25 } : null}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="card">
      {product.tag && <div className="card-tag">{product.tag}</div>}
      
      <div className="card-img-container">
        <img
          src={product.image}
          alt={product.name}
          className="card-img"
          loading="lazy"
        />
      </div>

      <div className="card-content">
        <span className="card-category">{product.category}</span>
        
        <h3>{product.name}</h3>
        
        <p className="card-desc" title={product.description}>
          {product.description}
        </p>

        <div className="card-rating">
          <div className="rating-stars">{renderStars(product.rating)}</div>
          <span className="rating-value">{product.rating}</span>
          <span className="rating-count">({product.reviews})</span>
        </div>

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
