import axios from 'axios'

import {
    AUTH,
    LOGOUT
} from './types'


export const AuthUser = (user)=>async dispatch=>{
    try{
        const res = !user.name ? await axios.post('/auth/Login', user) : await axios.post('/auth/Register', user)
        dispatch({type:AUTH, payload:res.data})
    }catch(err){
       console.log("EroareaLog", err)
    }
}
export const LogOut = ()=>{
    return {
        type:LOGOUT
    }
}