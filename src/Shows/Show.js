import { FaPlay } from "react-icons/fa";
function Show() {
  return (
    <div className="show-card">
      <img src="prison.jpg" alt="Prison Break" />
      <div className="show-info">
        <FaPlay className="btn-play" />
        <span>Prison Break</span>
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
