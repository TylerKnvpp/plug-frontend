import POST_INVITE from "../Actions/index";

export function postInvite(invite) {
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
