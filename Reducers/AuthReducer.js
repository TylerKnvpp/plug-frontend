import {
  USER_SIGN_UP,
  USER_LOGIN,
  FETCH_USER
} from "../Constants/actionCreators";
import { AsyncStorage } from "react-native";

const INITIAL_STATE = {
  id: null,
  token: {},
  user: {},
  userObj: {}
};

function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_SIGN_UP:
      return {
        ...state,
        id: action.payload.user.id,
        // username: action.payload.username,
        token: action.payload.user.token
      };
    case USER_LOGIN:
      // console.log("login payload", action.payload.id);
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token,
        user: action.payload
      };
    case FETCH_USER:
      return {
        ...state,
        userObj: action.payload
      };
    default:
      return state;
  }
}

export { authReducer };
