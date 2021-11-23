import './home.css';
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
const Cards = ({ title, photo, location }) => {
  const PF = process.env.REACT_APP_ASSETS;
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
          <FontAwesomeIcon icon={faThumbsUp} className="Icons" />
          <FontAwesomeIcon icon={faShareSquare} className="Icons" />
          <FontAwesomeIcon icon={faComment} className="Icons" />
          <FontAwesomeIcon icon={faThumbtack} className="Icons printIcon" />
        </div>
        <div className="comments">
          <form>
            <FontAwesomeIcon icon={faSmile} />
            <input type="text" placeholder="Add comment" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cards;
