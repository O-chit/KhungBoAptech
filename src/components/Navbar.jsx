// import "../styles/navbar.css";

function Navbar({ cartCount = 0, activeTab = "Tất cả", onTabChange }) {
  const tabs = [
    { id: "Tất cả", label: "Cửa hàng" },
    { id: "Điện thoại", label: "Điện thoại" },
    { id: "Laptop", label: "Laptop" },
    { id: "Âm thanh", label: "Âm thanh" },
  ];

  return (
    <nav className="navbar">
      <a
        href="#"
        className="logo"
        onClick={(e) => {
          e.preventDefault();
          onTabChange("Tất cả");
        }}
      >
        <div className="logo-icon">
          <svg viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className="logo-text">NovaTech</span>
      </a>

      <ul className="nav-links">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <a
              href="#"
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                onTabChange(tab.id);
              }}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button className="nav-cart-btn" aria-label="Giỏ hàng">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;