import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import MainContainer from "./Containers/MainContainer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./Reducers/index.js";
import { Provider } from "react-redux";
import { AsyncStorage } from "react-native";
import reactotron from "reactotron-react-native";

//
// reactotron
if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}
//
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk)));

export { store };

window.store = store.getState();

class App extends React.Component {
  componentDidMount() {
    AsyncStorage.getItem("loggedInUser").then(json => {
      try {
        const token = JSON.parse(json);
        console.log("token:", token);
      } catch (e) {
        console.log(e);
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <MainContainer />
        </Provider>
      </View>
    );
  }
}

export default App;

// const mdp = dispatch => {
//   return {
//     fetchData: () => dispatch(getData())
//   };
// };

// export default connect(
//   null,
//   mdp
// )(App);

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
