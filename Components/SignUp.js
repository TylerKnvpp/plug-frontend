import React from "react";
import {
  Button,
  Text,
  Image,
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import CButton from "./CButton";
import { userSignUp } from "../Actions/auth";

class SignUp extends React.Component {
  state = {
    user: {
      full_name: "",
      username: "",
      password: ""
    }
  };

  handlePress = e => {
    e.preventDefault();
    this.props.signUpUser({ user: this.state });
    console.log(this.state);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <SafeAreaView>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../assets/Logo-White.png")}
          />
          <View style={styles.formContainer}>
            <Text style={styles.label}>Full Name:</Text>
            <TextInput
              style={styles.input}
              onChangeText={full_name => this.setState({ full_name })}
              value={this.state.full_name}
            />
            <Text style={styles.label}>Username:</Text>

            <TextInput
              style={styles.input}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
            <Text style={styles.label}>Password:</Text>

            <TextInput
              style={styles.input}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              secureTextEntry={true}
            />
          </View>
          <CButton text="Submit" onPress={this.handlePress} />

          <Button title="Or Login" color="#25aae1" onPress={() => null} />
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const mdp = dispatch => {
  return {
    signUpUser: event => dispatch(userSignUp(event))
  };
};

export default connect(
  null,
  mdp
)(SignUp);

const styles = StyleSheet.create({
  button: {
    color: "red"
  },
  safe: {
    alignItems: "center"
  },
  container: {
    flex: 1,
    alignItems: "center"
  },
  label: {
    color: "grey",
    fontWeight: "800"
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
    borderBottomColor: "#ffffff",
    borderTopColor: "#000000",
    borderLeftColor: "#000000",
    borderRightColor: "#000000",
    color: "white",
    fontWeight: "700",
    // borderRadius: 5,
    height: 40,
    width: 300,
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1
  },
  formContainer: {
    marginBottom: 40
  },
  fitToText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonContainer: {
    backgroundColor: "#25aae1"
  }
});
