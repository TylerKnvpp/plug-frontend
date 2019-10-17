import {
  FETCH_FRIEND_REQUESTS,
  ACCEPT_FRIEND_REQUEST
} from "../Constants/actionCreators";

const INIT_STATE = {
  requests: [],
  updatedFriendsCollection: []
};

export function FriendshipReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FETCH_FRIEND_REQUESTS:
      return { ...state, requests: action.payload };
    case ACCEPT_FRIEND_REQUEST:
      return { ...state };
    default:
      return state;
      break;
  }
}
