import { FETCH_USERS, FRIEND_REQUEST } from "../Constants/actionCreators";

export function fetchUsers() {
  return function(dispatch) {
    return fetch("http://localhost:3000/users")
      .then(resp => resp.json())
      .then(res => {
        dispatch({ type: FETCH_USERS, payload: res });
      });
  };
}

export function addUser(request) {
  return function(dispatch) {
    return fetch(`http://localhost:3000/friends/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(request)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        dispatch({ type: FRIEND_REQUEST, payload: res });
      });
  };
}
