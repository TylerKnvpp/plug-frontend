import React, { useEffect, useState } from "react";
import { Image, ScrollView, View, StyleSheet } from "react-native";

export default function InvitedUserPic(props) {
  const [source, setSource] = useState("");

  useEffect(() => {
    if (!source) {
      setSource(props.source);
    }
  }, []);

  const avatarSource = function(options) {
    if (source) {
      return { uri: `${source}` };
    }
  };

  return (
    <View style={styles.imageCropper}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={avatarSource()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageCropper: {
    borderColor: "#25aae1",
    borderWidth: 3,
    width: 75,
    height: 75,
    // marginLeft: 10,
    marginRight: 20,
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
  }
});
