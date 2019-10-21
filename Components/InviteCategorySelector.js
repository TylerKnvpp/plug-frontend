import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert
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
          <View style={styles.typeContainer}>
            <TouchableOpacity
              name="brunch"
              style={styles.category}
              onPress={this.handlePressBrunch}
              nativeID="brunch"
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
          </View>
          <View style={styles.typeContainer}>
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
          </View>
          <View style={styles.typeContainer}>
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
          </View>
          <View style={styles.typeContainer}>
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
          </View>
          <View style={styles.typeContainer}>
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
          </View>
          <View style={styles.typeContainer}>
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
          </View>
          <View style={styles.typeContainer}>
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
          </View>
          <View style={styles.typeContainer}>
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
        </View>
        <CButton text="Next" onPress={this.handleNext} style={styles.cbutton} />
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
  typeContainer: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  categoryContainer: {
    flexDirection: "column",
    marginBottom: 40
    // marginTop: 20
  },
  instructions: {
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
    paddingLeft: 60,
    paddingRight: 60,
    color: "white"
  },
  category: {
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-between",
    marginBottom: "auto",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto"
  },
  selector: {
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 0,
    marginTop: 0,
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    fontWeight: "900",
    fontSize: 20
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
    marginTop: 50
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
  image: {
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "auto",

    marginTop: 0,
    marginLeft: 0,
    marginRight: 200,
    // marginRight: "auto",
    // marginTop: 60,
    // marginBottom: 30,
    height: 30,
    width: 70
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
    backgroundColor: "#25aae1"
  }
});
