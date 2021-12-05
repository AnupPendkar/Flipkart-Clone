import "./mainNavbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import TimelineIcon from "@mui/icons-material/Timeline";
import DownloadIcon from "@mui/icons-material/Download";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import BookIcon from "@mui/icons-material/Book";
import MainMobileNavbar from "./MainMobileNavbar";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <>
      <MainMobileNavbar />
      <div className="main-navbar">
        <Link to="/" className="link">
          <div className="logo-container">
            <img src="assets/logo.png" alt="" />
            <div className="logo-text">
              <span className="text">
                Explore <span className="yellow-text">Plus</span>
              </span>
              <img src="assets/logo2.png" alt="" />
            </div>
          </div>
        </Link>

        <div className="input-container">
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
          <SearchIcon className="icon" />
        </div>

        <Link to="/login" className="link">
          <div className="login-container">
            <button className="navbar-login-btn">Login</button>
            <div className="more-container">
              <div className="more-options">
                <div className="signup">
                  <span className="text">New customer?</span>
                  <span className="btn">Sign Up</span>
                </div>
                <div className="triangle-up"></div>
                <div className="option-container">
                  <AccountCircleIcon className="icon" />
                  <span>My Profile</span>
                </div>
                <div className="option-container">
                  <AddCircleOutlineIcon className="icon" />
                  <span>Flipkart Plus Zone</span>
                </div>
                <div className="option-container">
                  <BookIcon className="icon" />
                  <span>Orders</span>
                </div>
                <div className="option-container">
                  <FavoriteIcon className="icon" />
                  <span>Wishlist</span>
                </div>
                <div className="option-container">
                  <BrandingWatermarkIcon className="icon" />
                  <span>Rewards</span>
                </div>
                <div className="option-container">
                  <AccountBalanceWalletIcon className="icon" />
                  <span>Gift Cards</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div className="more-container">
          <span className="text">More</span>
          <KeyboardArrowDownIcon className="top-icon" />
          <div className="more-options">
            <div className="triangle-up"></div>
            <div className="option-container">
              <NotificationsIcon className="icon" />
              <span>Notification Preferance</span>
            </div>
            <div className="option-container">
              <LocalMallIcon className="icon" />
              <span>Sell on Flipkart</span>
            </div>
            <div className="option-container">
              <LiveHelpIcon className="icon" />
              <span>24x7 Customer Care</span>
            </div>
            <div className="option-container">
              <TimelineIcon className="icon" />
              <span>Advertise</span>
            </div>
            <div className="option-container">
              <DownloadIcon className="icon" />
              <span>Download App</span>
            </div>
          </div>
        </div>

        <Link to="/cart" className="link">
          <div className="cart-container">
            <ShoppingCartIcon className="icon" />
            <span className="text">Cart</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MainNavbar;
