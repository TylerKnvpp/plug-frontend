import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
// import { Image } from "react-native";
// import { Card, ListItem, Button, Icon } from "react-native-elements";
import CButton from "./CButton";
import { connect } from "react-redux";
import { acceptFriendRequest } from "../Actions/friendship";

class FriendRequestCard extends React.Component {
  handleAccept = id => {
    // copy prop object for user
    const copy = { ...this.props.sender };
    // extract id
    const user = copy.user.id;
    // create object to send to db
    const request = {
      user_id: user,
      friend: id
    };
    this.props.acceptFriendRequest(request);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.imageCropper}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={require("../assets/images/profile.jpg")}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.header}>{this.props.request.full_name}</Text>
            <Text style={styles.label}>@{this.props.request.username}</Text>
          </View>
          <CButton
            key={this.props.request.id}
            text="+"
            size="default"
            onPress={() => {
              this.handleAccept(this.props.request.id);
            }}
            style={styles.button}
            dataId={this.props.request.id}
          />
          <CButton
            key={this.props.request.id}
            text="-"
            size="default"
            onPress={() => {
              //   this.handlePress(this.props.request.id);
            }}
            theme="danger"
            dataId={this.props.request.id}
          />
        </View>
      </View>
    );
  }
}

const msp = state => {
  return {
    sender: state.fetch
  };
};

const mdp = dispatch => {
  return {
    acceptFriendRequest: data => dispatch(acceptFriendRequest(data))
  };
};

export default connect(
  msp,
  mdp
)(FriendRequestCard);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginRight: 20,
    marginVertical: 20
  },
  infoContainer: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  textContainer: {
    flex: 2,
    flexDirection: "column",
    marginTop: 20
  },
  card: {
    backgroundColor: "#010112"
  },

  header: {
    color: "white",
    fontWeight: "900",
    marginBottom: 10
    // marginTop: 20,
    // marginBottom: 20,
    // marginLeft: "auto",
    // marginRight: "auto"
  },
  editProfPic: {
    fontSize: 5
  },
  button: {
    color: "red"
  },
  safe: {
    alignItems: "center"
  },
  container: {
    alignContent: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#010112",
    flex: 1,
    marginBottom: 30
  },
  label: {
    color: "grey",
    fontWeight: "600",
    marginBottom: 10
  },
  imageCropper: {
    borderColor: "#25aae1",
    borderWidth: 3,
    width: 60,
    height: 60,
    marginLeft: 50,
    marginRight: 30,
    // marginTop: 20,
    // marginBottom: 10,
    position: "relative",
    overflow: "hidden",
    borderRadius: 50
  },
  image: {
    display: "flex",
    margin: "auto",
    marginLeft: "0%",
    height: "100%",
    width: "auto"
  },
  input: {
    color: "white",
    fontWeight: "700",
    // borderRadius: 5,
    height: 40,
    width: 300,
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5
  },
  formContainer: {
    marginBottom: 20
  },
  fitToText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonContainer: {
    backgroundColor: "#25aae1"
  }
});
