import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import "./mainMobileNavbar.css";
import ItemRow from "../itemRow/ItemRow";
import PersonIcon from "@mui/icons-material/Person";
import { useRef } from "react";
import { Link } from "react-router-dom";

const MainMobileNavbar = () => {
  const container = useRef();

  return (
    <div className="main-mobile-navbar">
      <div className="row1">
        <img
          className="ham"
          src="assets/hamburger.svg"
          alt=""
          onClick={() => container.current.classList.add("active")}
        />

        <Link to="/" className="link">
          <img className="logo" src="assets/mobile-logo.png" alt="" />
        </Link>

        <Link to="/cart" className="link c">
          <ShoppingCartIcon className="cart" />
        </Link>

        <Link to="/login" className="link l">
          <span className="text">Login</span>
        </Link>
      </div>
      <div className="row2">
        <input type="text" placeholder="Search for Products, Brands and More" />
        <SearchIcon className="icon" />
      </div>
      <div className="ham-container" ref={container}>
        <div className="topbar">
          <PersonIcon
            className="icon"
            onClick={() => container.current.classList.remove("active")}
          />
          <span className="text">Login & Signup</span>
          <img src="assets/small-logo.png" alt="" />
        </div>
        <div className="item-container">
          <ItemRow
            img="assets/supercoin.png"
            text="Supercoin Zone"
            isNew={true}
          />
          <ItemRow
            img="assets/plus.png"
            text="Flipkart Plus Zone"
            isNew={false}
          />
          <ItemRow
            img="assets/electronic.png"
            text="Electronics"
            isNew={false}
          />
          <ItemRow img="assets/fashion.png" text="Fashion" isNew={false} />
          <ItemRow
            img="assets/home.png"
            text="Home and Furniture"
            isNew={false}
          />
          <ItemRow img="assets/tv.png" text="TVs & Furniture" isNew={false} />
          <ItemRow img="assets/toy.png" text="Toys and Baby" isNew={false} />
          <ItemRow
            img="assets/beauty.png"
            text="Beauty and Personal care"
            isNew={false}
          />
          <ItemRow
            img="assets/sport.png"
            text="Sports, Books & More"
            isNew={false}
          />
          <ItemRow img="assets/grocery.png" text="Grocery" isNew={false} />
          <ItemRow
            img="assets/refurbised.png"
            text="Refurbished Products"
            isNew={false}
          />
          <ItemRow img="assets/flights.png" text="Flights" isNew={true} />
          <hr />
          <ItemRow img="assets/lang.png" text="Choose Language" isNew={true} />
          <hr />
          <ItemRow img="assets/offer.png" text="Offer Zone" isNew={false} />
          <ItemRow img="assets/game.png" text="Game Zone" isNew={false} />
          <hr />
          <ItemRow img="assets/order.png" text="My Orders" isNew={false} />
          <ItemRow img="assets/coupon.png" text="My Coupons" isNew={false} />
          <ItemRow img="assets/cart.png" text="My Cart" isNew={false} />
          <ItemRow img="assets/wishlist.png" text="My Wishlist" isNew={false} />
          <ItemRow img="assets/account.png" text="My Account" isNew={false} />
        </div>
      </div>
    </div>
  );
};

export default MainMobileNavbar;
