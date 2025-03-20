import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import { createStaticNavigation } from "@react-navigation/native";

const AppBottomTabNavigator = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        headerShown: false
      }
    }
  }
});

const Navigation = createStaticNavigation(AppBottomTabNavigator);

export default function AppRoutes() {
  return <Navigation />
}