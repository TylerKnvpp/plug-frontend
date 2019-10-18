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
import { fetchFriendRequests } from "../Actions/friendship";

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const loggedInUser = await AsyncStorage.getItem("loggedInUser");
    const parsed = JSON.parse(loggedInUser);
    loggedInUser ? this.props.getUserProfile(parsed.id) : null;
    console.log(this.props.userData);
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(loggedInUser ? "Invite" : "LoginScreen");
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
    getUserProfile: id => dispatch(getUserProfile(id)),
    fetchRequests: id => dispatch(fetchFriendRequests(id))
  };
};

const msp = state => {
  return {
    userData: state.auth
  };
};

export default connect(
  msp,
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
