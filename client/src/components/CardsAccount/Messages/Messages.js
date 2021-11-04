import React from 'react'
import './messages.css'
const Messajes = ({name, message, data, checked, handleChange, id}) => {
    return (
        <div className="mess-container" style={{backgroundColor:'#ffff'}}>
            <div className="messLeft">
               <input type="checkbox" checked={checked} onChange={e=>{
                   handleChange(e, id)
               }}/>
               <span className="userName-mess">{name}</span>
            </div>
            <span className="messMid">{message}</span>
            <span className="messRight">{data}</span>
        </div>
    )
}

export default Messajes
