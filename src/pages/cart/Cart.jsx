import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import CartProduct from "../../components/cartProduct/CartProduct";
import Delivery from "../../components/delivery/Delivery";
import Footer from "../../components/footer/Footer";
import "./cart.css";

const Cart = () => {
  const prod1 = {
    name: "Raw Whey Protein with 24 gram of proteins",
    img: "assets/prod1.jpeg",
    desc: "2 Pounds, Coffee",
    seller: "Six-Pack Nutrition",
    disPrice: "1,299",
    price: "1,999",
    off: "35% off",
    delivery: "Mon Nov 29",
  };
  const prod2 = {
    name: "Powerus Whey Irish Chocolate Flavoured",
    img: "assets/prod2.jpeg",
    desc: "1 kg, Irish Chocolate",
    seller: "Proburst",
    disPrice: "1,250",
    price: "2,199",
    off: "43% off",
    delivery: "Wed Dec 1",
  };

  return (
    <div className="cart">
      <div className="navbar">
        <Link to="/" className="link">
          <ArrowBackIcon className="icon" />
        </Link>
        <span className="text">
          My Cart (<span className="quantity">2</span>)
        </span>
      </div>

      <div className="desktop-navbar">
        <Link to="/" classname="link">
          <img src="assets/mobile-logo.png" alt="" />
        </Link>
        <div className="input-container">
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
          <SearchIcon className="icon" />
        </div>
        <span className="text">Anup</span>
      </div>

      <Delivery />

      <div className="desktop-wrapper">
        <div className="left">
          <div className="products">
            <CartProduct prod={prod1} />
            <CartProduct prod={prod2} />
          </div>
          <div className="desktop-cart-footer">
            <div className="wrapper">
              <span className="price">₹2,549</span>
              <span className="text">View Price Details</span>
            </div>
            <button>Continue</button>
          </div>
        </div>

        <div className="right">
          <div className="price-details">
            <span className="text grey title">PRICE DETAILS</span>
            <div className="containers">
              <div className="price-container">
                <span className="text">
                  Price (<span className="quantity text">2 items</span>)
                </span>
                <span className="price text">₹ 2,549</span>
              </div>
              <div className="delivery-container">
                <span className="text">Delivery Charges</span>
                <span className="charges text green">FREE</span>
              </div>
              <div className="payable-container">
                <span className="text payable">Amount Payable</span>
                <span className="text total-price">₹ 2,549</span>
              </div>
            </div>
            <div className="total-amount">
              <span className="text">Total Amount</span>
              <span className="price text">₹ 2,549</span>
            </div>

            <span className="save green">
              You will save ₹ 1649 on this order
            </span>
          </div>

          <img className="plus" src="assets/flipkart-plus.png" alt="" />
          <div className="secure-container">
            <img src="assets/assured.svg" alt="" />
            <span className="text">
              Safe and Secure Payments. Easy Returns. <br /> 100% Authentic
              products.
            </span>
          </div>
        </div>
      </div>

      <div className="cart-footer">
        <div className="wrapper">
          <span className="price">₹2,549</span>
          <span className="text">View Price Details</span>
        </div>
        <button>Continue</button>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
