// import List from "./List";
import { useState } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  const [data, setData] = useState("");
  // console.log("aaya gaya data", data);

  return (
    <div className="banner">
      <img
        className="banner_images"
        src={data.bannerImage}
        alt="banner_images"
      />
      <div className="wrapper">
        <div className="banner__contents">
          <div className="logo">
            <div className="banner__logo">
              <img src={data.logo} alt="" />
            </div>
          </div>
          <p className="banner__description-Time">
            {data.timeDurations}
            <span>15</span>
          </p>
          <p className="banner__description">{data.banner__description}</p>
          <div className="banner__buttons">
            <button className="banner__button">
              {/* <FontAwesomeIcon icon="fa-solid fa-play" /> */}
              <FontAwesomeIcon icon={faPlay} />
              {/* <i className="fas fa-play"></i> */}
              <span>Play Now</span>
            </button>
          </div>
        </div>
        {/* <div className="banner--fadesBottom"></div> */}
        <div className="card-in-banner">
          <Card setData={setData} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
