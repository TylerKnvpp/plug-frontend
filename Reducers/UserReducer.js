import { fetchUsers } from "../Actions/friendship";
import { FETCH_USERS } from "../Constants/actionCreators";

const INIT_STATE = {
  users: [],
  usersInvites: [],
  usersPlans: []
};

function UserReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
      break;

    default:
      return state;
      break;
  }
}

export { UserReducer };
