import React from "react";
import { View } from "react-native";
import MainContainer from "../Containers/MainContainer";
import Profile from "../Components/Profile";
import UsersIndexScreen from "../Screens/UsersIndexScreen";
import { connect } from "react-redux";

class PlansScreen extends React.Component {
  render() {
    return (
      <View>
        <Profile />
      </View>
    );
  }
}

const msp = state => {
  return {
    user: state.auth.userObj
  };
};

export default connect(
  msp,
  null
)(PlansScreen);
