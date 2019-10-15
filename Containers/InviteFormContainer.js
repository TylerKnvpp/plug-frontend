import React from "react";
import InviteCategorySelector from "../Components/InviteCategorySelector";
import InviteForm from "../Components/InviteForm";
import { SafeAreaView, StyleSheet, Text } from "react-native";

class InviteFormContainer extends React.Component {
  static navigationOptions = {
    title: "What's the Plan?",
    headerStyle: {
      backgroundColor: "#010112",
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  state = {
    category: "",
    time: "",
    location: "",
    details: ""
  };

  handleCategorySelector = type => {
    this.setState({
      category: type
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.category != this.state.category;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.category ? (
          <InviteForm />
        ) : (
          <InviteCategorySelector
            handleCategorySelector={this.handleCategorySelector}
          />
        )}
      </SafeAreaView>
    );
  }
}

export default InviteFormContainer;

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontWeight: "800",
    fontSize: 18,
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    color: "red"
  },
  safe: {
    alignItems: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#010112"
  },
  label: {
    color: "grey",
    fontWeight: "800"
  },
  image: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 60,
    marginBottom: 30,
    height: 75,
    width: 150
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
