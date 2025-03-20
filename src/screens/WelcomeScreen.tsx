import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import fonts from "../utils/fonts";
import colors from "../utils/colors";
import Button from "../components/Button";

export default function WelcomeScreen() {
  const navigation: any = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/backgrounds/insulin-welcome-screen.jpg")}
      style={styles.container}
    >
      <Text style={styles.title}>
        CUIDE DA SUA SAÚDE COM GLICEMY
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          label="Entrar"
          func={() => navigation.navigate("Login")}
        />
        <Button
          outlined
          label="Cadastre-se"
          func={() => navigation.navigate("SignUpUserData")}
        />
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 32,
  },
  buttonContainer: {
    gap: 8
  },
  title: {
    fontSize: fonts.bigTitle,
    fontWeight: 'bold',
    color: colors.white,
    backgroundColor: colors.darkGreen,
    padding: 8,
  }
});