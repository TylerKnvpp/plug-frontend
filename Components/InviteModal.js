import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  Text,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import CButton from "../Components/CButton";
import { acceptInvite } from "../Actions/invite";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

export default function InviteModal(props) {
  const [modalVisible, setModalVisible] = useState(true);
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    this.setModalVisible(!setModalVisible);
    if (props.invite.location) {
      // const searchTerm = `https://www.google.com/maps/search/${this.props.invite.location}`;
      const searchTerm = `https://www.google.com/maps/search/`;

      let result = await WebBrowser.openBrowserAsync(searchTerm);
      setResult({ result });
    }
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
              {props.invite.user} & {Math.floor(Math.random() * 10)} others
            </Text>
            <View
              style={{
                marginBottom: 30,
                marginTop: 30,
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
          style={{ marginTop: 150 }}
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
