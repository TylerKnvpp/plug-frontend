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
import { Ionicons } from "@expo/vector-icons";
import InviteCategorySelector from "../Components/InviteCategorySelector";
import InviteForm from "../Components/InviteForm";
import InviteAddFriendsScreen from "../Screens/InviteAddFriendsScreen";
import PendingInvitesScreen from "../Screens/PendingInvitesScreen";

const AuthStack = createStackNavigator({
  LoginScreen: Login,
  SignUpScreen: SignUp
});

const InvitesStack = createStackNavigator({
  PendingInvites: PendingInvitesScreen,
  Invites: InvitesScreen,
  Category: InviteCategorySelector,
  AddFriends: InviteAddFriendsScreen,
  InviteForm: InviteForm
});

const PlansStack = createStackNavigator({
  Plans: {
    screen: PlansScreen,
    navigationOptions: () => {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-contact" color={tintColor} size={24} />
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
    Plans: {
      screen: PlansStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-mail-unread" size={30} color={tintColor} />
        )
      }
    },
    Invite: {
      screen: InvitesStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-send" size={30} color={tintColor} />
        )
      }
    },
    Friends: {
      screen: FriendsStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-contacts" size={30} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-contact" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Plans",

    tabBarOptions: {
      showIcon: true,
      activeTintColor: "#25aae1",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "#010112"
      }
    }
  }
);

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    TabNavigator: TabNav,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default createAppContainer(AppNavigator);
