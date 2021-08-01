import Show from "./Show";
import Loading from "../Loading";

function Shows({ shows, loading }) {
  return (
    <div className="shows">
      <h3 className="shows-category">Popular On Netflix</h3>
      <div className="show-cards">
        {loading ? <Loading /> : shows.map((show) => <Show show={show} />)}
      </div>
    </div>
  );
}

export default Shows;
