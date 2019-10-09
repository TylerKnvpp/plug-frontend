import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

export const Reducers = combineReducers({
  auth: AuthReducer
});
