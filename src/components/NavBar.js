import { useState } from "react";

import "./styles/NavBar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);

  const clickHandler = () => {
    menuVisible ? setMenuVisible(false) : setMenuVisible(true);
  };

  return (
    <nav className="nav">
      <Link to="/">
      <p>Movies.Info</p>
      </Link>
      <button className="nav--menu-btn" onClick={clickHandler}>
        <FontAwesomeIcon icon={faBars} />{" "}
      </button>
      <div className={`nav--menu ${menuVisible && "active"}`}>
        <ul className="nav--menu--list">
          <li>
            <Link to="/movie">
              <button>Movies</button>
            </Link>
          </li>
          <li>
            <Link to="/tv">
              <button>Tv Shows</button>
            </Link>
          </li>
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
