import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Input from "../components/Input";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";
import colors from "../utils/colors";
import fonts from "../utils/fonts";

export default function SignUpPersonalData() {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Insira suas informações
      </Text>
      <Input
        placeholder="nome completo"
        func={null}
      />
      <Input
        placeholder="data de nascimento"
        func={null}
      />
      <SelectInput
        label="sexo"
        func={null}
      />
      <Input
        placeholder="telefone"
        func={null}
      />
      <Button
        outlined
        label="Avançar"
        func={() => navigation.navigate("SignUpHealthData")}
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