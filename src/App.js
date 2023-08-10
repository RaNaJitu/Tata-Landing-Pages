import React from "react";
import "./App.scss";
// import Heade r from "./components/Header.js";
// import HomeBanner from "./components/HomeBanner";
// import Login from "./components/Login";
import Banner from "./components/Banner";
import List from "./components/List";
import Test from "./components/Test";
import Card from "./components/Card";
import TrendingNow from "./trendingNow";
import StarzPlay from "./starzplay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          {/* <Route path="/" element={
            <React.Fragment>
              <Header/>
              <HomeBanner/>
            </React.Fragment>
          }/>
          <Route path="/login" element={
            <React.Fragment>
              <Header/>
              <Login/>
            </React.Fragment>
          }/>
          <Route path="/register" element={
            <React.Fragment>
              <Header/>
              <Login/>
            </React.Fragment>
          }/> */}
          <Route
            path="/"
            element={
              <React.Fragment>
                {/* <Header /> */}
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
                {/* <List title="STARZPLAY Originals" param="originals" /> */}
                {/* <Card /> */}
                {/* <List title="Now Playing" param="now_playing" />
                <List title="popular" param="popular" />
                <List title="Top Rated" param="top_rated" />
                <List title="Upcoming" param="upcoming" /> */}
              </React.Fragment>
            }
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
