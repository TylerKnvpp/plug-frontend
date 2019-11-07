import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
// import { Image } from "react-native";
// import { Card, ListItem, Button, Icon } from "react-native-elements";
import CButton from "./CButton";
import { connect } from "react-redux";
import { addUser } from "../Actions/friendship";
import { Ionicons } from "@expo/vector-icons";

class InviteAddFriendsCard extends React.Component {
  state = {
    selected: false
  };

  handlePress = id => {
    this.setState({
      selected: !this.state.selected
    });

    this.props.handleSelectedUser(id);
  };
  render() {
    if (this.props.user) {
      const source = this.props.user.avatar;
      avatarSource = function(options) {
        return { uri: `${source}` };
      };
    }
    return (
      <View key={this.props.user.id} style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.imageCropper}>
            <Image
              style={styles.image}
              resizeMode="cover"
              // source={avatarSource()}
              source={avatarSource()}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.header}>{this.props.user.full_name}</Text>
            <Text style={styles.label}>@{this.props.user.username}</Text>
          </View>
          <Ionicons
            name={
              this.state.selected
                ? "ios-radio-button-on"
                : "ios-radio-button-off"
            }
            style={{ marginRight: 30, marginTop: 20 }}
            size={24}
            color="white"
            onPress={id => this.handlePress(this.props.user.id)}
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
    sendFriendRequest: data => dispatch(addUser(data))
  };
};

export default connect(
  msp,
  mdp
)(InviteAddFriendsCard);

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
    width: 75,
    height: 75,
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
