import {
  POST_INVITE,
  COLLECT_INVITE_CATEGORY_STATE,
  COLLECT_INVITE_DETAILS_STATE,
  COLLECT_INVITE_INVITED_USERS_STATE
} from "../Constants/actionCreators";

export function postInvite(invite) {
  console.log(invite);
  return function(dispatch) {
    return fetch("http://localhost:3000/invites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(invite)
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: POST_INVITE, payload: data });
      });
  };
}

export const collectInviteStateCategory = data => ({
  type: COLLECT_INVITE_CATEGORY_STATE,
  payload: data
});

export const collectInviteStateDetails = data => ({
  type: "COLLECT_INVITE_DETAILS_STATE",
  payload: data
});

export const collectInviteStateUsersInvited = data => ({
  type: COLLECT_INVITE_INVITED_USERS_STATE,
  payload: data
});
