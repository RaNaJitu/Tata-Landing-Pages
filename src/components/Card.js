import { useState, useEffect, useRef } from "react";
import slides from "../data";
const Card = (props) => {
  // const buttonRef = useRef(null);
  const [selectedButton, setSelectedButton] = useState(null);
  useEffect(() => {
    // props.setData(slides[0]);
    // slides.map((item, index) => console.log("=======item", item));
    // console.log(slides[0]);
    props.setData(slides[0]);
  }, []);

  const handlerFunctions = (item, index) => {
    // if (buttonRef.current) {
    setSelectedButton(index);
    // buttonRef.current.classList.add("changeTest");
    // buttonRef[index].current.classList.add("changeTest");
    console.log(index);
    // buttonRef[index].current.style.border = "2px solid red";
    // }
    props.setData(item);
    // console.log("item", item, index);
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
