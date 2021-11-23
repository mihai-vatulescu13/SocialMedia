import './home.css';
const Cards = ({ title, photo }) => {
  return (
    <div className="post_Card">
      <h3>{title}</h3>
      <img src={photo} alt="postimg" className="cardImg" />
    </div>
  );
};

export default Cards;
