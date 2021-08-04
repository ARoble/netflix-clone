import Show from "./Show";
import Loading from "../Loading";
function Shows({ shows, loading, title }) {
  return (
    <div className="shows">
      <h3 className="shows-category">{title}</h3>

      {/* <div className="owl-carousel owl-theme ">
        <div className="show-card">dasda</div>
        <div className="show-card">dasda</div>
        <div className="show-card">dasda</div>
        <div className="show-card">dasda</div>
        <div className="show-card">dasda</div>
      </div> */}

      <div className="show-cards">
        {loading ? <Loading /> : shows.map((show) => <Show show={show} />)}
      </div>
    </div>
  );
}

export default Shows;
