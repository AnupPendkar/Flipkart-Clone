import "./AllProduct.css";
import AllProductNavbar from "../../components/allProductNavbar/AllProductNavbar";
import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/product/Product";
import { tShirtList } from "../../data";
import Dropdowns from "../../components/dropdowns/Dropdowns";

const AllProduct = () => {
  const Ideal_for = ["Men", "Women", "Boys", "Girls"];
  const Discout = [
    "10% and below",
    "10% and more",
    "20% and more",
    "30% and more",
    "40% and more",
    "50% and more",
  ];
  const Rating = ["4★ & more", "3★ & more", "2★ & more", "1★ & more"];
  const Offer = ["Buy More, Save More", "No Cost EMI", "Buy More Save More"];
  const Availability = ["Include Out Of Stock"];

  return (
    <div className="all-products">
      <AllProductNavbar />
      <Navbar />
      <div className="below-navbar">
        <div className="sort-container container">
          <img src="assets/sort.svg" alt="" />
          <span className="text">Sort</span>
        </div>
        <div className="filter-container container">
          <img src="assets/filter.svg" alt="" />
          <span className="text">Filter</span>
        </div>
      </div>
      <div className="wrapper">
        <div className="filters">
          <div className="title-container">Filters</div>

          <Dropdowns name="Categories" />

          <div className="price-container">
            <span className="text">PRICE</span>
            <div className="select-wrapper">
              <select>
                <option>Min</option>
                <option>500</option>
                <option>1000</option>
                <option>1500</option>
                <option>2000</option>
                <option>2500</option>
              </select>
              <span className="text">to</span>
              <select defaultValue={"2500+"}>
                <option>250</option>
                <option>500</option>
                <option>1000</option>
                <option>1500</option>
                <option>2000</option>
                <option value="2500+">2500+</option>
              </select>
            </div>
          </div>

          <div className="assured-container">
            <input type="checkbox" />
            <img src="assets/flipkart-assured.svg" alt="" />
          </div>

          <Dropdowns name="IDEAL FOR" cat={Ideal_for} />
          <Dropdowns name="Offer" cat={Offer} />
          <Dropdowns name="Discout" cat={Discout} />
          <Dropdowns name="Rating" cat={Rating} />
          <Dropdowns name="Availability" cat={Availability} />
        </div>
        <div className="products">
          {tShirtList[0].desc.map((item, count) => (
            <Product
              key={count}
              img={item.img}
              name={item.name}
              off={item.off}
              price="1000"
              disPrice="400"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
