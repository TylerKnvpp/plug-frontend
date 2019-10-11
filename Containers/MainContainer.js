import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import SignUp from "../Components/SignUp";
import { createSwitchNavigator } from "react-navigation";
import SignUpScreen from "../VIEWS/SignUpScreen";
import { connect } from "react-redux";
import { getData } from "../Actions/index";
import Profile from "../Components/Profile";
import Login from "../Components/Login";

class MainContainer extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    // console.log(this.props);
    return (
      <View style={styles.container}>
        {/* <SignUp /> */}
        <Login />
        {/* <Profile /> */}
      </View>
    );
  }
}

const mdp = dispatch => {
  return {
    getData: () => dispatch(getData())
  };
};

export default connect(
  null,
  mdp
)(MainContainer);

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
