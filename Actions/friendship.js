import {
  FETCH_USERS,
  FRIEND_REQUEST,
  FETCH_FRIEND_REQUESTS,
  ACCEPT_FRIEND_REQUEST
} from "../Constants/actionCreators";

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
        // console.log(res);
        dispatch({ type: FRIEND_REQUEST, payload: res });
      });
  };
}

export function fetchFriendRequests(id) {
  return function(dispatch) {
    return fetch(`http://localhost:3000/users/${id}/friends`)
      .then(resp => resp.json(id))
      .then(res => {
        dispatch({ type: FETCH_FRIEND_REQUESTS, payload: res });
      });
  };
}

export function acceptFriendRequest(users) {
  console.log(users);
  return function(dispatch) {
    return fetch(
      `http://localhost:3000/users/${users.user_id}/friends/${users.friend}/add-friend/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify()
      }
    )
      .then(res => res.json(users))
      .then(res => {
        console.log(res);
        dispatch({ type: ACCEPT_FRIEND_REQUEST, payload: res });
      });
  };
}
