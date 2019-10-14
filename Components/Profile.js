import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";

class Profile extends React.Component {
  render() {
    // let oneProfile = this.props.users.find(user => user.id === 5);

    return (
      <View>
        {/* {this.props.users.length > 0 ? (
          <Text style={styles.header}>{oneProfile.full_name}</Text>
        ) : (
          <Text style={styles.header}>Loading</Text>
        )} */}
        <Text style={styles.header}>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontSize: 24,
    fontWeight: "700"
  }
});

const msp = state => {
  return { users: state.users };
};

export default connect(
  msp,
  null
)(Profile);
