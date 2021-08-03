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

        setPopular(top5);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Header change={changeSearch} />
      <Banner />
      <h1>you have searched: {search}</h1>
      {search === "" ? "empty" : "full"}
      <Shows shows={popular} loading={loading} />
      <Footer />
    </div>
  );
}
export default App;
