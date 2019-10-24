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
import { fetchUserPlans } from "../Actions/invite";

class AuthLoadingScreen extends React.Component {
  state = {
    userID: null
  };

  componentDidMount() {
    console.log("DID MOUNT", this.state.userID);
    this._bootstrapAsync();
  }

  componentWillUnmount() {
    console.log("UNMOUNT");
    // this._unmountAsync();
    // this.props.navigation.navigate("profile");
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps);
    // console.log(this.props.auth);
    if (this.props.auth !== prevProps.auth) {
      console.log("update", this.props.auth);
      this.props.navigation.navigate("Profile");
    }
  }

  // Fetch the token from storage then navigate to our appropriate screen
  _bootstrapAsync = async () => {
    const loggedInUser = await AsyncStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsed = JSON.parse(loggedInUser);
      console.log("async", parsed.id);
      this.props.getUserProfile(parsed.id);
      this.props.fetchUserPlans(parsed.id);
      this.setState({
        userID: parsed.id
      });
      this.props.navigation.navigate("Profile");
    } else {
      this.props.navigation.navigate("LoginScreen");
    }
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
  };

  // // Fetch the token from storage then navigate to our appropriate screen
  _unmountAsync = async () => {
    const loggedInUser = await AsyncStorage.getItem("loggedInUser");
    console.log("unmount async", loggedInUser);
    if (loggedInUser) {
      this.props.navigatation.navigate("Profile");
    } else {
      this.props.navigatation.navigate("Login");
    }
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
    fetchUserPlans: id => dispatch(fetchUserPlans(id)),
    getUserProfile: id => dispatch(getUserProfile(id)),
    fetchRequests: id => dispatch(fetchFriendRequests(id))
  };
};

const msp = state => {
  return {
    userData: state.auth.userObj,
    auth: state.auth.id
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
