import { Link } from "react-router-dom";
import Product from "../product/Product";
import "./mobileDeals.css";

const MobileDeals = ({ prod }) => {
  return (
    <div className="mobile-deals">
      <div className="topbar">
        <div className="container">
          <span className="title">{prod.title}</span>
          <div className="timer">
            <img src="assets/timer.svg" alt="" />
            <span className="text">10h 25m remaining</span>
          </div>
        </div>
        <Link to="/products" className="link">
          <button>View All</button>
        </Link>
      </div>
      <div className="products">
        {prod.desc.map((item, count) => {
          if (count < 4) {
            return (
              <Product
                key={item.id}
                img={item.img}
                name={item.name}
                off={item.off}
                cat={item.category}
              />
            );
          }
          return;
        })}
      </div>
    </div>
  );
};

export default MobileDeals;
