import React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpUserData from "../screens/SignUpUserData";
import SignUpPersonalData from "../screens/SignUpPersonalData";

const AuthStack = createNativeStackNavigator({
  initialRouteName: 'Welcome',
  screens: {
    Welcome: {
      screen: WelcomeScreen,
      options: {
        headerShown: false
      }
    },
    Login: {
      screen: LoginScreen,
      options: {
        title: ''
      }
    },
    SignUpUserData: {
      screen: SignUpUserData,
      options: {
        title: ''
      }
    },
    SignUpPersonalData: {
      screen: SignUpPersonalData,
      options: {
        title: ''
      }
    }
  }
});

const Navigation = createStaticNavigation(AuthStack);

export default function AuthRoutes() {
  return <Navigation />
}