import "./delivery.css";

const Delivery = () => {
  return (
    <div className="pincode-container">
      <div className="left">
        <img src="assets/map.svg" alt="" />
        <span className="text">pincode</span>
        <span className="pincode">431717</span>
      </div>
      <div className="right">
        <button>Change</button>
      </div>
    </div>
  );
};

export default Delivery;
