import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import SignUp from "../Components/SignUp";

export default class DelegationContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainContainer />
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
