import { AUTH, LOGOUT } from "../../actions/types"

const InitialState={
    name:'ddd',
    id:'123',
    friends:[],
    isAdmin:false,
    raiting:null,
}

export const Auth= (state=InitialState, action)=>{

    switch(action.type){
        case AUTH : 
        const {name, _id, friends, isAdmin}=action.payload
          return {
            name:name,
            id:_id,
            friends:friends,
            isAdmin:isAdmin
          }
        case LOGOUT:
          return InitialState
        default :
            return state    
            
    }

}