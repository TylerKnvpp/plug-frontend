import { USER_SIGN_UP, USER_LOGIN } from "../Constants/actionCreators";
import { AsyncStorage } from "react-native";

const INITIAL_STATE = {
  id: null,
  token: {}
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
        token: action.payload.user.token
      };
    default:
      return state;
  }
}

export { authReducer };
