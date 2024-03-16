import navImglogo from "./NavBarAssets/WikipurrdiaLogo.png";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavLogo() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div>
      <Link to={"/"} onClick={scrollToTop}>
        <img src={navImglogo} className="navBarLogo" alt="Whiskipedia Logo" />
      </Link>
    </div>
  );
}
export default NavLogo;
