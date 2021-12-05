import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRef } from "react";
import "./dropdowns.css";

const Dropdowns = ({ name, cat }) => {
  const drop = useRef();
  const icon = useRef();

  const handleClick = () => {
    drop.current.classList.toggle("active");
    icon.current.classList.toggle("active");
  };

  return (
    <div className="dropdowns">
      <div className="ideal-container container">
        <div className="row1">
          <span className="text">{name}</span>
          <KeyboardArrowDownIcon
            ref={icon}
            className="icon"
            onClick={() => {
              handleClick();
            }}
          />
        </div>
        <div ref={drop} className="dropdown">
          {cat &&
            cat.map((item, count) => (
              <div className="row" key={count}>
                <input type="checkbox" />
                <span className="text">{item}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;
