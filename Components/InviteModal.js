import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  Modal,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import CButton from "../Components/CButton";
import { acceptInvite } from "../Actions/invite";
import { Ionicons } from "@expo/vector-icons";
import _ from "lodash";
import InvitedUserPic from "./InvitedUserPic";
import { ScrollView } from "react-native-gesture-handler";

export default function InviteModal(props) {
  const [modalVisible, setModalVisible] = useState(true);
  const [result, setResult] = useState(null);
  const [inviteesArray, setInvitees] = useState([]);

  const _handlePressButtonAsync = async () => {
    this.setModalVisible(!setModalVisible);
    if (props.invite.location) {
      // const searchTerm = `https://www.google.com/maps/search/${this.props.invite.location}`;
      const searchTerm = `https://www.google.com/maps/search/`;

      let result = await WebBrowser.openBrowserAsync(searchTerm);
      setResult({ result });
    }
  };

  useEffect(() => {
    if (props) {
      setInvitees(props.invitedUsers);
    }
  }, []);

  const avatarsArray = [];

  if (inviteesArray) {
    inviteesArray.forEach(user => {
      avatarsArray.push({ avatar: user.avatar, username: user.username });
    });
  }

  const renderAvatars = avatarsArray.map(pic => {
    return (
      <InvitedUserPic
        key={pic.username}
        source={pic.avatar}
        username={pic.username}
      />
    );
  });

  // Sender's profile pic
  const avatarSource = function(options) {
    return { uri: `${props.source}` };
  };
  return (
    <Modal
      animationType={"slide"}
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        alert("Modal has been closed.");
      }}
    >
      <View style={modalstyle.container}>
        <View style={modalstyle.detailsContainer}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
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
              {props.user} &{" "}
              {inviteesArray.length ? `${inviteesArray.length} others` : null}
            </Text>
            <View style={modalstyle.scrollContainer}>
              <ScrollView style={modalstyle.scroll} horizontal>
                {renderAvatars}
              </ScrollView>
            </View>
            <View
              style={{
                marginBottom: 30,
                alignItems: "center"
              }}
            >
              <Text style={modalstyle.categoryname}>
                {props.invite.category.toUpperCase()}
              </Text>
              <View style={modalstyle.location}>
                <Ionicons
                  name="ios-clock"
                  style={{ marginRight: 15 }}
                  size={30}
                  color="grey"
                />

                <Text style={modalstyle.headerInfo}>{`${
                  props.days[props.eventDay]
                } @ ${props.eventTime}`}</Text>
              </View>

              <TouchableOpacity style={modalstyle.location}>
                <Ionicons
                  name="ios-pin"
                  style={{ marginRight: 20 }}
                  size={30}
                  color="grey"
                />
                <Text style={modalstyle.headerInfo}>
                  {props.invite.location}
                </Text>
              </TouchableOpacity>
              <Text>{result && JSON.stringify(result)}</Text>
              <Button
                title="Get Directions"
                onPress={_handlePressButtonAsync}
              />
            </View>

            <CButton text="Accept" onPress={props.handleAccept} />
          </View>
        </View>
        <TouchableOpacity
          style={{ marginTop: 80 }}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={{ color: "white", fontWeight: "900", fontSize: 24 }}>
            CLOSE
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const modalstyle = StyleSheet.create({
  scrollContainer: {
    height: 75,
    width: "100%",
    marginLeft: 20,
    marginBottom: 10
  },
  scroll: {
    marginLeft: 10
  },
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
    width: 100,
    height: 100,
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
