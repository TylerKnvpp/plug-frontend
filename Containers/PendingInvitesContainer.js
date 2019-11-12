import React from "react";
import { View, TextInput, Image, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import CategoryCardContainer from "./CategoryCardContainer";
import _ from "lodash";

class PendingInvitesContainer extends React.Component {
  state = {
    invites: [],
    brunch: [],
    happyHour: [],
    dinner: [],
    pregame: [],
    party: [],
    goOut: [],
    postgame: [],
    other: []
  };

  componentDidMount() {
    if (this.props.invites) {
      // copy
      const invitesClone = _.clone(this.props.invites);
      // sort by time
      const sorted = invitesClone.sort(function(a, b) {
        return new Date(b.time) - new Date(a.time);
      });
      // seperate
      let brunchArr = _.clone(invitesClone);
      brunchArr = brunchArr.filter(invite => invite.category === "brunch");

      let happyArr = _.clone(invitesClone);
      happyHourArr = happyArr.filter(
        invite => invite.category === "happy-hour"
      );

      let dinnerArr = _.clone(invitesClone);
      dinnerArr = dinnerArr.filter(invite => invite.category === "dinner");

      let pregameArr = _.clone(invitesClone);
      pregameArr = pregameArr.filter(invite => invite.category === "pregame");

      let partyArr = _.clone(invitesClone);
      partyArr = partyArr.filter(invite => invite.category === "party");

      let goArr = _.clone(invitesClone);
      goOutArr = goArr.filter(invite => invite.category === "go-out");

      let postgameArr = _.clone(invitesClone);
      postgameArr = postgameArr.filter(
        invite => invite.category === "postgame"
      );

      let otherArr = _.clone(invitesClone);
      otherArr = otherArr.filter(invite => invite.category === "other");
      // setState
      if (this.state.invites.length === 0) {
        this.setState({
          invites: sorted,
          brunch: brunchArr,
          happyHour: happyHourArr,
          dinner: dinnerArr,
          pregame: pregameArr,
          party: partyArr,
          goOut: goOutArr,
          postgame: postgameArr,
          other: otherArr
        });
      }
    }
  }

  handleUpdateCollection = inviteObj => {
    if (this.state.invites) {
      const invitesCopy = _.clone(this.state.invites);
      const parsed = parseInt(inviteObj);
      const newCollection = invitesCopy.filter(invite => invite.id !== parsed);
      this.setState({
        invites: newCollection
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.brunch.length > 0 ? (
          <View style={styles.catContainer}>
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/images/brunch.png")}
              />
              <Text style={styles.brunch}>BRUNCH</Text>
            </View>
            <CategoryCardContainer invites={this.state.brunch} />
          </View>
        ) : null}
        {this.state.happyHour.length > 0 ? (
          <View style={styles.catContainer}>
            <View style={styles.hhContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/images/happy-hour.png")}
              />
              <Text style={styles.happyHour}>HAPPY HOUR</Text>
            </View>
            <CategoryCardContainer invites={this.state.happyHour} />
          </View>
        ) : null}
        {this.state.dinner.length > 0 ? (
          <View style={styles.catContainer}>
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/images/dinner.png")}
              />
              <Text style={styles.dinner}>DINNER</Text>
            </View>
            <CategoryCardContainer invites={this.state.dinner} />
          </View>
        ) : null}
        {this.state.pregame.length > 0 ? (
          <View style={styles.catContainer}>
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/images/pregame.png")}
              />
              <Text style={styles.pregame}>PREGAME</Text>
            </View>
            <CategoryCardContainer invites={this.state.pregame} />
          </View>
        ) : null}
        {this.state.party.length > 0 ? (
          <View style={styles.catContainer}>
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/images/party.png")}
              />
              <Text style={styles.party}>PARTY</Text>
            </View>
            <CategoryCardContainer invites={this.state.party} />
          </View>
        ) : null}
        {this.state.goOut.length > 0 ? (
          <View style={styles.catContainer}>
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/images/go-out.png")}
              />
              <Text style={styles.goOut}>GO OUT</Text>
            </View>
            <CategoryCardContainer invites={this.state.goOut} />
          </View>
        ) : null}
        {this.state.postgame.length > 0 ? (
          <View style={styles.catContainer}>
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/images/postgame.png")}
              />
              <Text style={styles.postgame}>POSTGAME</Text>
            </View>
            <CategoryCardContainer invites={this.state.postgame} />
          </View>
        ) : null}
        {this.state.other.length > 0 ? (
          <View style={styles.catContainer}>
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/images/other.png")}
              />
              <Text style={styles.other}>OTHER</Text>
            </View>
            <CategoryCardContainer invites={this.state.other} />
          </View>
        ) : null}
      </View>
    );
  }
}

const msp = state => {
  return {
    invites: state.invite.renderInvites
  };
};

export default connect(msp, null)(PendingInvitesContainer);

const styles = StyleSheet.create({
  hhContainer: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    marginRight: 90
  },
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
    color: "#25aae1",
    fontWeight: "900",
    fontSize: 32,
    marginTop: 10
  },
  happyHour: {
    color: "#FFFC00",
    fontWeight: "900",
    fontSize: 32,
    marginTop: 10
  },
  dinner: {
    color: "#F0277C",
    fontWeight: "900",
    fontSize: 32,
    marginTop: 10
  },
  pregame: {
    color: "#7A25E2",
    fontWeight: "900",
    fontSize: 32,
    marginTop: 10
  },
  party: {
    color: "#C4FD2A",
    fontWeight: "900",
    fontSize: 32,
    marginTop: 10
  },
  goOut: {
    color: "#25E197",
    fontWeight: "900",
    fontSize: 32,
    marginTop: 10
  },
  postgame: {
    color: "#00908E",
    fontWeight: "900",
    fontSize: 32,
    marginTop: 10
  },
  other: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 32,
    marginTop: 10
  },
  catContainer: {
    // backgroundColor: "#25aae1"
  },
  container: {
    marginTop: 20,
    backgroundColor: "#010112"
  }
});
