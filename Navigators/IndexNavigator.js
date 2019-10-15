import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import PlanScreen from "../Components/PlanScreen";
import Profile from "../Components/Profile";
import AuthLoadingScreen from "../Screens/AuthLoadingScreen";
import InviteFormContainer from "../Containers/InviteFormContainer";

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({
  Plans: PlanScreen,
  ProfileScreen: Profile
});

const AuthStack = createStackNavigator({
  LoginScreen: Login,
  SignUpScreen: SignUp
});

const InviteStack = createStackNavigator({
  Form: InviteFormContainer
});

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
    Invite: InviteStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

// const AppNavigator = createStackNavigator({
//   LoginScreen: Login
// });

export default createAppContainer(AppNavigator);

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       AuthLoading: AuthLoadingScreen,
//       App: AppStack,
//       Auth: AuthStack
//     },
//     {
//       initialRouteName: "AuthLoading"
//     }
//   )
// );
