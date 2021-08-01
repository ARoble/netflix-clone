import { FaPlay } from "react-icons/fa";
function Show({ show }) {
  return (
    <div className="show-card">
      <img src={show.imageurl[0]} alt="Prison Break" />
      <div className="show-info">
        <FaPlay className="btn-play" />
        <span>{show.title}</span>
        <span>
          <span className="match">98% Match </span> 9 Seasons
        </span>
        <span className="bio">
          Netflix image patterns are also very visually prioritized and
          stimulating. I can scroll down and see that the TV shows are
        </span>
      </div>
    </div>
  );
}

export default Show;
