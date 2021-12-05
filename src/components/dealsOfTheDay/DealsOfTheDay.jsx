import Product from "../product/Product";
import "./dealsOfTheDay.css";
import Arrow from "../arrow/Arrow";
import { useEffect, useRef, useState } from "react";
import MobileDeals from "./MobileDeals";
import { Link } from "react-router-dom";

const DealsOfTheDay = ({ prod }) => {
  const [width, setWidth] = useState(0);
  const [display1, setDisplay1] = useState(0);
  const [display2, setDisplay2] = useState(1);
  const [slider, setSlider] = useState();
  const img = useRef();

  const handleClick = (dir) => {
    if (dir === "back") {
      if (width > 1) {
        setWidth(width - 1);
        setDisplay2(1);
      } else {
        setWidth(0);
        setDisplay1(0);
        setDisplay2(1);
      }
    } else {
      if (width < 1) {
        setWidth(width + 1);
        setDisplay1(1);
      } else {
        setWidth(2);
        setDisplay1(1);
        setDisplay2(0);
      }
    }
  };

  useEffect(() => {
    const w = img.current.clientWidth;
    setSlider(0.5 * w);
  }, []);

  return (
    <>
      <MobileDeals prod={prod} />
      <div className="dealsOfTheDay">
        <div className="left">
          <div className="top-bar">
            <div className="left">
              <span className="text">{prod.title}</span>
              <div className="timer">
                <img src="assets/timer.svg" alt="" />
                <span className="text">15 : 10 : 41 Left</span>
              </div>
            </div>
            <Link to="/products">
              <button>VIEW ALL</button>
            </Link>
          </div>

          <div
            className="products"
            ref={img}
            style={{ transform: `translateX(${-slider * width}px)` }}
          >
            {prod.desc.map((item, count) => (
              <Product
                key={count}
                img={item.img}
                name={item.name}
                off={item.off}
                cat={item.category}
              />
            ))}
          </div>
          <div
            className="back icon"
            onClick={() => handleClick("back")}
            style={{ display: display1 ? "block" : "none" }}
          >
            <Arrow dir="back" />
          </div>
          <div
            className="forward icon"
            onClick={() => handleClick("right")}
            style={{ display: display2 ? "block" : "none" }}
          >
            <Arrow dir="forward" />
          </div>
        </div>
        <div className="right">
          <img src="assets/ad.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default DealsOfTheDay;
