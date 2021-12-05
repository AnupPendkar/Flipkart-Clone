import { useEffect, useRef } from "react";
import "./singlePageImg.css";

const SinglePageImg = ({ img, cr, count }) => {
  const imgRef = useRef();

  const handleClick = () => {
    imgRef.current.classList.toggle("active");

    var width = cr.current.clientWidth;
    cr.current.style.transform = `translateX(-${count * width}px)`;
  };

  return (
    <div className="single-page-img">
      <img
        ref={imgRef}
        src={img}
        alt=""
        onClick={() => handleClick()}
        className="img"
      />
    </div>
  );
};

export default SinglePageImg;
