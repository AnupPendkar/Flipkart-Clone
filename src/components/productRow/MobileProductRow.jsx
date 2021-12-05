import { Link } from "react-router-dom";
import Product from "../product/Product";
import "./mobileProductRow.css";

const MobileProductRow = ({ prod }) => {
  return (
    <div className="mobile-product-row">
      <div className="topbar">
        <div className="container">
          <span className="title">{prod.title}</span>
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

export default MobileProductRow;
