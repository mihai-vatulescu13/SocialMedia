import './cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisH,
  faShareSquare,
  faThumbtack,
} from '@fortawesome/free-solid-svg-icons';
import {
  faComment,
  faThumbsUp,
  faSmile,
} from '@fortawesome/free-regular-svg-icons';
import { comments } from '../../components/testData/homeCard';

const Cards = ({ title, photo, location, like, printed }) => {
  const PF = process.env.REACT_APP_ASSETS;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="post_Card">
      <div className="header_card">
        <img src={PF + '4.jpg'} alt="avatar" className="avatarImage" />
        <div className="headerUser">
          <h3>{title}</h3>
          <p>{location}</p>
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
            style={like && { color: '#20a1dd' }}
          />
          <FontAwesomeIcon icon={faShareSquare} className="Icons" />
          <FontAwesomeIcon icon={faComment} className="Icons" />
          <FontAwesomeIcon
            icon={faThumbtack}
            className="Icons printIcon"
            style={printed && { color: '#444444' }}
          />
        </div>
        <div className="comments_container">
          {comments.length > 3 ? (
            <>
              {comments.slice(0, 3).map((elem, index) => {
                return (
                  <p key={index} className="comment_elem">
                    <span className="userComment">{elem.name}</span>
                    {': ' + elem.comment}
                  </p>
                );
              })}
              <p className="Readmore">Read more</p>
            </>
          ) : (
            comments.map((elem, index) => {
              return (
                <p key={index} className="comment_elem">
                  <span className="userComment">{elem.name + ': '}</span>
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
