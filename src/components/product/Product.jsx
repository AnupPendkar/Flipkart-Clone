import "./product.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Product = ({ img, name, off, cat, price, disPrice }) => {
  const wish = useRef();

  return (
    <Link to="/product" className="link">
      <div className="product">
        {price && (
          <FavoriteIcon
            ref={wish}
            className="wishlist"
            onClick={() => wish.current.classList.toggle("wishlisted")}
          />
        )}
        <img className="productImg" src={img} alt="" />
        {price ? (
          <>
            <div className="name-container">
              <span className="name">{name}</span>
              <img src="assets/flipkart-assured.svg" alt="" />
            </div>
            <div className="price-container">
              <span className="dis-price">₹{disPrice}</span>
              <span className="price">{price}</span>
              <span className="off">{off}</span>
            </div>
          </>
        ) : (
          <>
            <span className="name">{name}</span>
            <span className="off">{off}</span>
            <span className="category">{cat}</span>
          </>
        )}
      </div>
    </Link>
  );
};

export default Product;
