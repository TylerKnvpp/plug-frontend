import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import DateTime from "./DateTime";
import DetailsForm from "./DetailsForm";
import LocationSelector from "./LocationSelector";
import CButton from "./CButton";

// import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class InviteForm extends React.Component {
  state = {
    time: "",
    location: "",
    details: ""
  };

  handleDateConfirm = submission => {
    this.setState({
      time: submission
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <LocationSelector handleChange={this.handleLocationChange} />
        <DetailsForm handleChange={this.handleDetailsChange} />
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
  container: {
    marginTop: 30
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
