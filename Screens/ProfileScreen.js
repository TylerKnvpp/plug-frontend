import React from "react";
import { View } from "react-native";
import Profile from "../Components/Profile";
import { connect } from "react-redux";

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile",
    headerStyle: {
      backgroundColor: "#010112",
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "900"
    }
  };

  render() {
    return (
      <View>
        <Profile />
      </View>
    );
  }
}

export default ProfileScreen;
