import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { fetchFriends } from "../Actions/friendship";
import { collectInviteStateUsersInvited } from "../Actions/invite";
import InviteAddFriendsCard from "../Components/InviteAddFriendsCard";

class InviteAddFriendsContainer extends React.Component {
  state = {
    friends: [],
    search: "",
    invitedUsers: []
  };

  componentDidMount() {
    const user = { ...this.props.user };
    this.props.fetchFriends(user.id);
  }

  componentDidUpdate() {
    //   pull user collection down from redux
    const userCollection = { ...this.props.friends };
    // sort user collection
    if (userCollection.friends.length !== 0) {
      const sortedUsers = userCollection.friends.sort((a, b) =>
        a.firstname !== b.full_name ? (a.full_name < b.full_name ? -1 : 1) : 0
      );
      // conditional to avoid infinite loop + setState
      if (this.state.friends.length === 0) {
        this.setState({
          friends: sortedUsers
        });
      }
    }
  }

  handleSelectedUsers = id => {
    // create updated collection with each new user
    const newCollection = [...this.state.invitedUsers, id];
    console.log(newCollection);
    // set state
    this.setState({
      invitedUsers: newCollection
    });
    // dispatch to redux reducer
    this.props.collectInviteStateUsersInvited(this.state.invitedUsers);
  };

  handleChange = textValue => {
    textValue = textValue.toLowerCase();
    this.setState({
      search: textValue
    });
  };

  filterCollection = () => {
    if (this.state.friends.length !== 0) {
      const filteredArray = [...this.state.friends];
      return filteredArray;
      //   return filteredArray.filter(user => {
      //     user.full_name.toUpperCase().includes(this.state.search.toUpperCase());
      //   });
    }
  };

  render() {
    let renderUsers;
    if (this.state.friends.length > 0) {
      renderUsers = this.filterCollection().map(userObj => {
        return (
          <InviteAddFriendsCard
            key={userObj.id}
            user={userObj}
            handleSelectedUser={this.handleSelectedUsers}
          />
        );
      });
    }

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="white"
          onChangeText={this.handleChange}
        />
        {this.state.friends.length > 0 ? renderUsers : <Text>Loading...</Text>}
      </View>
    );
  }
}

const msp = state => {
  return {
    user: state.auth.userObj,
    friends: state.friends.updatedFriendsCollection
  };
};

const mdp = dispatch => {
  return {
    fetchFriends: id => dispatch(fetchFriends(id)),
    collectInviteStateUsersInvited: id =>
      dispatch(collectInviteStateUsersInvited(id))
  };
};

export default connect(
  msp,
  mdp
)(InviteAddFriendsContainer);

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    borderRightColor: "#010112",
    borderLeftColor: "#010112",
    borderTopColor: "#000",
    borderBottomColor: "#000",
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
    flex: 1,
    backgroundColor: "#010112"
  }
});
