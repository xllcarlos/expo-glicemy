import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../utils/colors";
import fonts from "../utils/fonts";
import UserContext from "../contexts/UserContext";

export default function Home() {
  const { user } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, {user.name.split(" ")[0]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 32,
    gap: 16
  },
  title: {
    fontSize: fonts.bigTitle,
    color: colors.darkGreen,
    fontWeight: 'bold'
  }
});