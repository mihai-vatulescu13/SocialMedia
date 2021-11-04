import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {useParams} from "react-router"
import { LogOut } from '../../actions'
import './header.css'
const HeaderList = ({List, user, LogOut}) => {
    const param = useParams()
    return (
         <ul>
           <Link to= {user.name ? ``:"/authPage"} className="elementslink">
             <li><FontAwesomeIcon icon={["far", "comment-dots"]}/><span className="Header-Element">Messages</span></li>
           </Link>
           <Link to= {user.name ? ``:"/authPage"} className="elementslink">
             <li><FontAwesomeIcon icon={["far", "heart"]}/><span className="Header-Element">Favourite</span></li>
           </Link>
           <Link to={user.id===param.id ? "/" : "/authPage"} className="elementslink" onClick={()=>{
             if(param.id)
             {
              LogOut()
             }
           }}>
             <li><FontAwesomeIcon icon={["far", "user"]}/><span className="Header-Element">{user.id===param.id ? "Log out": List==="windowHeader" ? "My account" : "User"}</span><span style={{fontSize: "18px", marginRight:"10px"}}></span></li>
           </Link>
           <Link to= {user.name ? `Add/${user.id}`:"/authPage"} className="elementslink">
             <li>Add new ad</li>
           </Link>       
        </ul>
    )
}
const mapStateToProps= state=>{
    return {
        user: state.auth
    }
}
const mapDispatchToProps= dispatch=>{
    return {
        LogOut:()=>dispatch(LogOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderList)
