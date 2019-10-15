import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import CButton from "./CButton";
import DateTimePicker from "react-native-modal-datetime-picker";

class DateTime extends React.Component {
  state = {
    isDateTimePickerVisible: false,
    time: ""
  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.props.handleConfirm(date);
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };

  render() {
    const date = new Date();

    return (
      <View>
        <CButton
          style={styles.button}
          text="Show DatePicker"
          onPress={this.showDateTimePicker}
        />
        <DateTimePicker
          minimumDate={date}
          mode="datetime"
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </View>
    );
  }
}

export default DateTime;

const styles = StyleSheet.create({});
