import HomeNaV from "../../components/homeNav/HomeNav";
import Card from "../../components/homeCards/Cards";
import { objCards, ownUser } from "../../components/testData/homeCard";
import "./home.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function Home({ userId }) {
  const [posts, setPosts] = useState(null);
  const [user, setUser] = useState({
    image: "",
    name: "",
    followingUsers: [],
  });

  const PF = process.env.REACT_APP_ASSETS;

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("/post/getPosts");
      setPosts(data);
    };

    const fetchCurrentUserData = async (userId) => {
      const { data } = await axios.get(`/user/getUser/${userId}`);
      setUser((prevValue) => {
        return {
          ...prevValue,
          image: data.profilePicture,
          name: data.name,
          followingUsers: data.following.map((user) => user._id),
        };
      });
    };

    fetchCurrentUserData(userId);
    fetchPosts();
  }, [userId]);

  return (
    <div className="home_container">
      <div className="body-container">
        <HomeNaV />
        {posts ? (
          <div className="flow-posts">
            {/* {console.log("just psts:", user.followingUsers)} */}
            {posts
              .filter(
                (elem) =>
                  elem.userId !== userId &&
                  user.followingUsers.includes(elem.userId)
              )
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((elem, index) => {
                return (
                  <Card
                    key={index}
                    description={elem.description}
                    photo={elem.image}
                    location={elem.location}
                    like={elem.likes}
                    printed={elem.printed}
                    createdAt={elem.createdAt}
                    userId={elem.userId}
                    postId={elem._id}
                  />
                );
              })}
          </div>
        ) : (
          <h1>Loading ...</h1>
        )}
        <div className="users-sugestion">
          <div className="ownerUser">
            <img
              src={user.image ? user.image : PF + "user-avatar.png"}
              alt="avatar"
              className="ownerImage"
            />
            <div className="ownerInfo">
              <Link to={`/userAccountPage`} className="username-style">
                <p className="titleName ">
                  {user.name ? user.name : "Loading..."}
                </p>
              </Link>
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
    userId: state.AuthReducer._id,
  };
};
export default connect(mapStateToProps)(Home);
