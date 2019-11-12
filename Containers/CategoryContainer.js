import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import CategoryCardContainer from "./CategoryCardContainer";

import _ from "lodash";

export default function CategoryCardContainer(props) {
  const clone = _.clone(props.invites);

  const renderInvites = clone.map(inviteObj => {
    return (
      <View style={styles.catContainer}>
        <View style={styles.iconContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../assets/images/brunch.png")}
          />
          <Text style={styles.brunch}>BRUNCH</Text>
        </View>
        <CategoryCardContainer invites={props.invites} />
      </View>
    );
  });

  return <View>{renderInvites}</View>;
}

const styles = StyleSheet.create({});
