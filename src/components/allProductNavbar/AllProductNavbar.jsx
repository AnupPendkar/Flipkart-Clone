import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import MainNavbar from "../mainNavbar/MainNavbar";
import "./allProductNavbar.css";

const AllProductNavbar = () => {
  return (
    <div className="all">
      <MainNavbar />
      <div className="all-product-navbar">
        <div className="left">
          <Link to="/" className="link">
            <ArrowBackIcon className="icon" />
          </Link>

          <Link to="/" className="link">
            <img src="assets/small-logo.png" alt="" />
          </Link>

          <div className="text-container">
            <span className="text">Men's T-shirt</span>
          </div>
        </div>
        <div className="right">
          <SearchIcon className="icon" />

          <Link to="/cart" className="link">
            <ShoppingCartIcon className="icon" />
          </Link>

          <Link to="/login" className="link">
            <span className="text">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProductNavbar;
