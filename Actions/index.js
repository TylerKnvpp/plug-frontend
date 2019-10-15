import { INITIAL_FETCH, UPDATE_PROFILE } from "../Constants/actionCreators";

export function getData() {
  return function(dispatch) {
    return fetch("http://localhost:3000/users")
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "INITIAL_FETCH", payload: data });
      });
  };
}

export function updateProfile(user) {
  return function(dispatch) {
    return fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(user.data)
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: UPDATE_PROFILE, payload: data });
      });
  };
}
