import React from "react";
import { StyleSheet, View } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./Reducers/index.js";
import { Provider } from "react-redux";
import { AsyncStorage } from "react-native";
import AppNavigator from "./Navigators/IndexNavigator";

// reactotron
if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk)));
export { store };
window.store = store.getState();

class App extends React.Component {
  // componentDidMount() {
  //   AsyncStorage.getItem("loggedInUser").then(json => {
  //     try {
  //       const user = JSON.parse(json);
  //       if (user) {
  //         // this.props.fetchProfile(user.id);

  //       }
  //     } catch (e) {
  //     }
  //   });
  // }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;

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
