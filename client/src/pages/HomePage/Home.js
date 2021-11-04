import React from 'react'
import Header from '../../components/Header/HeaderHome'
import { dummyData } from '../../components/CardsHome/dummyData'
import { Cards } from '../../components/CardsHome/Cards'
import { category } from '../../components/CardsHome/category'
import './home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
          <div className="Home-container">
           <Header/>
          <div className="Home-mid-container">
               <div className="Home-Category">
                 <h1>
                     Category
                 </h1>
                 <ul>
                     {category.map((elem, index)=>{
                         return <Link to="/trending" className="Category-Element" key={index} style={{textDecoration:"none", color:"black"}}>
                         <img src={PF+elem.img} alt="category"/>
                         <li>{elem.name}</li>
                         </Link>
                     })}
                 </ul>
                 
               </div>
               <div className="Home-announces">
                  {dummyData.map(element=>{
                    
                     return <Cards
                       key={element.id} 
                       Name={element.name}
                       Price={element.price}
                       Description={element.description}
                       Img={PF+element.img}
                     />
                  })}
               </div>
          </div>  
          </div>
    )
}

export default Home
