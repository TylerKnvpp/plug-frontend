import React from "react";
import { View, TextInput, Image, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import PendingInvitesCard from "../Components/PendingInvitesCard";
import { fetchUserInvites } from "../Actions/invite";

class PendingInvitesContainer extends React.Component {
  state = {
    invites: []
  };

  componentDidUpdate() {
    if (this.props.invites) {
      const invitesCopy = [...this.props.invites];
      const filtered = invitesCopy.filter(obj => obj.id === obj.id);
      if (this.state.invites.length === 0) {
        this.setState({
          invites: invitesCopy
        });
      }
    }
  }

  render() {
    // const renderEvents = this.state.invites.map(inviteObj => {
    //   return <PendingInvitesCard key={inviteObj.id} invite={inviteObj} />;
    // });

    const copy = [...this.state.invites];
    const copy1 = [...this.state.invites];
    const copy2 = [...this.state.invites];
    const copy3 = [...this.state.invites];
    const copy4 = [...this.state.invites];
    const copy5 = [...this.state.invites];
    const copy6 = [...this.state.invites];
    const copy7 = [...this.state.invites];

    const brunchArray = copy.filter(invite => invite.category === "brunch");
    const renderBrunch = brunchArray.map(inviteObj => {
      return <PendingInvitesCard key={inviteObj.id} invite={inviteObj} />;
    });

    const happyHourArray = copy1.filter(
      invite => invite.category === "happy-hour"
    );

    const renderHappyHour = happyHourArray.map(inviteObj => {
      return <PendingInvitesCard key={inviteObj.id} invite={inviteObj} />;
    });

    const dinnerArray = copy2.filter(invite => invite.category === "dinner");

    const renderDinner = dinnerArray.map(inviteObj => {
      return <PendingInvitesCard key={inviteObj.id} invite={inviteObj} />;
    });

    const pregameArray = copy3.filter(invite => invite.category === "pregame");

    const renderPregame = pregameArray.map(inviteObj => {
      return <PendingInvitesCard key={inviteObj.id} invite={inviteObj} />;
    });

    const partyArray = copy4.filter(invite => invite.category === "party");
    const renderParty = partyArray.map(inviteObj => {
      return <PendingInvitesCard key={inviteObj.id} invite={inviteObj} />;
    });

    const goOutArray = copy5.filter(invite => invite.category === "go-out");

    const renderGoOut = goOutArray.map(inviteObj => {
      return <PendingInvitesCard key={inviteObj.id} invite={inviteObj} />;
    });

    const postgameArray = copy6.filter(
      invite => invite.category === "postgame"
    );

    const renderPostgame = postgameArray.map(inviteObj => {
      return <PendingInvitesCard key={inviteObj.id} invite={inviteObj} />;
    });
    const otherArray = copy7.filter(invite => invite.category === "other");

    const renderOther = otherArray.map(inviteObj => {
      return <PendingInvitesCard key={inviteObj.id} invite={inviteObj} />;
    });

    // const renderRequests = copy8.map(inviteObj => {
    //   return <PendingInvitesCard key={inviteObj.id} invite={inviteObj} />;
    // });
    return (
      <View style={styles.container}>
        {/* <View style={styles.catContainer}>
           <Text style={styles.brunch}>BRUNCH</Text>
           {renderEvents}
         </View> */}
        {brunchArray.length > 0 ? (
          <View style={styles.catContainer}>
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/images/BRUNCHICON.png")}
              />
              <Text style={styles.brunch}>BRUNCH</Text>
            </View>
            {renderBrunch}
          </View>
        ) : null}
        {happyHourArray.length > 0 ? (
          <View style={styles.catContainer}>
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/images/HAPPYHOURICON.png")}
              />
              <Text style={styles.happyHour}>HAPPY HOUR</Text>
            </View>
            {renderHappyHour}
          </View>
        ) : null}
        {dinnerArray.length > 0 ? (
          <View style={styles.catContainer}>
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/images/DINNERICON.png")}
              />
              <Text style={styles.dinner}>DINNER</Text>
            </View>
            {renderDinner}
          </View>
        ) : null}
        {pregameArray.length > 0 ? (
          <View style={styles.catContainer}>
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/images/PREGAMEICON.png")}
              />
              <Text style={styles.pregame}>PREGAME</Text>
            </View>
            {renderPregame}
          </View>
        ) : null}
        {partyArray.length > 0 ? (
          <View style={styles.catContainer}>
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/images/PARTYICON.png")}
              />
              <Text style={styles.party}>PARTY</Text>
            </View>
            {renderParty}
          </View>
        ) : null}
        {goOutArray.length > 0 ? (
          <View style={styles.catContainer}>
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/images/GOOUTICON.png")}
              />
              <Text style={styles.goOut}>GO OUT</Text>
            </View>
            {renderGoOut}
          </View>
        ) : null}
        {postgameArray.length > 0 ? (
          <View style={styles.catContainer}>
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/images/POSTGAMEICON.png")}
              />
              <Text style={styles.postgame}>POSTGAME</Text>
            </View>
            {renderPostgame}
          </View>
        ) : null}
        {otherArray.length > 0 ? (
          <View style={styles.catContainer}>
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/images/OTHERICON.png")}
              />
              <Text style={styles.other}>OTHER</Text>
            </View>
            {renderOther}
          </View>
        ) : null}
      </View>
    );
  }
}

const msp = state => {
  return {
    invites: state.invite.pendingInvites
  };
};

// const mdp = dispatch => {
//   return {
//     fetchUserInvites: id => dispatch(fetchUserInvites(id))
//   };
// };

export default connect(
  msp,
  null
)(PendingInvitesContainer);

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
