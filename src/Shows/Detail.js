import { FaStar, FaPlay, FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import Loading from "./../Loading";

function Detail() {
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(true);

  let { id } = useParams();
  useEffect(() => {
    var options = {
      method: "GET",
      url: `https://api.tvmaze.com/shows/${id}?embed=cast`,
    };

    axios
      .request(options)
      .then(function (response) {
        setShow(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(show);
        console.error(error.message);
      });
  }, [show]);

  return (
    <div className="flex show-details">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="details-image">
            <img src={show.image.original} alt="cover" />
          </div>
          <div className="details-info">
            <div className="flex details-heading">
              <div className="flex">
                <button className="btn-play-detail hover">
                  <FaPlay className="play-icon" />
                </button>
                <div>
                  <h1>{show.name}</h1>
                  <span>
                    {show.runtime} Min | {show.status} | {show.language}
                  </span>
                </div>
              </div>
              <div className="flex">
                <FaStar className="star" />
                <h2>{show.rating.average}</h2>
              </div>
            </div>
            <button className="btn-banner hover">
              <FaPlus className="btn-icon" />
              Add to list
            </button>
            <div className="show-information">
              <div>{show.summary}</div>
              <div className="more-info">
                <span>Network:</span> <small>{show.network.name} </small>
                <br />
                <span>Genre:</span> <small>{show.genres.join(" | ")} </small>
                <br />
                <span>Schedule:</span>{" "}
                <small>{show.schedule.days.join(", ")} </small> at{" "}
                <small>{show.schedule.time} </small>
              </div>
            </div>
            <div>
              <button className="btn-details hover">Offical Site</button>
              <button className="btn-details hover">View Episodes</button>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4>Cast:</h4>
              <div className="cast flex">
                {show._embedded.cast.map((cast) => (
                  <div className="cast-card">
                    <img src={cast.person.image.original} alt="actor" />
                    <h5>{cast.person.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;
