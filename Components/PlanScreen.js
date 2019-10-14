import React from "react";
import {
  AsyncStorage,
  Button,
  Text,
  Image,
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";
import { connect } from "react-redux";
import { getUserProfile } from "../Actions/auth";

class PlanScreen extends React.Component {
  static navigationOptions = {
    title: "My Plans",
    headerStyle: {
      backgroundColor: "#010112"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  handlePress = e => {
    AsyncStorage.clear();
    this.props.navigation.navigate("AuthLoading");
  };

  componentDidMount() {
    AsyncStorage.getItem("loggedInUser").then(json => {
      try {
        const user = JSON.parse(json);
        if (user !== undefined) {
          this.props.fetchProfile(user.id);
        }
      } catch (e) {
        console.log(e);
      }
    });
  }

  render() {
    console.log("plans screen props", this.props.user);
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Welcome {this.props.user.full_name}! </Text>
        <Button title="Log Out" onPress={this.handlePress} />
      </SafeAreaView>
    );
  }
}

const mdp = dispatch => {
  return {
    fetchProfile: data => dispatch(getUserProfile(data))
  };
};

const msp = state => {
  return {
    user: state.fetch.user
  };
};

export default connect(
  msp,
  mdp
)(PlanScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#010112",
    flex: 1,
    alignItems: "center"
  },
  header: {
    fontWeight: "900",
    fontSize: 40,
    marginTop: 200,
    color: "white"
  }
});
