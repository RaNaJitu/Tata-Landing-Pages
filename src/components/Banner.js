import { useState } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import slides from "../data";
import { motion, AnimatePresence } from "framer-motion";

const Banner = (props) => {
  const [data, setData] = useState("");

  const [fadeIn, setFadeIn] = useState(1);

  console.log("props.fadeIn ==>", fadeIn);
  const [activeIndex, setActiveIndex] = useState(0);

  const [control, setControl] = useState("");
  const [controlTest, setControlTest] = useState("");
  return (
    <div className="banner_container">
      <div
        className="banner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {slides.map((item, index) => (
          <img
            className="banner_images"
            src={item.bannerImage}
            alt="banner_images"
          />
        ))}
      </div>
      <div className="wrapper">
        <div className="banner__contents">
          <div className="logo">
            {data.id === fadeIn && (
              <motion.div animate={control}>
                <div
                  className={`banner__logo ${
                    data.id === fadeIn ? "active" : "banner__logo"
                  }`}
                >
                  <img src={data.logo} alt="" />
                </div>
              </motion.div>
            )}
          </div>
          {console.log()}
          {data.id === fadeIn && (
            <AnimatePresence mode="wait">
              <motion.div
                animate={controlTest}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div
                  // className="text_wrapper"
                  className={`text_wrapper ${
                    data.id === fadeIn ? "active" : "text_wrapper"
                  }`}
                >
                  <p className="banner__description-Time">
                    {data.timeDurations}
                    <span>15</span>
                  </p>
                  <p className="banner__description">
                    {data.banner__description}
                  </p>

                  <div className="banner__buttons">
                    <button className="banner__button">
                      <FontAwesomeIcon icon={faPlay} />
                      <span>Play Now</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
      <div className="card_wrapper">
        <Card
          setData={setData}
          setActiveIndex={setActiveIndex}
          setFadeIn={setFadeIn}
          setControl={setControl}
          setControlTest={setControlTest}
        />
      </div>
    </div>
  );
};

export default Banner;
