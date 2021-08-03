import { FaPlay } from "react-icons/fa";
function Show({ show }) {
  return (
    <div className="show-card">
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
        <span className="bio">{show.summary}</span>
      </div>
    </div>
  );
}

export default Show;
