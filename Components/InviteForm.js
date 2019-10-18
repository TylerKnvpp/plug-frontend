import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import CButton from "./CButton";
import { connect } from "react-redux";
import { collectInviteStateDetails, postInvite } from "../Actions/invite";

class InviteForm extends React.Component {
  static navigationOptions = {
    title: "Details",
    headerStyle: {
      backgroundColor: "#010112",
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  state = {
    time: "",
    location: "",
    details: ""
  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.setState({
      time: date
    });
    this.hideDateTimePicker();
  };

  handleSubmit = e => {
    const plan = {
      time: this.state.time,
      location: this.state.location,
      details: this.state.details,
      category: this.props.fullInvite.inviteCategory
    };
    this.props.postInvite(plan);
    alert("Your plan has been created!");
    this.props.navigation.navigate("Plans");
  };

  render() {
    const date = new Date();

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Where are you going?</Text>
        <TextInput
          style={styles.input}
          placeholder="Name or Address of the location"
          placeholderTextColor="grey"
          onChangeText={location => this.setState({ location })}
        />
        <Text style={styles.header}>Details</Text>
        <TextInput
          multiline
          style={styles.multiLineInput}
          placeholder="Buzz apt. 4, bring cups, etc."
          placeholderTextColor="grey"
          onChangeText={details => this.setState({ details })}
          value={this.state.details}
        />
        <Text style={styles.header}>When are you going?</Text>

        <CButton
          theme="secondary"
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
        <CButton
          theme="primary"
          style={styles.button}
          text="Submit"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const mdp = dispatch => {
  return {
    collectInviteStateDetails: details =>
      dispatch(collectInviteStateDetails(details)),
    postInvite: invite => dispatch(postInvite(invite))
  };
};

const msp = state => {
  return {
    fullInvite: state.invite
  };
};

export default connect(
  msp,
  mdp
)(InviteForm);

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#010112"
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
  image: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 60,
    marginBottom: 30,
    height: 75,
    width: 150
  },
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
    marginTop: 30,
    fontSize: 24,
    fontWeight: "900",
    color: "white",
    marginBottom: 10
  }
});
