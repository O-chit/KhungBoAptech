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

        <div className="card-footer">
          <div className="card-price-box">
            {product.originalPrice && (
              <span className="card-old-price">${product.originalPrice}</span>
            )}
            <span className="card-price">${product.price}</span>
          </div>

          <button
            className="card-btn"
            onClick={() => addToCart(product)}
            aria-label={`Thêm ${product.name} vào giỏ hàng`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;