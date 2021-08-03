import { FaPlay } from "react-icons/fa";
function Show({ show }) {
  return (
    <div className="show-card">
      <img src={show.image.medium} alt="Prison Break" />
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
