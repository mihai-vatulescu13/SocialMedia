import React, { useRef, useState } from 'react'
import {connect} from 'react-redux'
import { AuthUser } from '../../actions'
import Header from '../../components/Header/HeaderHome'
import './auth.css'
const Auth = (props) => {
    const [pages, setPages]=useState("Login")
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const { AuthUser }=props
    const HandlerChange = (e)=>{
      e.preventDefault()
      if(pages==="Register"){
          const user = {
              name:name.current.value,
              email:email.current.value,
              password:password.current.value
          }
          AuthUser(user)
      }else{
          const user = {
              email:email.current.value,
              password:password.current.value
          }
          AuthUser(user)
      }
    }
    return (
            <div className="Auth-Container">
              <Header/>
            <div className="Auth-Mid">
              <nav className="Auth-Pages">
                  <div className="HeaderAuth" onClick={()=>setPages("Login")}>
                      <h3>Login</h3>
                  </div>
                  <div className="HeaderAuth" onClick={()=>setPages("Register")}>
                      <h3>Register</h3>
                  </div>
              </nav>
               {pages==="Login"?<form onSubmit={HandlerChange} className="authForms">
                  <input className="Auth-inputs" placeholder="Email" ref={email} type="email" required/>
                  <input className="Auth-inputs" placeholder="Password" minLength="6" ref={password} type="password" required/>
                  <button className="AuthButton" type="submit">{pages}</button>
               </form>:<form onSubmit={HandlerChange} className="authForms">
                  <input className="Auth-inputs" placeholder="Name" ref={name} type="text" required/>
                  <input className="Auth-inputs" placeholder="Email" ref={email} type="email" required/>
                  <input className="Auth-inputs" placeholder="Password" minLength="6" ref={password} type="password" required/>
                  <button className="AuthButton" type="submit">{pages}</button>
               </form>
               }

            </div>
        </div>
    )
}
const mapStateToProps= state =>{
    return {
      user: state.auth
    }
}
const mapDispatchToProps= dispatch =>{
    return {
        AuthUser:(user)=> dispatch(AuthUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
