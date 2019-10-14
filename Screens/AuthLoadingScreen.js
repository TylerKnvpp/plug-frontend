import React from "react";
import {
  ActivityIndicator,
  Image,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from "react-native";

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const loggedInUser = await AsyncStorage.getItem("loggedInUser");

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

export default AuthLoadingScreen;

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
