import React, { useContext, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../utils/colors";
import fonts from "../utils/fonts";
import Input from "../components/Input";
import Button from "../components/Button";
import AppContext from "../contexts/AppContext";
import Alert from "../components/Alert";

export default function SignUpUserData() {
  const { alert, handleSetAlert } = useContext(AppContext);

  const navigation: any = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /**
   * Valida os campos de entrada do formulário.
   * @returns {boolean} Retorna `true` se todos os campos forem válidos, caso contrário, `false`.
   */
  function validateInputs(): boolean {
    if (!email || !password || !confirmPassword) {
      handleSetAlert("Todos os campos são obrigatórios.");
      return false;
    }
    if (password !== confirmPassword) {
      handleSetAlert("As senhas não coincidem.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      handleSetAlert("Email inválido.");
      return false;
    }
    return true;
  };

  /**
   * Lida com o evento de avançar para a próxima tela.
   * Valida os campos de entrada e, se forem válidos, navega para a tela "SignUpPersonalData".
   */
  function handleNext(): void {
    if (validateInputs()) {
      navigation.navigate("SignUpPersonalData", { email, password });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cadastre seu email e senha!
      </Text>
      {alert ? <Alert /> : null}
      <Input
        placeholder="email"
        func={(email: string) => setEmail(email)}
      />
      <Input
        placeholder="senha"
        func={(password: string) => setPassword(password)}
      />
      <Input
        placeholder="confirmar senha"
        func={(confirmPassword: string) => setConfirmPassword(confirmPassword)}
      />
      <Button
        outlined
        label="Avançar"
        func={() => handleNext()}
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