import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class LocationSelector extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>Where are you going?</Text>
        <TextInput
          style={styles.input}
          placeholder="Name or Address of the location"
          placeholderTextColor="grey"
        />
        {/* <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        /> */}
      </View>
    );
  }
}

export default LocationSelector;

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
  header: {
    fontSize: 24,
    fontWeight: "900",
    color: "white",
    marginBottom: 10
  }
});
