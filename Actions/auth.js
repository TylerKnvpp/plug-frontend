import {
  USER_SIGN_UP,
  USER_LOGIN,
  FETCH_USER
} from "../Constants/actionCreators";
import { AsyncStorage } from "react-native";

export function userSignUp(user) {
  return function(dispatch) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(res => {
        //
        const signedUpUser = JSON.stringify(res);
        //
        AsyncStorage.setItem("loggedInUser", signedUpUser);
        //
        dispatch({ type: USER_SIGN_UP, payload: res });
        //
      });
  };
}

export function userLogin(user) {
  return function(dispatch) {
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(res => {
        const loggedInUser = JSON.stringify(res);
        //
        AsyncStorage.setItem("loggedInUser", loggedInUser);
        //
        dispatch({ type: USER_LOGIN, payload: res });
        //
      });
  };
}

export function getUserProfile(id) {
  return function(dispatch) {
    return fetch(`http://localhost:3000/users/${id}`)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: FETCH_USER, payload: data });
      });
  };
}
