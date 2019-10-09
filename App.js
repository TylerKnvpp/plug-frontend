import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import MainContainer from "./Containers/MainContainer";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { logger } from "redux-logger";
import Reducers from "./Reducers/index.js";
import { Provider } from "react-redux";

export default class App extends React.Component {
  state = {
    loggedInUser: ""
  };

  componentDidMount() {
    return fetch("http://localhost:3000/users/5")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            loggedInUser: responseJson
          },
          function() {}
        );
        console.log(this.state.loggedInUser);
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleSignUp = data => {
    console.log("sign up form callback", data);
  };

  render() {
    return (
      // <Provider
      //   store={createStore(Reducers, {}, applyMiddleware(ReduxThunk, logger))}
      // >
      <View style={styles.container}>
        <MainContainer handleSignUp={this.handleSignUp} />
      </View>
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010112",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 24,
    fontWeight: "700"
  }
});
