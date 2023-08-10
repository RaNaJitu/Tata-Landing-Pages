import { useEffect, useState } from "react";
// import { fetchData } from "../api/api";

const Test = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(props.data);
    // fetchData(props.param).then((res) => {
    //   console.log("res====>", res);
    //   setList(res.data.results);
    // });
  }, []);
  //   console.log(list);
  return (
    <div className="list">
      <div className="row">
        <h2 className="text-white title">{props.title}</h2>
        <div className="col">
          <div className="row__posters">
            {list.map((item) => (
              <img
                className="row__poster row__posterLarge"
                // src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                src={item.thumbnailImage}
                alt={item.imageType}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
