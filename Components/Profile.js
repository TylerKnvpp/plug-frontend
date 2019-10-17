import React from "react";
import {
  AsyncStorage,
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
import { getUserProfile } from "../Actions/auth";

class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "EDIT PROFILE",
    headerRight: (
      <Button
        onPress={() => {
          AsyncStorage.clear();
          navigation.navigate("AuthLoading");
        }}
        title="Logout"
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
    id: null,
    city: "",
    occupation: "",
    company: "",
    school: ""
  };

  componentDidMount() {
    this._retrieveData();
    // console.log(this.state);
    // console.log(this.props.user);
  }

  componentDidUpdate() {
    if (!this.state.city) {
      const userProps = { ...this.props.user };
      this.setState({
        id: userProps.user.id,
        city: userProps.user.city,
        occupation: userProps.user.occupation,
        company: userProps.user.company,
        school: userProps.user.school
      });
    }
    console.log("shouldve updated", this.state);
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("loggedInUser");
      if (value !== null) {
        // We have data!!
        const parsed = JSON.parse(value);
        if (value) {
          // this.props.getUser(parsed.id);
          this.setState({
            id: parsed.id
          });
        }
        return parsed;
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  handleSubmit = e => {
    if (
      this.state.city ||
      this.state.occupation ||
      this.state.company ||
      this.state.school
    ) {
      // copy user object from redux
      const propsCopy = { ...this.props.user };
      // copy local state to update user object
      const userData = { user: this.state };

      const user = {
        id: propsCopy.user.id,
        data: userData
      };
      this.props.handleUpdate(user);
    }
  };

  render() {
    console.log(this.props.user);
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
    user: state.fetch
  };
};

const mdp = dispatch => {
  return {
    handleUpdate: data => dispatch(updateProfile(data)),
    getUser: data => dispatch(getUserProfile(data))
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
