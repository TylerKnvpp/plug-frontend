import React from "react";
import { ScrollView, Text, StyleSheet, Button } from "react-native";
import FriendRequestContainer from "../Containers/FriendRequestContainer";

class FriendRequestsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Friend Requests",
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
  });
  render() {
    return (
      <ScrollView style={styles.container}>
        <FriendRequestContainer />
      </ScrollView>
    );
  }
}

export default FriendRequestsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#010112",
    height: "100%"
  }
});
