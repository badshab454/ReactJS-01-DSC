const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <a href="#">
            <img src="/images/brand_logo.png" alt="logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button>
          <a href="#">Login</a>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
