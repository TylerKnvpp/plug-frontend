import React from "react";
import InviteCategorySelector from "../Components/InviteCategorySelector";
import InviteForm from "../Components/InviteForm";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { postInvite } from "../Actions/invite";
import { collectInviteStateCategory } from "../Actions/invite";

class InviteScreen extends React.Component {
  static navigationOptions = {
    // title: "Category",
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
    category: ""
  };

  handleCategorySelector = category => {
    // console.log(category.category);
    this.props.collectInviteStateCategory(category.category);

    this.props.navigation.navigate("AddFriends");
  };

  // handleSubmit = plan => {
  //   const cat = this.state.category;
  //   const user = { ...this.props.user };
  //   const createdPlan = {
  //     user_id: user.id,
  //     category: cat.category,
  //     time: plan.time,
  //     location: plan.location,
  //     details: plan.details
  //   };
  //   this.props.postInvite(createdPlan);
  // };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <InviteCategorySelector
          handleCategorySelector={this.handleCategorySelector}
        />
      </SafeAreaView>
    );
  }
}

const mdp = dispatch => {
  return {
    // postInvite: invite => dispatch(postInvite(invite))
    collectInviteStateCategory: category =>
      dispatch(collectInviteStateCategory(category))
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
)(InviteScreen);

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
    backgroundColor: "#010112",
    height: "100%"
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
