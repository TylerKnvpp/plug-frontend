import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import DateTime from "./DateTime";
import LocationSelector from "./LocationSelector";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class InviteForm extends React.Component {
  state = {
    time: "",
    location: ""
  };

  handleDateConfirm = date => {
    this.setState({
      time: date
    });
  };

  render() {
    return (
      <View>
        {/* <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        /> */}
        <LocationSelector />
        <DateTime handleConfirm={this.handleDateConfirm} />
      </View>
    );
  }
}

export default InviteForm;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
  image: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 60,
    marginBottom: 30,
    height: 75,
    width: 150
  }
});
