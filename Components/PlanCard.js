import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { connect } from "react-redux";
import { acceptFriendRequest } from "../Actions/friendship";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

class PlanCard extends React.Component {
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

    const categories = [
      { category: "brunch", color: "#25aae1" },
      { category: "happy-hour", color: "#FFFC00" },
      { category: "dinner", color: "#F0277C" },
      { category: "pregame", color: "#7A25E2" },
      { category: "party", color: "#C4FD2A" },
      { category: "go-out", color: "#25E197" },
      { category: "postgame", color: "#00908E" },
      { category: "other", color: "#fff" }
    ];
    // MOMENT.JS PARSING
    const eventDay = moment(this.props.invite.time, "YYYY-MM-DDTHHmmss").day();
    const eventTime = moment(this.props.invite.time).format("hh:mm a");
    const howLongUntil = moment(this.props.invite.time).fromNow();
    //

    return (
      <View style={styles.container}>
        <View style={styles.timeContainer}>
          <Text
            style={styles.timeInfo}
          >{`${days[eventDay]} @ ${eventTime}`}</Text>
          <Text style={styles.createdAt}>{howLongUntil}</Text>
        </View>
        {/* card */}
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Image
              resizeMode="contain"
              style={styles.iconImage}
              source={require(`../assets/images/dinner.png`)}
            />
            <Text style={styles.dinner}>{this.props.invite.category}</Text>
          </View>
          <View style={styles.detailContainer}>
            <View style={styles.sender}>
              <Ionicons
                name="ios-contacts"
                style={{ marginRight: 10 }}
                size={32}
                color="grey"
              />
              <Text style={styles.senderInfo}>
                {this.state.user} & 6 others
              </Text>
            </View>

            <View style={styles.location}>
              <Ionicons
                name="ios-pin"
                style={{ marginRight: 20, marginLeft: 3 }}
                size={32}
                color="grey"
              />
              <Text style={styles.headerInfo}>
                {this.props.invite.location}
              </Text>
            </View>
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
)(PlanCard);

const styles = StyleSheet.create({
  detailContainer: {
    flex: 2,
    marginRight: 70,
    width: "70%"
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginBottom: 10,
    marginLeft: 0,
    padding: 0
  },
  brunch: {
    color: "#25aae1",
    fontWeight: "900",
    fontSize: 18,
    marginTop: 10
  },
  happyHour: {
    color: "#FFFC00",
    fontWeight: "900",
    fontSize: 18,
    marginTop: 10
  },
  dinner: {
    color: "#F0277C",
    fontWeight: "900",
    fontSize: 18,
    marginTop: 10
  },
  pregame: {
    color: "#7A25E2",
    fontWeight: "900",
    fontSize: 18,
    marginTop: 10
  },
  party: {
    color: "#C4FD2A",
    fontWeight: "900",
    fontSize: 18,
    marginTop: 10
  },
  goOut: {
    color: "#25E197",
    fontWeight: "900",
    fontSize: 18,
    marginTop: 10
  },
  postgame: {
    color: "#00908E",
    fontWeight: "900",
    fontSize: 18,
    marginTop: 10
  },
  other: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 18,
    marginTop: 10
  },
  iconImage: {
    height: 50,
    marginLeft: 0
  },
  iconText: {
    color: "#25aae1",
    fontSize: 14
  },
  timeContainer: {
    // alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginRight: 30,
    marginLeft: 10
  },
  card: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
    borderColor: "#fff",
    borderWidth: 10,
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 0,
    width: "95%",
    height: 180,
    justifyContent: "space-evenly"
  },

  sender: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 0,
    marginBottom: 10
  },
  createdAt: {
    fontSize: 10,
    color: "#fff",
    textAlign: "right",
    marginTop: 10,
    marginLeft: 60
  },
  location: {
    flexDirection: "row",
    alignItems: "flex-start",
    // marginLeft: 30,
    marginBottom: 5
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
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
    marginTop: 3
    // marginBottom: 10
    // marginBottom: 20,
    // marginLeft: "auto",
    // marginRight: "auto"
  },
  timeInfo: {
    alignSelf: "flex-start",
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left"
    // marginBottom: 10
    // marginBottom: 20,
    // marginLeft: "auto",
    // marginRight: "auto"
  },
  senderInfo: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
    marginTop: 0
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
    // alignItems: "center",
    backgroundColor: "#010112",
    flex: 1,
    marginBottom: 30
  },
  label: {
    color: "#fff",
    fontWeight: "600",
    marginBottom: 10
  },
  imageCropper: {
    borderColor: "grey",
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
  fitToText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonContainer: {
    backgroundColor: "#25aae1"
  }
});
