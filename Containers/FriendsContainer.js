import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { fetchFriends } from "../Actions/friendship";
import FriendCard from "../Components/FriendCard";

class FriendsContainer extends React.Component {
  state = {
    friends: [],
    search: ""
  };

  componentDidUpdate() {
    //   pull user collection down from redux
    const userCollection = [...this.props.friends];
    // sort user collection
    const sortedUsers = userCollection.sort((a, b) =>
      a.firstname !== b.full_name ? (a.full_name < b.full_name ? -1 : 1) : 0
    );
    // conditional to avoid infinite loop + setState
    if (this.state.friends.length === 0) {
      this.setState({
        friends: sortedUsers
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
    if (this.state.friends.length !== 0) {
      const filteredArray = [...this.state.friends];
      //   console.log("filter", filteredArray);
      return filteredArray;
      //   return filteredArray.filter(user => {
      //     user.full_name.toUpperCase().includes(this.state.search.toUpperCase());
      //   });
    }
  };

  render() {
    console.log("friends statae", this.state);

    let renderUsers;
    if (this.state.friends.length > 0) {
      renderUsers = this.filterCollection().map(userObj => {
        return <FriendCard key={userObj.id} user={userObj} />;
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
    friends: state.fetch.user.friends
  };
};

export default connect(
  msp,
  null
)(FriendsContainer);

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
