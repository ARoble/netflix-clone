import "./App.css";
import Header from "./Header/Header";
import Shows from "./Shows/Shows";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://ott-details.p.rapidapi.com/advancedsearch",
      params: {
        start_year: "2000",
        end_year: "2015",
        min_imdb: "8",
        max_imdb: "10",
        genre: "",
        language: "english",
        type: "show",
        sort: "lowestrated",
        page: "1",
        limit: "5",
      },
      headers: {
        "x-rapidapi-key": "9b4c6142f2msh614b000110d3844p105d27jsn5456505f186b",
        "x-rapidapi-host": "ott-details.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        let top5 = [];
        for (let i = 0; i < 6; i++) {
          top5.push(response.data.results[i]);
        }
        console.log(top5);
        setPopular(top5);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [popular, loading]);

  return (
    <div>
      <Header />
      <Banner />
      <Shows shows={popular} loading={loading} />
      <Footer />
    </div>
  );
}
export default App;
