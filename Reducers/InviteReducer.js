import POST_INVITE from "../Actions/index";

const INIT_STATE = {
  invites: []
};

function inviteReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case POST_INVITE:
      return { ...state, invites: action.payload };
      break;
    default:
      return state;
  }
}

export { inviteReducer };
