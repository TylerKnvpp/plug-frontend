import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import SignUp from "../Components/SignUp";
// import FormikSignUp from "../Components/FormikSignUp";

export default class MainContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Sign Up!</Text>
        <SignUp handleSignUp={this.props.handleSignUp} />
        {/* <FormikSignUp /> */}
      </View>
    );
  }
}

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
