import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import PlanScreen from "../Components/PlanScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import AuthLoadingScreen from "../Screens/AuthLoadingScreen";

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({
  Plans: PlanScreen,
  Profile: ProfileScreen
});
const AuthStack = createStackNavigator({
  LoginScreen: Login,
  SignUpScreen: SignUp
});

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
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
