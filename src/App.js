import "./App.css";

import Header from "./Header/Header";
import Shows from "./Shows/Shows";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Search from "./search";
import Detail from "./Shows/Detail";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
          let random = Math.floor(Math.random() * 200);
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
      <Router>
        <Header change={changeSearch} />

        <Switch>
          <Route exact path="/">
            {search === "" ? (
              <>
                <Banner />

                <Shows
                  shows={popular}
                  loading={loading}
                  title="Popular on Netflix"
                />

                <Shows
                  shows={random}
                  loading={loading}
                  title="Some shows you might like"
                />
              </>
            ) : (
              <Search query={search} />
            )}
          </Route>
          <Route path="/show/:id">
            <Detail />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
