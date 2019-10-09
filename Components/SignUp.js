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
import CButton from "./CButton";

class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handlePress = e => {
    e.preventDefault();
    this.props.handleSignUp(this.state);
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
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.input}
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            />
            <Text style={styles.label}>Email:</Text>

            <TextInput
              style={styles.input}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
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

export default SignUp;
