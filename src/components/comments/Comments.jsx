import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import "./comments.css";

const Comments = () => {
  return (
    <div className="comments">
      <div className="top">
        <div className="rating-container">
          <span className="rating">4 ★</span>
        </div>
        <span className="title">Value-for-money</span>
      </div>
      <div className="middle">
        <span className="text">Very Nice Product.</span>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="name text">Anup Pendkar, Nanded</span>
          <div className="certified">
            <img src="assets/certified.svg" alt="" />
            <span className="text">Certified Buyer</span>
            <span className="ago text">10 months ago</span>
          </div>
        </div>
        <div className="right">
          <div className="like-dislike">
            <ThumbUpIcon className="icon" />
            <span className="text">574</span>
          </div>
          <div className="like-dislike">
            <ThumbDownAltIcon className="icon" />
            <span className="text">4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
