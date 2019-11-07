import {
  FETCH_USERS,
  FRIEND_REQUEST,
  FETCH_FRIEND_REQUESTS,
  ACCEPT_FRIEND_REQUEST,
  FETCH_FRIENDS,
  URL
} from "../Constants/actionCreators";

export function fetchUsers() {
  return function(dispatch) {
    return fetch(`${URL}users`)
      .then(resp => resp.json())
      .then(res => {
        dispatch({ type: FETCH_USERS, payload: res });
      });
  };
}

export function addUser(request) {
  return function(dispatch) {
    return fetch(`${URL}friends/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(request)
    })
      .then(res => res.json())
      .then(res => {
        dispatch({ type: FRIEND_REQUEST, payload: res });
      });
  };
}

export function fetchFriendRequests(id) {
  return function(dispatch) {
    return fetch(`${URL}users/${id}/friends`)
      .then(resp => resp.json(id))
      .then(res => {
        dispatch({ type: FETCH_FRIEND_REQUESTS, payload: res });
      });
  };
}

export function acceptFriendRequest(users) {
  return function(dispatch) {
    return fetch(
      `${URL}users/${users.user_id}/friends/${users.friend}/add-friend/`,
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
        dispatch({ type: ACCEPT_FRIEND_REQUEST, payload: res });
      });
  };
}

export function fetchFriends(id) {
  return function(dispatch) {
    return fetch(`${URL}users/${id}/friends`)
      .then(resp => resp.json(id))
      .then(res => {
        dispatch({ type: FETCH_FRIENDS, payload: res });
      });
  };
}
