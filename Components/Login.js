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
import CButton from "./CButton";
import { userLogin } from "../Actions/auth";

class Login extends React.Component {
  static navigationOptions = {
    // title: "Login",
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
    username: "",
    password: ""
  };

  handlePress = e => {
    e.preventDefault();
    this.props.userLogin(this.state);

    if (AsyncStorage.getItem("loggedInUser")) {
      this.props.navigation.navigate("Plans");
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <SafeAreaView>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../assets/Logo-White.png")}
          />

          {/* <Text style={styles.header}>Log In!</Text> */}
          <View style={styles.formContainer}>
            {/* Username */}
            <Text style={styles.label}>Username:</Text>
            <TextInput
              autoCapitalize="none"
              style={styles.input}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
            {/* Password */}
            <Text style={styles.label}>Password:</Text>
            <TextInput
              style={styles.input}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              secureTextEntry={true}
            />
          </View>
          <CButton text="Login" onPress={this.handlePress} />

          <Button
            title="Or Sign Up"
            color="#25aae1"
            onPress={() => this.props.navigation.navigate("SignUpScreen")}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const mdp = dispatch => {
  return {
    userLogin: data => dispatch(userLogin(data))
  };
};

export default connect(
  null,
  mdp
)(Login);

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontWeight: "800",
    fontSize: 18,
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    color: "red"
  },
  safe: {
    alignItems: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#010112"
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
