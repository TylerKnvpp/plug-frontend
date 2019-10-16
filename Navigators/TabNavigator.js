import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation-tabs";
import UsersIndexScreen from "../Screens/UsersIndexScreen";
import PlansScreen from "../Screens/PlansScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import Icon from "react-native-vector-icons/FontAwesome5";

const TabNavigator = createBottomTabNavigator({
  Plans: {
    screen: PlansScreen,
    navigationOptions: {
      tabBarLabel: "Plans"
    }
  },
  Invites: {
    screen: PlansScreen,
    navigationOptions: {
      tabBarLabel: "Plans"
    }
  },
  Users: {
    screen: UsersIndexScreen,
    navigationOptions: {
      tabBarLabel: "Plans"
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Plans"
    }
  }
});

//Issue: the tab navigator needs to be wrapped inside a stack navigator
// export default createStackNavigator({ TabNavigator }, { headerMode: "none" });
export default TabNavigator;
