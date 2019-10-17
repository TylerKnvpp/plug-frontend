import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import PlansScreen from "../Screens/PlansScreen";
import Profile from "../Components/Profile";
import AuthLoadingScreen from "../Screens/AuthLoadingScreen";
import UsersIndexScreen from "../Screens/UsersIndexScreen";
import InviteFormContainer from "../Containers/InviteFormContainer";
import InvitesScreen from "../Screens/InvitesScreen";
import FriendRequestsScreen from "../Screens/FriendRequestsScreen";
import FriendsScreen from "../Screens/FriendsScreen";
import Icon from "@expo/vector-icons/FontAwesome";

const AuthStack = createStackNavigator({
  LoginScreen: Login,
  SignUpScreen: SignUp
});

const InvitesStack = createStackNavigator({
  Form: InviteFormContainer,
  Invites: InvitesScreen
});

const PlansStack = createStackNavigator({
  Plans: {
    screen: Profile,
    navigationOptions: () => {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" color={tintColor} size={24} />
      );
    }
  }
});

const FriendsStack = createStackNavigator({
  Friends: FriendsScreen,
  Users: UsersIndexScreen,
  FriendRequests: FriendRequestsScreen
});

const ProfileStack = createStackNavigator({
  Profile: Profile
});

const TabNav = createBottomTabNavigator(
  {
    Plans: PlansStack,
    Invite: InvitesStack,
    Users: FriendsStack,
    Profile: ProfileStack
  },
  {
    initialRouteName: "Plans",

    tabBarOptions: {
      activeTintColor: "#25aae1",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "#010112"
      }
    }
  }
);

const AppNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  TabNavigator: TabNav,
  Auth: AuthStack
});

export default createAppContainer(AppNavigator);
