import { POST_INVITE } from "../Actions/index";
import {
  COLLECT_INVITE_CATEGORY_STATE,
  COLLECT_INVITE_DETAILS_STATE,
  COLLECT_INVITE_INVITED_USERS_STATE,
  FETCH_USER_INVITES,
  FETCH_USER_PLANS,
  ACCEPT_INVITE
} from "../Constants/actionCreators";

const INIT_STATE = {
  inviteCategory: "",
  inviteDetails: {},
  invitedUsers: [],
  pendingInvites: [],
  renderInvites: [],
  acceptedInvites: []
};

function inviteReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case COLLECT_INVITE_CATEGORY_STATE:
      return {
        ...state,
        inviteCategory: action.payload.category
      };
    case COLLECT_INVITE_DETAILS_STATE:
      return {
        ...state,
        inviteDetails: { ...action.payload.state }
      };
    case COLLECT_INVITE_INVITED_USERS_STATE:
      return {
        ...state,
        invitedUsers: action.payload
      };
    case POST_INVITE:
      return { ...state, invites: action.payload };
    case FETCH_USER_INVITES:
      return { ...state, pendingInvites: action.payload };
    case FETCH_USER_PLANS:
      return {
        ...state,
        renderInvites: action.payload.invitesToRender,
        acceptedInvites: action.payload.acceptedPlans
      };
    case ACCEPT_INVITE:
      return { ...state, pendingInvites: action.payload };
      break;
    default:
      return state;
  }
}

export { inviteReducer };
