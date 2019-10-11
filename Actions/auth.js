import { USER_SIGN_UP, USER_LOGIN } from "../Constants/actionCreators";
import { AsyncStorage } from "react-native";

export function userSignUp(user) {
  console.log(user);
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
        console.log(signedUpUser);
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
        console.log(loggedInUser);
        AsyncStorage.setItem("loggedInUser", loggedInUser);
        //
        dispatch({ type: USER_LOGIN, payload: res });
        //
      });
  };
}
