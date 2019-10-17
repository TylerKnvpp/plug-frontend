import React from "react";
import { ScrollView } from "react-native";
import UserContainer from "../Containers/UserContainer";
import { connect } from "react-redux";
import { fetchUsers } from "../Actions/friendship";
import { Ionicons } from "@expo/vector-icons";

class UsersIndexScreen extends React.Component {
  static navigationOptions = {
    title: "Users",
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
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <ScrollView>
        <UserContainer />
      </ScrollView>
    );
  }
}

const mdp = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  null,
  mdp
)(UsersIndexScreen);
