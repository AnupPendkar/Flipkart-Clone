import { Link } from "react-router-dom";
import MainNavbar from "../../components/mainNavbar/MainNavbar";
import "./register.css";

const Login = () => {
  return (
    <div className="register">
      <MainNavbar />
      <div className="container">
        <div className="top">
          <div className="section">
            <span className="text">Looks like you're new here!</span>
            <span className="desc">
              Sign up with your mobile number to get started
            </span>
          </div>
          <img src="assets/login.png" alt="" />
        </div>
        <div className="bottom">
          <input type="text" placeholder="Enter Mobile Number" />
          <span className="privacy">
            By continuing, you agree to Flipkart's Terms of Use and Privacy
            Policy.
          </span>
          <button className="register">Continue</button>

          <Link to="/login" className="link">
            <button className="login">Existing User? Log in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
