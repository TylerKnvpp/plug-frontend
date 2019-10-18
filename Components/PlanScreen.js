import React from "react";
import {
  AsyncStorage,
  Button,
  Text,
  StyleSheet,
  SafeAreaView
} from "react-native";
import { connect } from "react-redux";
import { getUserProfile } from "../Actions/auth";

class PlanScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "MY PLANS",
    headerRight: (
      <Button
        onPress={() => navigation.navigate("Invite")}
        title="Profile"
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
    user: {}
  };

  handlePress = e => {
    AsyncStorage.clear();
    this.props.navigation.navigate("AuthLoading");
  };

  componentDidMount() {
    AsyncStorage.getItem("loggedInUser").then(json => {
      try {
        const user = JSON.parse(json);
        if (user) {
          this.props.fetchProfile(user.id);
        }
      } catch (e) {
        console.log(e);
      }
    });

    const newUser = { ...this.props.user };
    if (newUser !== this.state.user) {
      this.setState({
        user: newUser
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.user != this.props.user;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Welcome {this.props.user.full_name}! </Text>
        <Text style={styles.header}>Id: {this.props.user.id}! </Text>
        <Button title="Log Out" onPress={this.handlePress} />
      </SafeAreaView>
    );
  }
}

const mdp = dispatch => {
  return {
    fetchProfile: data => dispatch(getUserProfile(data))
  };
};

const msp = state => {
  return {
    user: state.fetch.user
  };
};

export default connect(
  msp,
  mdp
)(PlanScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#010112",
    flex: 1,
    alignItems: "center"
  },
  header: {
    fontWeight: "900",
    fontSize: 40,
    marginTop: 50,
    color: "white"
  }
});
