import { POST_INVITE } from "../Actions/index";
import {
  COLLECT_INVITE_CATEGORY_STATE,
  COLLECT_INVITE_DETAILS_STATE,
  COLLECT_INVITE_INVITED_USERS_STATE
} from "../Constants/actionCreators";

const INIT_STATE = {
  inviteCategory: "",
  inviteDetails: {},
  invitedUsers: []
};

function inviteReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case COLLECT_INVITE_CATEGORY_STATE:
      return {
        state,
        inviteCategory: action.payload
      };
    case COLLECT_INVITE_DETAILS_STATE:
      return {
        state,
        inviteDetails: { ...action.payload.state }
      };
    case COLLECT_INVITE_INVITED_USERS_STATE:
      console.log(action.payload);
      return {
        state,
        invitedUsers: action.payload
      };
    case POST_INVITE:
      return { ...state, invites: action.payload };
      break;
    default:
      return state;
  }
}

export { inviteReducer };
