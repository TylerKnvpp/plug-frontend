import React from "react";
import { ScrollView, Button, StyleSheet } from "react-native";
import UserContainer from "../Containers/UserContainer";
import { connect } from "react-redux";
import InviteAddFriendsContainer from "../Containers/InviteAddFriendsContainer";
import { Ionicons } from "@expo/vector-icons";

class InviteAddFriendsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Friends",

    headerRight: (
      <Button
        title="Next"
        color="white"
        style={{ marginRight: 20 }}
        onPress={() => {
          navigation.navigate("InviteForm");
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
        <InviteAddFriendsContainer style={styles.container} />
      </ScrollView>
    );
  }
}

// const mdp = dispatch => {
//   return {
//     // fetchUsers: () => dispatch(fetchUsers())
//   };
// };

export default connect(
  null,
  null
)(InviteAddFriendsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010112",
    height: "100%"
  }
});
