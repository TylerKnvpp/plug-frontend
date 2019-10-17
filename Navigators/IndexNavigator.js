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
    screen: PlansScreen
  }
});

const UsersStack = createStackNavigator({
  Users: UsersIndexScreen
});

const ProfileStack = createStackNavigator({
  Profile: Profile
});

const TabNav = createBottomTabNavigator(
  {
    Plans: PlansStack,
    Invite: InvitesStack,
    Users: UsersStack,
    Profile: ProfileStack
  },
  {
    initialRouteName: "Plans"
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
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Plans") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === "Users") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      backgroundColor: "black",
      activeTintColor: "red",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(AppNavigator);
