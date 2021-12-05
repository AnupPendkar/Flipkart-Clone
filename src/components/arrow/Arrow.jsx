import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./arrow.css";
import { useRef } from "react";

const Arrow = ({ dir }) => {
  const click = useRef();
  const handleClick = () => {
    click.current.classList.toggle("active");
    setTimeout(function () {
      click.current.classList.toggle("active");
    }, 200);
  };

  return (
    <div
      ref={click}
      className={`arrow-container ${dir}`}
      onClick={() => handleClick()}
    >
      {dir === "back" ? (
        <ArrowBackIosIcon className="back" />
      ) : (
        <ArrowForwardIosIcon className="forward" />
      )}
    </div>
  );
};

export default Arrow;
