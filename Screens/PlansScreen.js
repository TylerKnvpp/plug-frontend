import React from "react";
import { View } from "react-native";
import MainContainer from "../Containers/MainContainer";
import Profile from "../Components/Profile";

class PlansScreen extends React.Component {
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

export default PlansScreen;
