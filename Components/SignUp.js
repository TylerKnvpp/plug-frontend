import React from "react";
import {
  Alert,
  Button,
  Text,
  Image,
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import CButton from "./CButton";
import { userSignUp } from "../Actions/auth";

class SignUp extends React.Component {
  static navigationOptions = {
    // title: "Sign Up",
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
    user: {
      full_name: "",
      username: "",
      password: ""
    }
  };

  handlePress = e => {
    e.preventDefault();
    if (this.state.full_name && this.state.username && this.state.password) {
      this.props
        .signUpUser({ user: this.state })
        .then(() => this.props.navigation.navigate("AuthLoading"));
    } else {
      Alert.alert("Please fill out all fields.");
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.container}
        enabled="true"
      >
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <SafeAreaView style={styles.form}>
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

          <Button
            title="Or Login"
            color="#25aae1"
            onPress={() => this.props.navigation.navigate("LoginScreen")}
          />
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
  form: {
    marginBottom: 10
  },
  button: {
    color: "red"
  },
  safe: {
    alignItems: "center"
  },
  container: {
    backgroundColor: "#010112",
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
    marginBottom: 10
  },
  fitToText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonContainer: {
    backgroundColor: "#25aae1"
  }
});
