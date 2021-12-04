import HomeNaV from "../../components/homeNav/HomeNav";
import Card from "../../components/homeCards/Cards";
import { objCards, ownUser } from "../../components/testData/homeCard";
import "./home.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      setPosts(await axios.get("/post/getPosts"));
    };
    fetch();
  }, []);

  return (
    <div className="home_container">
      <div className="body-container">
        <HomeNaV />
        <div className="flow-posts">
          {objCards.map((elem, index) => {
            return (
              <Card
                key={index}
                title={elem.name}
                photo={elem.photo}
                location={elem.location}
                like={elem.like}
                printed={elem.printed}
              />
            );
          })}
        </div>
        <div className="users-sugestion">
          <div className="ownerUser">
            <img src={ownUser.photo} alt="avatar" className="ownerImage" />
            <div className="ownerInfo">
              <p className="titleName ">{ownUser.name}</p>
              <span className="subTitle">{ownUser.location}</span>
            </div>
            <Link to="/" className="buttonAccount">
              Switch
            </Link>
          </div>
          <div className="suggestions">
            <div className="suggestionItems">
              <span style={{ marginLeft: "0.5em", fontWeight: "600" }}>
                Suggestions for you
              </span>
              <Link to="/" className="buttonAccount">
                See all
              </Link>
            </div>
            {objCards.map((elem, index) => {
              return (
                <div key={index} className="Users">
                  <img src={elem.photo} alt="avatar" className="usersImage" />
                  <div className="ownerInfo">
                    <p className="titleName ">{elem.name}</p>
                    <span className="subTitle">Suggested for you</span>
                  </div>
                  <Link to="/" className="buttonAccount">
                    Follow
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.AuthReducer._id,
  };
};
export default connect(mapStateToProps)(Home);
