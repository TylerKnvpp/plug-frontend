import React from "react";
import { ScrollView, Button, StyleSheet } from "react-native";
import UserContainer from "../Containers/UserContainer";
import { connect } from "react-redux";
import FriendsContainer from "../Containers/FriendsContainer";

class FriendsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Friends",
    headerLeft: (
      <Button
        onPress={() => {
          navigation.navigate("FriendRequests");
        }}
        title="Requests"
        color="#fff"
      />
    ),
    headerRight: (
      <Button
        onPress={() => {
          navigation.navigate("Users");
        }}
        title="Search"
        color="#fff"
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
