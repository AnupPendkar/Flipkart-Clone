import "./itemRow.css";

const ItemRow = ({ img, text, isNew }) => {
  return (
    <div className="item-row">
      <img src={img} alt="" />
      <span className="text">{text}</span>
      {isNew && (
        <div className="new-container">
          <span className="new">NEW</span>
        </div>
      )}
    </div>
  );
};

export default ItemRow;
