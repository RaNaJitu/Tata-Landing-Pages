import { useState, useEffect } from "react";
import slides from "../data";
import { useAnimation } from "framer-motion";
const Card = (props) => {
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    props.setData(slides[0]);
  }, []);
  const control = useAnimation();
  const controlTest = useAnimation();

  const handlerFunctions = (item, index) => {
    setSelectedButton(index);
    props.setActiveIndex(index);
    console.log("selectedButton", selectedButton);
    props.setFadeIn(index + 1);
    console.log("index", index);
    // }
    props.setData(item);

    props.setControl(control);
    props.setControlTest(controlTest);
    console.log("control", control);
    control.start({
      y: -200,
      // opacity: 0,
      transition: { duration: 0.4 },
    });
    setTimeout(
      () =>
        control.start({
          y: 0,
          // opacity: 1,
          transition: { duration: 0.1 },
          // scale: [1, 2, 2, 1, 1],
          // scale: [1, 0, 3, 2, 1],
        }),
      700
    );

    controlTest.start({
      y: 20,
      // animation: (fade-in 0.1  liner),
      transition: { duration: 0 },
    });
    setTimeout(
      () =>
        controlTest.start({
          y: 0,
          animation: 0,
          // transition: { duration: 0 },
          transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        }),
      700
    );
  };
  return (
    <div className="list">
      <div className="row">
        <div className="col">
          <div className="row__posters">
            {slides.map((item, index) => (
              <div className="imageWrap">
                <img
                  style={{
                    border:
                      selectedButton === index ? "2px solid white" : "none",
                  }}
                  // ref={buttonRef}
                  className="row__poster row__posterLarge"
                  src={item.thumbnailImage}
                  alt={item.title}
                  key={index}
                  onClick={() => handlerFunctions(item, index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
