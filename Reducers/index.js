import { combineReducers } from "redux";
import { authReducer } from "./AuthReducer";
import { FETCH_USER } from "../Constants/actionCreators";

const INIT_STATE = {
  user: {}
};

export function fetchReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      break;
  }
  return state;
}

export const rootReducer = combineReducers({
  fetch: fetchReducer,
  auth: authReducer
});
