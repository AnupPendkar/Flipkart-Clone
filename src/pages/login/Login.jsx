import { Link } from "react-router-dom";
import MainNavbar from "../../components/mainNavbar/MainNavbar";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <MainNavbar />
      <div className="container">
        <div className="top">
          <div className="section">
            <span className="text">Login</span>
            <span className="desc">
              Get access to your Orders, Wishlist and Recommendations
            </span>
          </div>
          <img src="assets/login.png" alt="" />
        </div>
        <div className="bottom">
          <input type="text" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <span className="privacy">
            By continuing, you agree to Flipkart's Terms of Use and Privacy
            Policy.
          </span>
          <button className="login">Login</button>
          <span className="or-text">OR</span>
          <button className="otp">Request OTP</button>

          <Link to="/register" className="link">
            <span className="new">New to Flipkart? Create an account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
