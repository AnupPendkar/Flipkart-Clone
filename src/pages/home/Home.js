import DealsOfTheDay from "../../components/dealsOfTheDay/DealsOfTheDay";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MainNavbar from "../../components/mainNavbar/MainNavbar";
import Navbar from "../../components/navbar/Navbar";
import ProductRow from "../../components/productRow/ProductRow";
import "./home.css";
import {
  pantsList,
  shoesList,
  tShirtList,
  watchList,
  dealsList,
} from "../../data";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <MainNavbar />
      <Navbar />
      <Header />
      <DealsOfTheDay prod={dealsList[0]} />
      <ProductRow prod={pantsList[0]} />
      <ProductRow prod={tShirtList[0]} />
      <ProductRow prod={shoesList[0]} />
      <ProductRow prod={watchList[0]} />
      <Footer />
    </div>
  );
};

export default Home;
