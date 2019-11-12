import React from "react";
import { View, TextInput, Image, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import PendingInvitesCard from "../Components/PendingInvitesCard";
import _ from "lodash";

export default function CategoryCardContainer(props) {
  const clone = _.clone(props.invites);

  const renderInvites = clone.map(inviteObj => {
    return (
      <PendingInvitesCard
        key={inviteObj.id}
        invite={inviteObj}
        handleUpdateCollection={props.handleUpdateCollection}
      />
    );
  });

  return <View>{renderInvites}</View>;
}

const styles = StyleSheet.create({});
