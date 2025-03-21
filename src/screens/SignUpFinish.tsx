import React, { useContext, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import colors from "../utils/colors";
import fonts from "../utils/fonts";
import Button from "../components/Button";

export default function SignUpFinish() {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sua conta foi criada com sucesso!
      </Text>
      <Button 
      outlined 
      label="Entrar" 
      func={() => navigation.navigate('Login')} />
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