import "./navbar.css";
import { navbarList, navbarMobileList } from "../../data";
import HoverComponent from "../hoverComponent/HoverComponent";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-mobile-item">
        {navbarMobileList.map((item) => (
          <div className="navbar-item" key={item.id}>
            <img src={item.img} alt="" />
            <span className="text">{item.text}</span>
          </div>
        ))}
      </div>
      <div className="navbar-desktop">
        {navbarList.map((item) => (
          <div className="navbar-item" key={item.id}>
            <img src={item.img} alt="" />
            {item.dropdown ? (
              <HoverComponent
                topName={item.text}
                components={item}
                top={item.top}
                right={item.right}
                arrowRight={item.arrowRight}
              />
            ) : (
              <span className="text">{item.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
