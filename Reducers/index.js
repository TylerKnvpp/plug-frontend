import { combineReducers } from "redux";
import { authReducer } from "./AuthReducer";
import { UserReducer } from "./UserReducer";
import { FETCH_USER, UPDATE_PROFILE } from "../Constants/actionCreators";
import { inviteReducer } from "./InviteReducer";
import { FriendshipReducer } from "./FriendshipReducer";

const INIT_STATE = {
  user: {}
};

export function fetchReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case UPDATE_PROFILE:
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
  auth: authReducer,
  invite: inviteReducer,
  users: UserReducer,
  friends: FriendshipReducer
});
