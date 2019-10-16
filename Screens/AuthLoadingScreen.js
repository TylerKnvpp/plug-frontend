import React from "react";
import {
  ActivityIndicator,
  Image,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import { connect } from "react-redux";
import { getUserProfile } from "../Actions/auth";

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const loggedInUser = await AsyncStorage.getItem("loggedInUser");
    loggedInUser ? this.props.getUser(loggedInUser.id) : null;
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(loggedInUser ? "Plans" : "LoginScreen");
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/Logo-White.png")}
        />
      </View>
    );
  }
}

const mdp = dispatch => {
  return {
    getUser: id => dispatch(getUserProfile(id))
  };
};

export default connect(
  null,
  mdp
)(AuthLoadingScreen);

const styles = StyleSheet.create({
  image: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 60,
    marginBottom: 30,
    height: 75,
    width: 150
  }
});
