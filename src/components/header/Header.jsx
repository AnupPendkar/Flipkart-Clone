import { sliderList } from "../../data";
import "./header.css";
import { useState, useRef } from "react";
import Arrow from "../arrow/Arrow";

const Header = () => {
  const [width, setWidth] = useState(0);
  const [slider, setSlider] = useState();
  const img = useRef();
  const handleSlide = (dir) => {
    setSlider(img.current.clientWidth);
    if (dir === "left") {
      if (width >= 1) {
        setWidth(width - 1);
      } else {
        setWidth(sliderList.length - 1);
      }
    } else {
      if (width < sliderList.length - 1) {
        setWidth(width + 1);
      } else {
        setWidth(0);
      }
    }
  };

  return (
    <div className="header">
      <div className="slider">
        {sliderList.map((item) => (
          <img
            src={item.img}
            ref={img}
            alt=""
            key={item.id}
            style={{
              transform: `translateX( ${-slider * width}px )`,
            }}
          />
        ))}
      </div>
      <div className="click back" onClick={() => handleSlide("left")}>
        <Arrow dir="back" />
      </div>
      <div className="click forward" onClick={() => handleSlide("right")}>
        <Arrow dir="forward" />
      </div>
      <div className="mobile-slider">
        <div className="wrapper">
          {sliderList.map((item) => (
            <img src={item.img} alt="" key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
