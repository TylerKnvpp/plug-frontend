import React from "react";
import {
  View,
  Button,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Image,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import CButton from "../Components/CButton";
import { updateProfile } from "../Actions/index";

class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "EDIT PROFILE",
    headerRight: (
      <Button
        onPress={() => navigation.navigate("Profile")}
        title="Settings"
        color="#fff"
      />
    ),
    headerStyle: {
      backgroundColor: "#010112",
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "900"
    }
  });

  state = {
    user: {},
    city: "",
    occupation: "",
    company: "",
    school: ""
  };

  componentDidMount() {
    const newUser = { ...this.props.user };
    if (newUser !== this.state.user) {
      this.setState({
        user: newUser
      });
    }
  }

  handleSubmit = e => {
    if (
      this.state.city ||
      this.state.occupation ||
      this.state.company ||
      this.state.school
    ) {
      const userid = parseInt(this.props.user.id);
      const userData = { user: this.state };
      console.log(userData);
      const user = {
        id: userid,
        data: userData
      };
      this.props.handleUpdate(user);
    }
  };

  render() {
    console.log("profile", this.state);
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container} enabled>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <SafeAreaView>
          <View style={styles.imageCropper}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{
                uri:
                  "https://pbs.twimg.com/profile_images/461277151514222593/xYCOja56_400x400.jpeg"
              }}
            />
          </View>
          <Button
            textStyle={{ color: "#FFFFFF", fontSize: 5 }}
            title="Change Profile Picture"
            onPress={() => {}}
          />
          <View style={styles.formContainer}>
            <Text style={styles.header}>
              Please fill update the following fields.
            </Text>
            <Text style={styles.label}>Location:</Text>
            <TextInput
              placeholder={
                this.props.user.city
                  ? this.props.user.city
                  : "Where do you live?"
              }
              placeholderTextColor="grey"
              name="city"
              style={styles.input}
              onChangeText={city => this.setState({ city })}
              value={this.state.city}
            />

            <Text style={styles.label}>Position:</Text>
            <TextInput
              placeholder={
                this.props.user.occupation
                  ? this.props.user.occupation
                  : "What is your job title?"
              }
              placeholderTextColor="grey"
              name="occupation"
              style={styles.input}
              onChangeText={occupation => this.setState({ occupation })}
              value={this.state.occupation}
            />

            <Text style={styles.label}>Company:</Text>
            <TextInput
              placeholder={
                this.props.user.company
                  ? this.props.user.company
                  : "Which company do you work for?"
              }
              placeholderTextColor="grey"
              name="company"
              style={styles.input}
              onChangeText={company => this.setState({ company })}
              value={this.state.company}
            />

            <Text style={styles.label}>School:</Text>
            <TextInput
              placeholder={
                this.props.user.school
                  ? this.props.user.school
                  : "Where did you go to school?"
              }
              placeholderTextColor="grey"
              name="school"
              style={styles.input}
              onChangeText={school => this.setState({ school })}
              value={this.state.school}
            />
          </View>
          <CButton text="Save" onPress={this.handleSubmit} />
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const msp = state => {
  return {
    user: state.fetch.user
  };
};

const mdp = dispatch => {
  return {
    handleUpdate: data => dispatch(updateProfile(data))
  };
};

export default connect(
  msp,
  mdp
)(Profile);

const styles = StyleSheet.create({
  header: {
    color: "white",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto"
  },
  editProfPic: {
    fontSize: 5
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
    fontWeight: "800",
    marginBottom: 10
  },
  imageCropper: {
    borderColor: "#25aae1",
    borderWidth: 3,
    width: 100,
    height: 100,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    marginBottom: 10,
    position: "relative",
    overflow: "hidden",
    borderRadius: 50
  },
  image: {
    display: "flex",
    margin: "auto",
    marginLeft: "0%",
    height: "100%",
    width: "auto"
  },
  input: {
    color: "white",
    fontWeight: "700",
    // borderRadius: 5,
    height: 40,
    width: 300,
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5
  },
  formContainer: {
    marginBottom: 20
  },
  fitToText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonContainer: {
    backgroundColor: "#25aae1"
  }
});
