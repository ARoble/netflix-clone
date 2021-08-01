import Show from "./Show";

function Shows({ shows }) {
  return (
    <div className="shows">
      <h3 className="shows-category">Popular On Netflix</h3>
      <div className="show-cards">
        {/* {shows.map((show) => (
          <h1>{show.title}</h1>
          //   <Show />
        ))} */}
      </div>
    </div>
  );
}

export default Shows;
