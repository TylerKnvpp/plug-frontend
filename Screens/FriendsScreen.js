import React from "react";
import { ScrollView, Button, StyleSheet } from "react-native";
import UserContainer from "../Containers/UserContainer";
import { connect } from "react-redux";
import FriendsContainer from "../Containers/FriendsContainer";
import { Ionicons } from "@expo/vector-icons";

// class SearchIcon extends React.Component {
//   handlePress = e => {
//     this.props.navigation.navigate("Users");
//   };
//   render() {
//     return (
//       <Ionicons
//         name="ios-search"
//         style={{ marginRight: 20 }}
//         size={24}
//         color="white"
//       />
//     );
//   }
// }

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

  componentDidMount() {
    // this.props.fetchUsers();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <FriendsContainer style={styles.container} />
      </ScrollView>
    );
  }
}

const mdp = dispatch => {
  return {
    // fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  null,
  mdp
)(FriendsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010112",
    height: "100%"
  }
});
