import React from 'react'
import Header from '../../../components/Header/HeaderHome'
import FormsStatic from '../../../components/StaticForms/Forms'
import './add.css'
const Add = () => {
    return (
        <div className="BodyContainer">
            <Header/>
            <div className="Mid_Container">
              <div className="titleContainer">
                 <span className="titleAdd">Add new ad</span>  
              </div>
               <FormsStatic/> 
            </div>
        </div>
    )
}

export default Add
