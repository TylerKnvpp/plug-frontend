import { combineReducers } from "redux";
import { authReducer } from "./AuthReducer";
import INITIAL_FETCH from "../Constants/actionCreators";

const INIT_STATE = {
  users: []
};

export function fetchReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "INITIAL_FETCH":
      return { ...state, users: action.payload };

    default:
      break;
  }
  return state;
}

export const rootReducer = combineReducers({
  fetch: fetchReducer,
  auth: authReducer
});
