import HomeNaV from "../../components/homeNav/HomeNav";
import Card from "./Cards";
import { objCards } from "../../components/testData/homeCard";
import "./home.css";
export default function Home() {
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
              />
            );
          })}
        </div>
        <div className="users-sugestion"></div>
      </div>
    </div>
  );
}
