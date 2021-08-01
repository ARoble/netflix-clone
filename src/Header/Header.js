import { FaSearch, FaBell } from "react-icons/fa";

function Header() {
  return (
    <div className="header flex">
      <div className="flex" style={{ alignItems: "center" }}>
        <img
          src="./netflix-logo.png"
          alt="logo"
          className="logo"
          style={{ height: "70px" }}
        />

        <div>
          <ul>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>Recently Added</li>
            <li>My List</li>
          </ul>
        </div>
      </div>

      <div className="flex" style={{ alignItems: "center" }}>
        <div>
          <FaSearch className="nav-icons hover" />
          <FaBell className="nav-icons hover" />
        </div>
        <img src="./profile.png" alt="user" className="profile hover" />
      </div>
    </div>
  );
}

export default Header;
