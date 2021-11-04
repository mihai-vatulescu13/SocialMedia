import React, {useEffect, useRef, useState} from 'react'
import HeaderList  from './HeaderList'
import './header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"

const HeaderHome = () => {
    const [dropDown, setDropDown]=useState(false)
    const ref = useRef()
    
    useEffect(()=>{
        let lastScrollTop = 0;
        const handler= ()=>{
            setDropDown(false)
            let navbar = document.querySelector('.Header-Home')
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop
            if(scrollTop > lastScrollTop){
               navbar.classList.add('active')
            }else{
               navbar.classList.remove('active')
            }
            lastScrollTop =scrollTop;
         }


        window.addEventListener('scroll', handler)
        return ()=>{
            window.removeEventListener('scroll',handler)
        }
       
     },[])
     useEffect(()=>{
        const handler=event=>{
           if(ref.current && !ref.current.contains(event.target)){
               setDropDown(false)
           }
        }
        window.addEventListener('click', handler)
        return ()=>{
            window.removeEventListener('click',handler)
        }    
     },[dropDown])
     
    return (
        <div className="Header-Home">
            <div className="Header-items">
                <Link to="/" className="LogoLink"><span className="LogoHeader">Marco</span></Link>
                <div className="Header-windows">
                   <HeaderList List="windowHeader"/>
                </div>
                <div ref={ref} className="Header-mobile">
                 <div className={dropDown ? "DropDownButton Hover": "DropDownButton" } onClick={()=>{
                     setDropDown(!dropDown)
                 }}>
                  <FontAwesomeIcon icon={["far", "user"]}/><span className="SpanText">My account</span>
                 </div>
                 {dropDown &&  <div className="Header-DropDown">
                    <HeaderList/>
                 </div>}
                </div>
            </div>
        </div>
    )
}
export default HeaderHome
