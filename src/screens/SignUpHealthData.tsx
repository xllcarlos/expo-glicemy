import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../utils/colors";
import fonts from "../utils/fonts";
import SelectInput from "../components/SelectInput";
import Input from "../components/Input";
import Button from "../components/Button";

export default function SignUpHealthData() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Qual seu tipo de Diabetes?
      </Text>
      <SelectInput
        label="selecionar tipo"
        func={null}
      />
      <Text style={styles.title}>
        Em que ano sua Diabetes foi diagnosticada?
      </Text>
      <Input
        placeholder="ano"
        func={null}
      />
      <Button
        label="Finalizar"
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