import "./cartProduct.css";

const CartProduct = ({ prod }) => {
  return (
    <div className="cart-product">
      <div className="wrapper">
        <div className="left">
          <span className="name text">{prod.name}</span>
          <span className="desc grey">{prod.desc}</span>
          <div className="seller-wrapper">
            <span className="seller grey text">
              Seller:{" "}
              <span className="grey seller-name text">{prod.seller}</span>
            </span>
            <img src="assets/flipkart-assured.svg" alt="" />
          </div>
          <div className="price-wrapper">
            <span className="discounted-price">₹ {prod.disPrice}</span>
            <span className="price">₹ {prod.price}</span>
            <span className="off">{prod.off}</span>
          </div>
          <div className="delivery-wrapper">
            <span className="text">• Delivery by {prod.delivery} |</span>
            <span className="charges text">
              FREE <span className="price">₹40</span>
            </span>
          </div>
        </div>
        <div className="right">
          <img src={prod.img} alt="" />
          <div className="quantity-container">
            <span className="text">Qty: </span>
            <select className="quantity" defaultValue="1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
        </div>
      </div>
      <div className="btns">
        <button className="save-for-later">Save for later</button>
        <button className="remove">Remove</button>
      </div>
    </div>
  );
};

export default CartProduct;
