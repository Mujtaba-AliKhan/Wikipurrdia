import NavLogo from "./NavLogo";
import NavItems from "./NavItems";
import NavSearch from "./NavSearch";

function NavBar() {
  return (
    <nav className="navContainer">
      <NavLogo />
      <NavItems />
      <NavSearch />
    </nav>
  );
}

export default NavBar;
