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
  title,
  photo,
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

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`/user/getUser/${userId}`);
      setUser({ ...user, image: data.profilePicture, name: data.name });
    };

    fetchUser();
  }, []);

  return (
    <div className="post_Card">
      <div className="header_card">
        <img
          src={user.image ? user.image : PF + "user-avatar.png"}
          alt="avatar"
          className="avatarImage"
        />
        <div className="headerUser">
          <h3>{user.name ? user.name : "nuuu"}</h3>
          <div className="location-and-posted-date">
            <p className="location-paragraph">{location} </p>{" "}
            <h5 className="created-at-heading">{format(createdAt)}</h5>
          </div>
        </div>
        <div className="stuffPost">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      <img src={photo} alt="postimg" className="cardImg" />
      <div className="footer_card">
        <div className="like_bar">
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="Icons likeIcon"
            style={like && { color: "#20a1dd" }}
          />
          <FontAwesomeIcon icon={faShareSquare} className="Icons" />
          <FontAwesomeIcon icon={faComment} className="Icons" />
          <FontAwesomeIcon
            icon={faThumbtack}
            className="Icons printIcon"
            style={printed && { color: "#444444" }}
          />
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
      </div>
    </div>
  );
};

export default Cards;
