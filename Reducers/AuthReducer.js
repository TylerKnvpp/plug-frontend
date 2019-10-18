import {
  USER_SIGN_UP,
  USER_LOGIN,
  FETCH_USER
} from "../Constants/actionCreators";
import { AsyncStorage } from "react-native";

const INITIAL_STATE = {
  id: null,
  token: {},
  user: {}
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
      return {
        ...state,
        id: action.payload.user.id,
        token: action.payload.user.token,
        user: action.payload.user
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}

export { authReducer };
