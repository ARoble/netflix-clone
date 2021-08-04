import { FaSearch, FaBell } from "react-icons/fa";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header({ change }) {
  const [active, setActive] = useState(false);

  return (
    <div className="header flex">
      <div className="flex" style={{ alignItems: "center" }}>
        <img
          src="/netflix-logo.png"
          alt="logo"
          className="logo"
          style={{ height: "70px" }}
        />

        <div>
          <ul>
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>Recently Added</li>
            <li>My List</li>
          </ul>
        </div>
      </div>

      <div className="flex" style={{ alignItems: "center" }}>
        {active ? (
          <input
            type="text"
            className="searchbox"
            placeholder="Search for a show...."
            onChange={(e) => change(e.target.value)}
          />
        ) : (
          ""
        )}

        <div>
          <FaSearch
            className="nav-icons hover"
            onClick={() => (active ? setActive(false) : setActive(true))}
          />
          <FaBell className="nav-icons hover" />
        </div>
        <img src="/profile.png" alt="user" className="profile hover" />
      </div>
    </div>
  );
}

export default Header;
