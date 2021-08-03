import { useState, useEffect } from "react";
import axios from "axios";
import Show from "./Shows/Show";

function Search({ query }) {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    var options = {
      method: "GET",
      url: `https://api.tvmaze.com/search/shows?q=${query}`,
    };

    axios
      .request(options)
      .then(function (response) {
        setShows(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return (
    <div className="shows">
      <h3 className="shows-category">You have searched for: {query}</h3>
      <div className="show-cards">
        {shows.map((show) => (
          <Show show={show.show} />
        ))}
      </div>
    </div>
  );
}

export default Search;
