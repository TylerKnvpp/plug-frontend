import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { addUser } from "../Actions/friendship";
import { Ionicons } from "@expo/vector-icons";

class FriendCard extends React.Component {
  state = {
    modalVisible: false
  };

  handleOpen = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    if (this.props.user) {
      const source = this.props.user.avatar;
      avatarSource = function(options) {
        return { uri: `${source}` };
      };
    }
    return (
      <View key={this.props.user.id} style={styles.container}>
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={this.handleOpen}
        >
          <View style={styles.imageCropper}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={avatarSource()}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.header}>{this.props.user.full_name}</Text>
            <Text style={styles.label}>@{this.props.user.username}</Text>
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
                    {this.props.user.full_name}
                  </Text>
                  <Text style={modalstyle.username}>
                    @{this.props.user.username}
                  </Text>
                  <View style={styles.sender}></View>
                  <View
                    style={{
                      marginBottom: 30,
                      marginTop: 30,
                      alignItems: "center"
                    }}
                  >
                    <View style={modalstyle.location}>
                      <Ionicons
                        name="ios-pin"
                        style={{ marginRight: 15 }}
                        size={30}
                        color="grey"
                      />
                      <Text style={modalstyle.headerInfo}>
                        {this.props.user.city}
                      </Text>
                    </View>

                    <View style={modalstyle.location}>
                      <Ionicons
                        name="ios-school"
                        style={{ marginRight: 15 }}
                        size={30}
                        color="grey"
                      />
                      <Text style={modalstyle.headerInfo}>
                        {this.props.user.school}
                      </Text>
                    </View>

                    <View style={modalstyle.location}>
                      <Ionicons
                        name="ios-briefcase"
                        style={{ marginRight: 20 }}
                        size={30}
                        color="grey"
                      />
                      <Text style={modalstyle.headerInfo}>
                        {this.props.user.company}
                      </Text>
                    </View>
                  </View>
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
)(FriendCard);

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
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10
  },
  username: {
    color: "grey",
    fontWeight: "900",
    fontSize: 18
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
