import Product from "../product/Product";
import "./productRow.css";
import Arrow from "../arrow/Arrow";
import { useEffect, useRef, useState } from "react";
import MobileProductRow from "./MobileProductRow";
import { Link } from "react-router-dom";

const ProductRow = ({ prod }) => {
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
    // const w = img.current.clientWidth;
    setSlider(520);
  }, []);

  return (
    <>
      <MobileProductRow prod={prod} />
      <div className="productRow">
        <div className="product-container">
          <div className="top-bar">
            <div className="left">
              <span className="text">{prod.title}</span>
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
      </div>
    </>
  );
};

export default ProductRow;
