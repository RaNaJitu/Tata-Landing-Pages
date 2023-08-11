import React from "react";
import "./App.scss";
import Banner from "./components/Banner";
import Test from "./components/Test";
import TrendingNow from "./trendingNow";
import StarzPlay from "./starzplay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Banner />
                <Test
                  title="Trending Now"
                  param="now_playing"
                  data={TrendingNow}
                />{" "}
                <Test
                  title="STARZPLAY Originals"
                  param="originals"
                  data={StarzPlay}
                />
              </React.Fragment>
            }
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
