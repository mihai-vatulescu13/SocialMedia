import { combineReducers } from 'redux'
import { Auth } from './authReducers/auth'

export default combineReducers({
    auth: Auth 
})