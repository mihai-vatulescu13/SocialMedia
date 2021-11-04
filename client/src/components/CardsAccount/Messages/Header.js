import { useRef } from "react"

const Header = ({ handleChange, checkArray, deleteItems}) => {
    const ref=useRef()
    return (
    <div className="mess-container">
        <div className="messLeft">
           <input type="checkbox" ref={ref} onChange={e=>{
             handleChange(e,null)
           }}/>
           {checkArray.length ? <span className="userName-mess" onClick={()=>{
               deleteItems()
               if(ref.current.checked){
                ref.current.checked=false
               }
           }} style={{cursor:'pointer'}}>Delete All</span>:<span className="userName-mess">User name</span>}
        </div>
        <span className="messMid">Annouces</span>
        <span className="messRight">Date</span>
    </div>
    )
}

export default Header
