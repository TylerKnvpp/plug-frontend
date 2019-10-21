import React from "react";
import { ScrollView, Button, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { fetchUserInvites } from "../Actions/invite";
import { Ionicons } from "@expo/vector-icons";
import PlansContainer from "../Containers/PlansContainer";

class PlansScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Plans",
    headerRight: (
      <Ionicons
        name="ios-add"
        style={{ marginRight: 20 }}
        size={24}
        color="white"
        onPress={() => {
          navigation.navigate("Invites");
        }}
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
    invites: []
  };

  componentDidMount() {
    if (this.props.userRedux) {
      const userCopy = { ...this.props.userRedux };
      this.setState({
        user: userCopy
      });
      //
      this.props.fetchUserInvites(userCopy.id);
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <PlansContainer /*user={this.state.user}*/ />
      </ScrollView>
    );
  }
}

const msp = state => {
  return {
    userRedux: state.auth.userObj
  };
};

const mdp = dispatch => {
  return {
    fetchUserInvites: id => dispatch(fetchUserInvites(id))
  };
};

export default connect(
  msp,
  mdp
)(PlansScreen);

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#010112"
  }
});
