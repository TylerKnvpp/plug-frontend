import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { fetchUsers } from "../Actions/friendship";
import UserIndexCard from "../Components/UserIndexCard";

class UserContainer extends React.Component {
  state = {
    users: [],
    search: ""
  };

  componentDidUpdate() {
    //   pull user collection down from redux
    const userCollection = [...this.props.users];
    // sort user collection
    const sortedUsers = userCollection.sort((a, b) =>
      a.firstname !== b.full_name ? (a.full_name < b.full_name ? -1 : 1) : 0
    );
    // conditional to avoid infinite loop + setState
    if (this.state.users.length === 0) {
      this.setState({
        users: sortedUsers
      });
    }
  }

  handleChange = textValue => {
    textValue = textValue.toLowerCase();
    this.setState({
      search: textValue
    });
  };

  filterCollection = () => {
    // if (this.state.users > 0) {
    //   //   console.log(this.state.users);
    //   return this.state.users.filter(user =>
    //     user.username.toLowerCase().includes(this.state.search.toLowerCase())
    //   );
    // }
  };

  render() {
    let renderUsers;

    if (this.state.users.length !== 0) {
      renderUsers = this.state.users.map(userObj => {
        return <UserIndexCard key={userObj.id} user={userObj} />;
      });
    }

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="black"
          onChangeText={this.handleChange}
        />
        {this.props.users.length > 0 ? renderUsers : <Text>Loading...</Text>}
      </View>
    );
  }
}

const msp = state => {
  return {
    users: state.users.users
  };
};

export default connect(
  msp,
  null
)(UserContainer);

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    color: "#000",
    fontWeight: "700",
    fontSize: 18,
    borderRightColor: "#010112",
    borderLeftColor: "#010112",
    // borderRadius: 5,
    height: 60,
    width: "auto",
    marginTop: 20,
    marginBottom: 20,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 20
  },
  container: {
    backgroundColor: "#010112"
  }
});
