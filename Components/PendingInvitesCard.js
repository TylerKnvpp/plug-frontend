import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Modal,
  TouchableOpacity
} from "react-native";
import CButton from "./CButton";
import { connect } from "react-redux";
import { acceptInvite } from "../Actions/invite";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import _ from "lodash";
import * as WebBrowser from "expo-web-browser";
import { URL } from "../Constants/actionCreators";

class PendingInvitesCard extends React.Component {
  handleAccept = id => {
    // copy prop objects
    const userClone = _.clone(this.props.sender);
    const inviteClone = _.clone(this.props.invite);
    const plansClone = userClone.plans;
    // extract ids
    const userID = userClone.id;
    const inviteID = inviteClone.id;
    // find corresponding plan
    const plan = plansClone.find(plan => plan.invite_id === inviteID);
    // create object to send to db
    const request = {
      id: plan.id,
      plan: {
        accepted: true
      }
    };
    this.setModalVisible(!this.state.modalVisible);
    this.props.acceptInvite(request);
    this.props.handleUpdateCollection(inviteClone.id);
  };

  state = {
    user: "",
    avatar: "",
    result: null,
    modalVisible: false
  };

  componentDidMount() {
    fetch(`${URL}users/${this.props.invite.user_id}`)
      .then(resp => resp.json())
      .then(res => {
        this.setState({
          user: res.full_name,
          avatar: res.avatar
        });
      });
  }

  handlePress = e => {
    e.preventDefault();
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  _handlePressButtonAsync = async () => {
    this.setModalVisible(!this.state.modalVisible);
    if (this.props.invite.location) {
      // const searchTerm = `https://www.google.com/maps/search/${this.props.invite.location}`;
      const searchTerm = `https://www.google.com/maps/search/`;

      let result = await WebBrowser.openBrowserAsync(searchTerm);
      this.setState({ result });
    }
  };

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

    if (this.props.sender) {
      const source = this.state.avatar;
      avatarSource = function(options) {
        return { uri: `${source}` };
      };
    }
    //

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.card} onPress={this.handlePress}>
          <Text style={styles.createdAt}>{createdAt}</Text>
          <View style={styles.sender}>
            <View style={styles.imageCropper}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={avatarSource()}
              />
            </View>
            <Text style={styles.senderInfo}>
              {this.state.user.length > 10
                ? this.state.user.substring(0, 10).concat("...")
                : this.state.user}{" "}
              & {Math.floor(Math.random() * 10)} others
            </Text>
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
        </TouchableOpacity>
        {this.state.modalVisible ? (
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert("Modal has been closed.");
            }}
          >
            <View style={modalstyle.container}>
              <View style={modalstyle.detailsContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Ionicons
                    name="ios-arrow-down"
                    style={{ marginLeft: 300 }}
                    size={40}
                    color="white"
                  />
                </TouchableOpacity>
                <View style={modalstyle.align}>
                  <View style={modalstyle.imageCropper}>
                    <Image
                      resizeMode="contain"
                      style={modalstyle.image}
                      source={avatarSource()}
                    />
                  </View>
                  <Text style={modalstyle.groupName}>
                    {this.state.user} & {Math.floor(Math.random() * 10)} others
                  </Text>
                  <View style={styles.sender}></View>
                  <View
                    style={{
                      marginBottom: 30,
                      marginTop: 30,
                      alignItems: "center"
                    }}
                  >
                    <Text style={modalstyle.categoryname}>
                      {this.props.invite.category.toUpperCase()}
                    </Text>
                    <View style={modalstyle.location}>
                      <Ionicons
                        name="ios-clock"
                        style={{ marginRight: 15 }}
                        size={30}
                        color="grey"
                      />

                      <Text
                        style={modalstyle.headerInfo}
                      >{`${days[eventDay]} @ ${eventTime}`}</Text>
                    </View>

                    <TouchableOpacity style={modalstyle.location}>
                      <Ionicons
                        name="ios-pin"
                        style={{ marginRight: 20 }}
                        size={30}
                        color="grey"
                      />
                      <Text style={modalstyle.headerInfo}>
                        {this.props.invite.location}
                      </Text>
                    </TouchableOpacity>
                    <Text>
                      {this.state.result && JSON.stringify(this.state.result)}
                    </Text>
                    <Button
                      title="Get Directions"
                      onPress={this._handlePressButtonAsync}
                    />
                  </View>

                  <CButton text="Accept" onPress={this.handleAccept} />
                </View>
              </View>
              <TouchableOpacity
                style={{ marginTop: 150 }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "900", fontSize: 24 }}
                >
                  CLOSE
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        ) : null}
      </View>
    );
  }
}

const msp = state => {
  return {
    sender: state.auth.userObj,
    pendingInvites: state.invite.renderInvites
  };
};

const mdp = dispatch => {
  return {
    acceptInvite: data => dispatch(acceptInvite(data))
  };
};

export default connect(
  msp,
  mdp
)(PendingInvitesCard);

const styles = StyleSheet.create({
  revealContainer: {
    flexDirection: "row"
  },
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
    borderWidth: 2,
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

const modalstyle = StyleSheet.create({
  categoryname: {
    color: "#25aae1",
    fontSize: 30,
    fontWeight: "900",
    marginBottom: 20
  },
  headerInfo: {
    color: "white",
    fontSize: 24,
    fontWeight: "900",
    marginTop: 3
    // marginBottom: 10
    // marginBottom: 20,
    // marginLeft: "auto",
    // marginRight: "auto"
  },
  location: {
    flexDirection: "row",
    alignItems: "flex-start",

    marginBottom: 20
  },
  groupName: {
    color: "white",
    fontWeight: "900",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20
  },
  align: {
    alignItems: "center"
  },
  detailsContainer: {
    marginTop: 65
  },
  container: {
    alignItems: "center",
    backgroundColor: "#010112",
    flex: 1
  },
  imageCropper: {
    borderColor: "#25aae1",
    borderWidth: 3,
    width: 150,
    height: 150,
    marginLeft: 0,
    marginRight: 15,
    // marginTop: 20,
    // marginBottom: 10,
    position: "relative",
    overflow: "hidden",
    borderRadius: 150
  },
  image: {
    display: "flex",
    margin: "auto",
    marginLeft: "0%",
    height: "100%",
    width: "auto"
  }
});
