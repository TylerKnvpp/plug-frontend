import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
// import { Image } from "react-native";
// import { Card, ListItem, Button, Icon } from "react-native-elements";
import CButton from "./CButton";
import { connect } from "react-redux";
import { acceptFriendRequest } from "../Actions/friendship";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

class PendingInvitesCard extends React.Component {
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

  state = {
    user: "",
    profilePicture: ""
  };

  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.invite.user_id}`)
      .then(resp => resp.json())
      .then(res => {
        this.setState({
          user: res.full_name
        });
      });
  }

  render() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    // MOMENT.JS PARSING
    const eventDay = moment(this.props.invite.time, "YYYY-MM-DDTHHmmss").day();
    const eventTime = moment(this.props.invite.time).format("hh:mm a");
    const createdAt = moment(this.props.invite.created_at).fromNow();
    //
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.createdAt}>{createdAt}</Text>
          <View style={styles.sender}>
            <View style={styles.imageCropper}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={{
                  uri:
                    "https://pbs.twimg.com/profile_images/461277151514222593/xYCOja56_400x400.jpeg"
                }}
              />
            </View>
            <Text style={styles.senderInfo}>{this.state.user} & 6 others</Text>
          </View>
          <View style={styles.location}>
            <Ionicons
              name="ios-clock"
              style={{ marginRight: 20 }}
              size={24}
              color="grey"
            />

            <Text
              style={styles.headerInfo}
            >{`${days[eventDay]} @ ${eventTime}`}</Text>
          </View>
          <View style={styles.location}>
            <Ionicons
              name="ios-pin"
              style={{ marginRight: 20, marginLeft: 3 }}
              size={24}
              color="grey"
            />
            <Text style={styles.headerInfo}>{this.props.invite.location}</Text>
          </View>
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
)(PendingInvitesCard);

const styles = StyleSheet.create({
  sender: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 0,
    marginBottom: 10
  },
  imageCropper: {
    alignItems: "flex-start",
    borderColor: "grey",
    borderWidth: 2,
    width: 10,
    height: 10,

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
  createdAt: {
    textAlign: "right"
  },
  location: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: 30,
    marginBottom: 5
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "85%",
    height: 180
  },
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

  headerInfo: {
    color: "black",
    fontSize: 18,
    fontWeight: "900",
    marginTop: 3
    // marginBottom: 10
    // marginBottom: 20,
    // marginLeft: "auto",
    // marginRight: "auto"
  },
  senderInfo: {
    color: "black",
    fontSize: 18,
    fontWeight: "900",
    marginTop: 0
    // marginBottom: 10
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
    alignItems: "center",
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
    width: 50,
    height: 50,
    marginLeft: 0,
    marginRight: 15,
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