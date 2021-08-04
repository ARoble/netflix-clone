import { FaPlay } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Show({ show }) {
  return (
    <div className="show-card">
      <Link to={`show/${show.id}`} className="link">
        {show.image === null ? (
          <img
            src="nocover.jpg"
            alt="No Cover"
            style={{ height: "295px", width: "210px" }}
          />
        ) : (
          <img src={show.image.medium} alt="Show Cover" />
        )}

        <div className="show-info">
          <FaPlay className="btn-play" />
          <span>{show.name}</span>
          <span>
            <span className="match">{show.rating.average} </span> {show.status}
          </span>
          <span className="bio">{show.summary.substring(0, 170)}...</span>
        </div>
      </Link>
    </div>
  );
}

export default Show;
