import HomeNaV from '../../components/homeNav/HomeNav';
import Card from './Cards';
import { objCards } from '../../components/testData/homeCard';
import './home.css';
export default function Home() {
  return (
    <div className="home_container">
      <HomeNaV />
      <div className="body-container">
        <div className="flow-posts">
          {objCards.map((elem, index) => {
            return <Card key={index} title={elem.name} photo={elem.photo} />;
          })}
        </div>
        <div className="users-sugestion"></div>
      </div>
    </div>
  );
}
