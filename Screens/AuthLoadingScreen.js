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
  componentDidMount() {
    this._bootstrapAsync();
    this._loadResourcesAsync();
  }

  // Fetch the token from storage then navigate to our appropriate screen
  _bootstrapAsync = async () => {
    const loggedInUser = await AsyncStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsed = JSON.parse(loggedInUser);
      console.log("async", parsed.id);
      this.props.getUserProfile(parsed.id);
      this.props.fetchUserPlans(parsed.id);

      this.props.navigation.navigate("Profile");
    } else {
      this.props.navigation.navigate("LoginScreen");
    }
  };

  _loadResourcesAsync = async () => {
    console.log("async");
    return Promise.all([
      Asset.loadAsync([
        require("../assets/images/brunch.png"),
        require("../assets/images/happy-hour.png"),
        require("../assets/images/dinner.png"),
        require("../assets/images/pregame.png"),
        require("../assets/images/party.png"),
        require("../assets/images/go-out.png"),
        require("../assets/images/postgame.png"),
        require("../assets/images/other.png"),
        require("../assets/brunch.png"),
        require("../assets/happy-hour.png"),
        require("../assets/dinner.png"),
        require("../assets/pregame.png"),
        require("../assets/party.png"),
        require("../assets/go-out.png"),
        require("../assets/postgame.png"),
        require("../assets/other.png")
      ])
    ]);
  };

  render() {
    return (
      <View style={styles.container}>
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

export default connect(msp, mdp)(AuthLoadingScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#010112"
  },
  image: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 60,
    marginBottom: 30,
    height: 75,
    width: 150
  }
});
