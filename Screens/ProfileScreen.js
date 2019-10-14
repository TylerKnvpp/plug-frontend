import React from "react";
import { View } from "react-native";
import Profile from "../Components/Profile";
import { connect } from "react-redux";

class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        {/* <MainContainer> */}
        <Profile />
        {/* </MainContainer> */}
      </View>
    );
  }
}

export default ProfileScreen;
