import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { fetchUsers, fetchFriendRequests } from "../Actions/friendship";
import FriendRequestCard from "../Components/FriendRequestCard";

class FriendRequestContainer extends React.Component {
  state = {
    requests: []
  };

  componentDidMount() {
    if (this.props.user) {
      const userProps = { ...this.props.user };
      this.props.fetchFriendRequests(userProps.user.id);
    }
  }

  componentDidUpdate() {
    const requestCopy = { ...this.props.requests };
    console.log("copy", requestCopy.pending_received);
    if (requestCopy.pending_received.length > 0) {
      if (this.state.requests.length === 0) {
        this.setState({
          requests: requestCopy.pending_received
        });
      }
    }
  }

  render() {
    // console.log(this.state.requests);

    const renderRequests = this.state.requests.map(requestObj => {
      return <FriendRequestCard key={requestObj.id} request={requestObj} />;
    });
    return (
      <View style={styles.container}>
        {this.state.requests.length > 0 ? (
          renderRequests
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    );
  }
}

const msp = state => {
  return {
    user: state.fetch,
    requests: state.friends.requests
  };
};

const mdp = dispatch => {
  return {
    fetchFriendRequests: id => dispatch(fetchFriendRequests(id))
  };
};

export default connect(
  msp,
  mdp
)(FriendRequestContainer);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#010112"
  }
});
