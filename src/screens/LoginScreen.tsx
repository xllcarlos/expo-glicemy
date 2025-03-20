import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import colors from "../utils/colors";
import fonts from "../utils/fonts";
import Input from "../components/Input";
import Button from "../components/Button";
import UserContext from "../contexts/UserContext";
import AppContext from "../contexts/AppContext";
import Alert from "../components/Alert";

export default function LoginScreen() {
  const { login } = useContext(UserContext);
  const { alert } = useContext(AppContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleLogin() {
    login(email, password);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Entre com sua conta!
      </Text>
      {alert ? <Alert /> : false}
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
        func={() => login(email, password)}
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