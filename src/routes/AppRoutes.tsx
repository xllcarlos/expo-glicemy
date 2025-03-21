import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStaticNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import colors from "../utils/colors";
import RecordsScreen from "../screens/RecordScreen";

const AppBottomTabNavigator = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        headerShown: false,
        title: 'Início',
        tabBarIcon: ({ focused, color, size }) => (<Ionicons name="home-outline" size={24} color={focused ? colors.darkGreen : colors.gray} />)
      }
    },
    Records: {
      screen: RecordsScreen,
      options: {
        headerShown: false,
        title: 'Registros',
        tabBarIcon: ({ focused, color, size }) => (<Ionicons name="document-outline" size={24} color={focused ? colors.darkGreen : colors.gray} />)
      }
    },
    Profile: {
      screen: Profile,
      options: {
        headerShown: false,
        title: 'Perfil',
        tabBarIcon: ({ focused, color, size }) => (<Ionicons name="person-outline" size={24} color={focused ? colors.darkGreen : colors.gray} />)
      }
    }
  }
});

const Navigation = createStaticNavigation(AppBottomTabNavigator);

export default function AppRoutes() {
  return <Navigation />
}