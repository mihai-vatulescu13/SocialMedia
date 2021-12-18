import { GETUSER, EDITUSER } from "../actions/types";

const initialState = {
  //state content
  userName: "",
  userPicture: "",
  followers: [],
  followed: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETUSER:
      return {
        userName: action.payload.userName,
        userPicture: action.payload.userPicture,
        followers: action.payload.followers,
        followed: action.payload.followed,
      };
    case EDITUSER:
      return "";
    default:
      return state;
  }
};
