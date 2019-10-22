import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Vibration
} from "react-native";
import CButton from "./CButton";
// import { connect } from 'react-redux'
// import { collectInviteStateCategory } from "../Actions/invite";

class InviteCategorySelector extends React.Component {
  state = {
    category: ""
  };

  handlePressBrunch = e => {
    this.setState({
      category: "brunch"
    });
  };

  handlePressHappyHour = e => {
    this.setState({
      category: "happy-hour"
    });
  };

  handlePressDinner = e => {
    this.setState({
      category: "dinner"
    });
  };

  handlePressPregame = e => {
    this.setState({
      category: "pregame"
    });
  };

  handlePressParty = e => {
    this.setState({
      category: "party"
    });
  };

  handlePressGoOut = e => {
    this.setState({
      category: "go-out"
    });
  };

  handlePressPostgame = e => {
    this.setState({
      category: "postgame"
    });
  };

  handlePressOther = e => {
    this.setState({
      category: "other"
    });
  };

  handleNext = e => {
    if (this.state.category) {
      this.props.handleCategorySelector(this.state);
    } else {
      Alert.alert("Please select a category.");

      Vibration.vibrate();
    }
  };

  render() {
    return (
      <SafeAreaView>
        <Text style={styles.header}>What's the plan?</Text>
        <Text style={styles.instructions}>
          To get started, please select one of the following plan types.
        </Text>
        <View style={styles.categoryContainer}>
          <TouchableOpacity
            name="brunch"
            style={styles.category}
            onPress={this.handlePressBrunch}
          >
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require("../assets/brunch.png")}
            />
            <Text style={styles.selector} name="brunch">
              BRUNCH
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={this.handlePressHappyHour}
            value="happy-hour"
          >
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require("../assets/happy-hour.png")}
            />
            <Text style={styles.selector}>HAPPY HOUR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={this.handlePressDinner}
            value="dinner"
          >
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require("../assets/dinner.png")}
            />
            <Text style={styles.selector}>DINNER</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={this.handlePressPregame}
            value="pregame"
          >
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require("../assets/pregame.png")}
            />
            <Text style={styles.selector}>PREGAME</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={this.handlePressParty}
            value="party"
          >
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require("../assets/party.png")}
            />
            <Text style={styles.selector}>PARTY</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={this.handlePressGoOut}
            value="go-out"
          >
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require("../assets/go-out.png")}
            />
            <Text style={styles.selector}>GO OUT</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={this.handlePressPostgame}
            value="postgame"
          >
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require("../assets/postgame.png")}
            />
            <Text style={styles.selector}>POSTGAME</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={this.handlePressOther}
            value="other"
          >
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require("../assets/other.png")}
            />
            <Text style={styles.selector}>OTHER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <CButton
            text="Next"
            onPress={this.handleNext}
            style={styles.cbutton}
          />
        </View>
      </SafeAreaView>
    );
  }
}

// const mdp = dispatch => {
//   return {
//     // postInvite: invite => dispatch(postInvite(invite))
//     collectInviteStateCategory: category =>
//       dispatch(collectInviteStateCategory(category))
//   };
// };

export default InviteCategorySelector;

const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20
  },
  image: {
    alignContent: "flex-start",
    justifyContent: "flex-start",
    marginBottom: "auto",
    marginTop: 0,
    marginLeft: 0,
    height: 30,
    width: 70
  },
  selector: {
    flex: 1,
    textAlign: "center",
    alignSelf: "stretch",
    color: "white",
    fontWeight: "900",
    fontSize: 20
  },
  typeContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  categoryContainer: {
    flexDirection: "column",
    marginBottom: 20,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 20
  },
  instructions: {
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
    paddingLeft: 60,
    paddingRight: 60,
    color: "white"
  },
  header: {
    color: "white",
    fontWeight: "900",
    fontSize: 18,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  cbutton: {
    marginTop: 20
  },
  safe: {
    alignItems: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    flexWrap: "wrap",

    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#010112"
  },
  label: {
    color: "grey",
    fontWeight: "800"
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
    flex: 1
  },
  fitToText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonContainer: {
    width: 250,
    marginLeft: "auto",
    marginRight: "auto"
  }
});
