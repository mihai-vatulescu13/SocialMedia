import "./cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faShareSquare,
  faThumbtack,
} from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faThumbsUp,
  faSmile,
} from "@fortawesome/free-regular-svg-icons";
import { comments } from "../../components/testData/homeCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";

const Cards = ({
  postId,
  photo,
  description,
  location,
  like,
  printed,
  createdAt,
  userId,
}) => {
  const PF = process.env.REACT_APP_ASSETS;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [user, setUser] = useState({
    image: "",
    name: "",
  });
  const [likes, setLikes] = useState({
    lengthLikes: null,
    yourLike: null,
  });
  const handleClick = async () => {
    const { data } = await axios.put(`/post/likePost/${postId}`, {
      userId: userId,
    });
    if (data === "dislike") {
      setLikes((prevValue) => {
        return {
          ...prevValue,
          lengthLikes: prevValue.lengthLikes - 1,
          yourLike: false,
        };
      });
    }
    if (data === "like") {
      setLikes((prevValue) => {
        return {
          ...prevValue,
          lengthLikes: prevValue.lengthLikes + 1,
          yourLike: true,
        };
      });
    }
  };
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`/user/getUser/${userId}`);
      setUser((prevValue) => {
        return {
          ...prevValue,
          image: data.profilePicture,
          name: data.name,
        };
      });
    };
    setLikes({
      lengthLikes: like.length,
      yourLike: like.includes(userId) ? true : false,
    });
    fetchUser();
  }, [userId]);

  return (
    <div className="post_Card">
      <header className="header_card">
        <img
          src={user.image ? user.image : PF + "user-avatar.png"}
          alt="avatar"
          className="avatarImage"
        />
        <div className="headerUser">
          <h3>{user.name ? user.name : ""}</h3>
          <div className="location-and-posted-date">
            <p className="location-paragraph">{location} </p>
            <h5 className="created-at-heading">{format(createdAt)}</h5>
          </div>
        </div>
        <div className="stuffPost">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </header>
      <img src={photo} alt="postimg" className="cardImg" />
      <footer className="footer_card">
        <div className="like_bar">
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="Icons likeIcon"
            style={likes.yourLike ? { color: "#20a1dd" } : {}}
            onClick={handleClick}
          />
          <span className="Likes">
            {likes.lengthLikes && likes.lengthLikes}
          </span>
          {console.log("statulbaa", likes)}
          <FontAwesomeIcon icon={faShareSquare} className="Icons" />
          <FontAwesomeIcon icon={faComment} className="Icons" />
          <FontAwesomeIcon
            icon={faThumbtack}
            className="Icons printIcon"
            style={printed && { color: "#444444" }}
          />
        </div>
        <div className="post-description-container">
          <img
            src={user.image ? user.image : PF + "user-avatar.png"}
            alt="avatar"
            className="avatarImageDescription"
          />
          <h5 className="username-description-heading">
            {user.name ? user.name : ""}
          </h5>{" "}
          <h5 className="post-description-heading">{description}</h5>
        </div>
        <div className="comments_container">
          {comments.length > 3 ? (
            <>
              {comments.slice(0, 3).map((elem, index) => {
                return (
                  <p key={index} className="comment_elem">
                    <span className="userComment">{elem.name}</span>
                    {": " + elem.comment}
                  </p>
                );
              })}
              <p className="Readmore">Read more</p>
            </>
          ) : (
            comments.map((elem, index) => {
              return (
                <p key={index} className="comment_elem">
                  <span className="userComment">{elem.name + ": "}</span>
                  {elem.comment}
                </p>
              );
            })
          )}
        </div>
        <div className="form_container">
          <form onSubmit={handleSubmit} className="commentForm">
            <FontAwesomeIcon icon={faSmile} className="Emoji" />
            <input
              type="text"
              placeholder="Add comment"
              className="commentInput"
            />
            <button type="submit" className="commentButton">
              Send
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Cards;
