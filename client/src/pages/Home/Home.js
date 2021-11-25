import HomeNaV from '../../components/homeNav/HomeNav';
import Card from '../../components/homeCards/Cards';
import { objCards, ownUser } from '../../components/testData/homeCard';
import './home.css';
export default function Home() {
  return (
    <div className="home_container">
      <HomeNaV />
      <div className="body-container">
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
            <a href="/" className="buttonAccount">
              Switch
            </a>
          </div>
          <div className="suggestions">
            <div className="suggestionItems">
              <span style={{ marginLeft: '0.5em', fontWeight: '600' }}>
                Suggestions for you
              </span>
              <a href="/" className="buttonAccount">
                See all
              </a>
            </div>
            {objCards.map((elem, index) => {
              return (
                <div key={index} className="Users">
                  <img src={elem.photo} alt="avatar" className="usersImage" />
                  <div className="ownerInfo">
                    <p className="titleName ">{elem.name}</p>
                    <span className="subTitle">Suggested for you</span>
                  </div>
                  <a href="/" className="buttonAccount">
                    Follow
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
