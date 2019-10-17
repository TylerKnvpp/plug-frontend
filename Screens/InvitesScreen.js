import React from "react";
import { View } from "react-native";
import MainContainer from "../Containers/MainContainer";
import Profile from "../Components/Profile";
import UsersIndexScreen from "../Screens/UsersIndexScreen";

class PlansScreen extends React.Component {
  render() {
    return (
      <View>
        <Profile />
      </View>
    );
  }
}

export default PlansScreen;
