import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import colors from "../utils/colors";
import fonts from "../utils/fonts";
import Input from "../components/Input";
import Button from "../components/Button";

export default function LoginScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Entre com sua conta!
      </Text>
      <Input
        placeholder="email"
        func={setEmail}
      />
      <Input
        secret
        placeholder="senha"
        func={setPassword}
      />
      <Button
        outlined
        label="Entrar"
        func={null}
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