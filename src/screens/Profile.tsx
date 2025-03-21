import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../utils/colors";
import fonts from "../utils/fonts";
import UserContext from "../contexts/UserContext";
import Button from "../components/Button";

export default function Profile() {
  const { user, logout } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suas Informações</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.text}>Nome: {user.name}</Text>
        <Text style={styles.text}>Email: {user.email}</Text>
        <Text style={styles.text}>Telefone: {user.phone}</Text>
        <Text style={styles.text}>Tipo: {user.diabetesType}</Text>
        <Text style={styles.text}>Ano de diagnóstico: {user.diagnosisYear}</Text>
      </View>
      <Button
        label="Sair"
        func={() => logout()}
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
  },
  text: {
    fontSize: fonts.mediumText,
    color: colors.darkGreen
  },
  detailsContainer: {
    borderColor: colors.darkGreen,
    borderWidth: 2,
    borderRadius: 8,
    padding: 20,
    gap: 16
  }
});