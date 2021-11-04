import { useState } from 'react'
import {dummyData} from '../../components/CardsHome/dummyData'
import {messages} from '../../components/CardsAccount/Messages/messagesData'
import HeaderMessage from '../../components/CardsAccount/Messages/Header'
import Annouces from '../../components/CardsAccount/Announces/Announces'
import Messages from '../../components/CardsAccount/Messages/Messages'
import Header from '../../components/Header/HeaderHome'
import './myAccount.css'
const MyAccount = () => {
    const array=['announces','messages', 'wishlist', 'settings']
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [section, setSection]=useState('announces')
    const [messagesObj, setMessages]=useState(messages)
    const [checkArray, setCheck]=useState([])

    const deleteItems =()=>{
       setMessages(prevValue=>{
         return prevValue.filter(elem=>{
          return checkArray.find(element=> elem.id === element.id)===undefined
        })
      })
      setCheck([])
    }

    const handleChange=(e, id)=>{
       if(id!==null){
          setMessages(prevValue=>{
              return prevValue.map((elem, index)=>{
                 if(id===index){

                    if(e.target.checked){
                       setCheck(initialValue=>{
                          return [...initialValue, elem]
                       })
                    }else{
                       setCheck(initialValue=>{
                          return initialValue.filter(element=>{
                             return element.id!==elem.id
                          })
                       })
                    }

                    return {
                       ...elem,
                       checked:e.target.checked
                    }
                 }
                 else{
                    return elem
                 }
              })
          })

       }else{
          if(e.target.checked){
             setCheck(messagesObj)
          }else{
             setCheck([])
          }
       setMessages(prevValue=>{
         return prevValue.map(elem=>{
            return {
               ...elem,
               checked:e.target.checked
            }
          })
       })
      }
    }

    return (
        <div className="My-Background">
        <Header/>
         <div className="My-Container">
            <div className="Middle-Header">
                <span className="Middle-Title">Your ads</span>
               <div className="Nav-Middle">
                <div className="Middle-List">
                   <ul>
                      {array.map((elem, index)=>{
                        return <li onClick={()=>{
                           setSection(elem)
                        }} key={index} className={section===elem ? 'CurrentSection' : 'OtherSection'}>{elem}</li>
                      })}
                   </ul>
                </div>
               </div>
            </div>
            <div className="Ads-container">
              {section==='announces' ? dummyData.map((elem, index)=>{
                 return <Annouces
                    name={elem.name}
                    price={elem.price}
                    description={elem.description}
                    img={PF + elem.img}
                    key={index}
                  
                 />
              }):section==='wishlist' ? dummyData.map((elem, index)=>{
                 return <Annouces
                    name={elem.name}
                    price={elem.price}
                    description={elem.description}
                    img={PF + elem.img}
                    key={index}
                  />
              }):section==='messages' ? <>
                  <HeaderMessage handleChange={handleChange} checkArray={checkArray} deleteItems={deleteItems}/>
                  {
                     messagesObj.map((elem, index)=>{
                       return <Messages
                           name={elem.name} 
                           message={elem.message} 
                           data={elem.data}
                           checked={elem.checked}
                           handleChange={handleChange}
                           id={index}
                           key={index}
                        />
                     })
                     
                  } 
               </>:null}
            </div>
         </div>  
        </div>
    )
}

export default MyAccount
