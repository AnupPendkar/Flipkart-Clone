import AllProductNavbar from "../../components/allProductNavbar/AllProductNavbar";
import SinglePageImg from "../../components/singlePageImg/SinglePageImg";
import "./singleProduct.css";
import Delivery from "../../components/delivery/Delivery";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Comments from "../../components/comments/Comments";
import { useRef } from "react";

const SingleProduct = () => {
  const containerRef = useRef();

  const images = [
    { id: 1, img: "assets/single-prod1.jpeg" },
    { id: 2, img: "assets/single-prod2.jpeg" },
    { id: 3, img: "assets/single-prod3.jpeg" },
    { id: 4, img: "assets/single-prod4.jpeg" },
    { id: 5, img: "assets/single-prod5.jpeg" },
  ];
  return (
    <div className="single-product">
      <AllProductNavbar />
      <div className="wrapper">
        <div className="img-container" ref={containerRef}>
          {images.map((item) => (
            <img className="main-img" src={item.img} alt="" />
          ))}
        </div>
        <div className="img-group">
          {images.map((item, count) => (
            <SinglePageImg img={item.img} cr={containerRef} count={count} />
          ))}
        </div>
        <div className="desc">
          <span className="title">
            density SOCKS Running Shoes For Men(Grey)
          </span>
          <div className="rating-container">
            <div className="star-container">
              <span className="text rating">4.2</span>
              <span className="star text">★</span>
            </div>
            <span className="rating-no text">
              1,43,787 ratings, 20,272 reviews
            </span>
            <img src="assets/flipkart-assured.svg" alt="" />
          </div>
          <div className="price-container">
            <span className="dis-price">₹399</span>
            <span className="price">₹999</span>
            <span className="off">60% off</span>
          </div>
        </div>
      </div>
      <Delivery />
      <div className="view-details-container">
        <span className="text">View Details</span>
        <ChevronRightIcon />
      </div>

      <div className="rating-review-container">
        <div className="top">
          <span className="text">Ratings & Reviews</span>
          <button>Rate Product</button>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="rating">4.3 ★</span>
            <span className="reviews">13,430 ratings and 1,156 reviews</span>
          </div>
          <div className="right">
            <div className="rating-container">
              <span className="rating">5 ★</span>
              <div className="slides">
                <div className="slide1"></div>
              </div>
              <span className="text">489</span>
            </div>
            <div className="rating-container">
              <span className="rating">4 ★</span>
              <div className="slides">
                <div className="slide2"></div>
              </div>
              <span className="text">212</span>
            </div>
            <div className="rating-container">
              <span className="rating">3 ★</span>
              <div className="slides">
                <div className="slide3"></div>
              </div>
              <span className="text">66</span>
            </div>
            <div className="rating-container">
              <span className="rating">2 ★</span>
              <div className="slides">
                <div className="slide4"></div>
              </div>
              <span className="text">25</span>
            </div>
            <div className="rating-container">
              <span className="rating">1 ★</span>
              <div className="slides">
                <div className="slide5"></div>
              </div>
              <span className="text">49</span>
            </div>
          </div>
        </div>
      </div>
      <Comments />
      <Comments />
      <Comments />
      <Comments />
    </div>
  );
};

export default SingleProduct;
