import React from "react";
import { View } from "react-native";
import MainContainer from "../Containers/MainContainer";
import SignUp from "../Components/SignUp";

class SignUpScreen extends React.Component {
  render() {
    return (
      <View>
        {/* <MainContainer> */}
        <SignUp />
        {/* </MainContainer> */}
      </View>
    );
  }
}

export default SignUpScreen;
