import "../styles/navbar.css";

function Navbar({ cartCount = 0 }) {
  return (
    <nav className="navbar">
      <h2>Task Management</h2>
    </nav>
  );
}

export default Navbar;
