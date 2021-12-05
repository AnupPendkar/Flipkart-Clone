import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./hoverComponent.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HoverComponent = ({ topName, components, top, right, arrowRight }) => {
  return (
    <div className="hoverComponent">
      <div className="more-container">
        <span className="text">{topName}</span>
        <KeyboardArrowDownIcon className="top-icon" />
        <div
          className="more-options"
          style={{ top: `${top}px`, right: `${right}px` }}
        >
          <div
            className="triangle-up"
            style={{ right: `${arrowRight}px` }}
          ></div>
          {components.options.map((item) => (
            <div className="option-container" key={item.id}>
              <span>{item.text}</span>
              {item.sidebar && <ArrowForwardIosIcon className="icon" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverComponent;
