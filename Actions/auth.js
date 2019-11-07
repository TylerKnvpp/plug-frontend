import {
  USER_SIGN_UP,
  USER_LOGIN,
  FETCH_USER,
  URL
} from "../Constants/actionCreators";
import { AsyncStorage } from "react-native";

export function userSignUp(user) {
  return function(dispatch) {
    return fetch(`${URL}users`, {
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
        _storeData = async () => {
          try {
            await AsyncStorage.setItem("loggedInUser", signedUpUser);
          } catch (error) {
            // Error saving data
            console.log(error);
          }
        };
        this._storeData();
        //
        dispatch({ type: USER_SIGN_UP, payload: res });
        //
      });
  };
}

export function userLogin(user) {
  return function(dispatch) {
    return fetch(`${URL}login`, {
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
        _storeData = async () => {
          try {
            await AsyncStorage.setItem("loggedInUser", loggedInUser);
          } catch (error) {
            // Error saving data
            console.log(error);
          }
        };
        this._storeData();
        //
        dispatch({ type: USER_LOGIN, payload: res });
        //
      });
  };
}

export function getUserProfile(id) {
  return function(dispatch) {
    return fetch(`${URL}users/${id}`)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: FETCH_USER, payload: data });
      });
  };
}
