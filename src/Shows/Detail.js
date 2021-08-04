import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./../Loading";

function Detail() {
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(true);

  let { id } = useParams();
  useEffect(() => {
    var options = {
      method: "GET",
      url: `https://api.tvmaze.com/shows/${id}`,
    };

    axios
      .request(options)
      .then(function (response) {
        setShow(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
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
              <div>
                <h1>{show.name}</h1>
              </div>
              <div className="flex">
                <FaStar className="star" />
                <h2>{show.rating.average}</h2>
              </div>
            </div>
            <div className="flex">
              <span>
                2018 | {show.status} | {show.language}
              </span>
            </div>
            <div className="show-information">
              <div>{show.summary}</div>
              <div className="more-info">
                <span>Genre:</span> <small>{show.genres.join(" | ")} </small>
                <br />
                <span>Schedule:</span>{" "}
                <small>{show.schedule.days.join(", ")} </small> at{" "}
                <small>{show.schedule.time} </small>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;
