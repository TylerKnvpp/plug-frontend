import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import CButton from "./CButton";
import DateTimePicker from "react-native-modal-datetime-picker";

class DetailsForm extends React.Component {
  state = {
    details: ""
  };

  render() {
    return (
      <View>
        <Text style={styles.header}>Details</Text>
        <TextInput
          multiline
          style={styles.multiLineInput}
          placeholder="Buzz apt. 4, bring cups, etc."
          placeholderTextColor="grey"
          onChangeText={details => this.setState({ details })}
          value={this.state.details}
        />
      </View>
    );
  }
}

export default DetailsForm;

const styles = StyleSheet.create({
  input: {
    color: "white",
    fontWeight: "700",
    borderRadius: 5,
    height: 40,
    width: 300,
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1
  },
  multiLineInput: {
    color: "white",
    fontWeight: "700",
    borderRadius: 5,
    height: 100,
    width: 300,
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1
  },
  header: {
    fontSize: 24,
    fontWeight: "900",
    color: "white",
    marginBottom: 10
  }
});
