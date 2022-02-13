import { useState } from "react";

import "./styles/NavBar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);

  const clickHandler = () => {
    menuVisible ? setMenuVisible(false) : setMenuVisible(true)
  }

  return (
    <nav className="nav">
      <p>Movies.Info</p>
      <button className="nav--menu-btn" onClick={clickHandler}>
        <FontAwesomeIcon icon={faBars} />{" "}
      </button>
      <div className={`nav--menu ${menuVisible && "active"}`}>
        <ul className="nav--menu--list">
          <li><button>Movies</button></li>
          <li><button>Tv Shows</button></li>
          <li><button>People</button></li>
        </ul>

        <div className="nav--menu--search">
          <input
            type="input"
            className="nav--menu--search--input"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button className="nav--menu--search--btn">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
