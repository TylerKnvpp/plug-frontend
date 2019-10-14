import React from "react";
import { View } from "react-native";
import MainContainer from "../Containers/MainContainer";
import Login from "../Components/Login";

class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <Login />
      </View>
    );
  }
}

export default LoginScreen;
