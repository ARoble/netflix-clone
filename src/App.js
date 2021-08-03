import "./App.css";
import Header from "./Header/Header";
import Shows from "./Shows/Shows";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Search from "./search";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [popular, setPopular] = useState([]);
  const [random, setRandom] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  function changeSearch(search) {
    setSearch(search);
    console.log(search);
  }

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://api.tvmaze.com/shows",
    };

    axios
      .request(options)
      .then(function (response) {
        //console.log(response.data[0]);
        let top5 = [];
        for (let i = 0; i < 6; i++) {
          top5.push(response.data[i]);
        }

        let random5 = [];

        for (let i = 0; i < 6; i++) {
          let random = Math.random(Math.Floor * 200);
          random5.push(response.data[random]);
        }
        setRandom(random5);
        setPopular(top5);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [search]);

  return (
    <div>
      <Header change={changeSearch} />
      {search === "" ? (
        <>
          <Banner />
          <Shows shows={popular} loading={loading} />
          <Shows shows={random} loading={loading} />
        </>
      ) : (
        <Search query={search} />
      )}

      <Footer />
    </div>
  );
}
export default App;
