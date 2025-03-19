import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../utils/colors";
import fonts from "../utils/fonts";
import Input from "../components/Input";
import Button from "../components/Button";

export default function SignUpUserData() {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cadastre seu email e senha!
      </Text>
      <Input
        placeholder="email"
        func={null}
      />
      <Input
        placeholder="senha"
        func={null}
      />
      <Input
        placeholder="confirmar senha"
        func={null}
      />
      <Button
        outlined
        label="Avançar"
        func={() => navigation.navigate("SignUpPersonalData")}
      />
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