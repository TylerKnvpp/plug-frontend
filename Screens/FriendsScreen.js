import React from "react";
import { ScrollView, Button, StyleSheet } from "react-native";
import UserContainer from "../Containers/UserContainer";
import { connect } from "react-redux";
import FriendsContainer from "../Containers/FriendsContainer";
import { Ionicons } from "@expo/vector-icons";

class FriendsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Friends",
    headerLeft: (
      <Ionicons
        name="ios-person-add"
        style={{ marginLeft: 20 }}
        size={30}
        color="white"
        onPress={() => {
          navigation.navigate("FriendRequests");
        }}
      />
    ),
    headerRight: (
      <Ionicons
        name="ios-search"
        style={{ marginRight: 20 }}
        size={24}
        color="white"
        onPress={() => {
          navigation.navigate("Users");
        }}
      />
    ),
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
        <FriendsContainer style={styles.container} />
      </ScrollView>
    );
  }
}

export default FriendsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010112",
    height: "100%"
  }
});
