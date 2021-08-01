import { FaPlay, FaPlus } from "react-icons/fa";

function Banner() {
  return (
    <div className="banner flex">
      <div className="feature-info">
        <img src="./hoctitle.png" alt="title" className="banner-title" />
        <div>
          <p>Season 10 Now premier!</p>
        </div>
        <div>
          <button className="btn-banner hover">
            <FaPlay className="btn-icon" />
            Play
          </button>
          <button className="btn-banner hover">
            <FaPlus className="btn-icon" />
            Add to list
          </button>
        </div>
        <p className="banner-desc">
          Now I’d like to examine one of my favorite websites that I use,
          Netflix. Usually when I log into my account, I tend to browse what is
          newly added, what is trending, and see what stands out to me. Netflix
          does a great job at using image patterns, navigation patterns, and
          search patterns. Netflix navigation is a horizontal global navigation
          bar at the top of the homepage and is interactive upon click.
        </p>
      </div>
      <div className="feature-image">
        <img src="hoc.jpg" alt="house of cards" />
      </div>
    </div>
  );
}

export default Banner;
