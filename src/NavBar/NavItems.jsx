import "./NavBar.css";
import { Link } from "react-router-dom";

function NavItems() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="navItemsContainer">
      <ul className="navItemsList">
        <li>
          <Link to="/" className="navItemLink" onClick={scrollToTop}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/breeds" className="navItemLink" onClick={scrollToTop}>
            Breeds
          </Link>
        </li>
        <li>
          <Link to="/coats" className="navItemLink" onClick={scrollToTop}>
            Coats
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navItemLink" onClick={scrollToTop}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/about" className="navItemLink" onClick={scrollToTop}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavItems;
