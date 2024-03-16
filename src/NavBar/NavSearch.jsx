import { useState, useEffect } from "react";
import "./NavBar.css";
import navSearchIcon from "./NavBarAssets/cat search.png";

function NavSearch() {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const toggleSearchBoxVisibility = () => {
    setSearchBoxVisibility(!searchBoxVisibility);
  };

  const handleBodyClick = (e) => {
    if (!e.target.closest(".navSearchIconContainer")) {
      setSearchBoxVisibility(false);
    }
  };

  return (
    <div>
      <div className="navSearchIconContainer">
        <img
          src={navSearchIcon}
          onClick={toggleSearchBoxVisibility}
          className="navSearchIcon"
          alt=""
        />
        <input
          type="text"
          id="navSearchBox"
          className={`${
            searchBoxVisibility ? "navSearchBoxvisible" : "navSearchBox"
          }`}
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default NavSearch;
