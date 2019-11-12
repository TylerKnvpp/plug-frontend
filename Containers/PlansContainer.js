import React from "react";
import { View, TextInput, Image, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import PlanCard from "../Components/PlanCard";
import { fetchUserInvites } from "../Actions/invite";
import { fetchUserPlans } from "../Actions/invite";

class PlansContainer extends React.Component {
  state = {
    invites: []
  };

  componentDidMount() {
    if (this.props.invites) {
      const acceptedInvites = [...this.props.invites];
      const sorted = acceptedInvites.sort(function(a, b) {
        return new Date(b.time) - new Date(a.time);
      });
      if (this.state.invites.length === 0) {
        this.setState({
          invites: sorted
        });
      }
    }
  }

  render() {
    const renderPlans = this.state.invites.map(inviteObj => {
      return <PlanCard key={inviteObj.id} invite={inviteObj} />;
    });

    return (
      <View style={styles.container}>
        <View style={styles.catContainer}>
          <Text style={styles.brunch}>UPCOMING PLANS</Text>

          {renderPlans}
        </View>
      </View>
    );
  }
}

const msp = state => {
  return {
    invites: state.invite.acceptedInvites,
    user: state.auth.userObj
  };
};

const mdp = dispatch => {
  return {
    fetchUserPlans: id => dispatch(fetchUserPlans(id))
  };
};

export default connect(msp, mdp)(PlansContainer);

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    marginRight: 175
  },
  image: {
    height: 60,
    marginRight: 0
  },
  brunch: {
    color: "#d3d3d3",
    fontWeight: "900",
    fontSize: 32,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 10
  },
  catContainer: {
    // backgroundColor: "#25aae1"
  },
  container: {
    marginTop: 10,
    backgroundColor: "#010112"
  }
});
