import React, { useContext, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Input from "../components/Input";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";
import colors from "../utils/colors";
import fonts from "../utils/fonts";
import AppContext from "../contexts/AppContext";
import GenderModal from "../components/GenderModal";

export default function SignUpPersonalData() {
  const { alert, handleSetAlert } = useContext(AppContext);

  const navigation: any = useNavigation();
  const route: any = useRoute();

  // Pegando parametros de email e password
  const { email, password } = route.params;

  // Estados para os inputs
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [genderModalVisible, setGenderModalVisible] = useState(false);

  /**
   * Valida os campos de entrada do formulário.
   * 
   * @returns {boolean} Retorna `true` se todos os campos forem válidos, caso contrário, `false`.
   */
  function validateInputs(): boolean {
    if (!fullName || !birthDate || !gender || !phone) {
      handleSetAlert("Todos os campos são obrigatórios.");
      return false;
    }
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(birthDate)) {
      handleSetAlert("Data de nascimento inválida. Use o formato DD/MM/AAAA.");
      return false;
    }
    if (!/^\d{10,11}$/.test(phone)) {
      handleSetAlert("Número de telefone inválido. Deve conter 10 ou 11 dígitos.");
      return false;
    }
    return true;
  }

  /**
   * Lida com o evento de avançar para a próxima tela.
   * 
   * Valida os campos de entrada e, se forem válidos, navega para a tela "SignUpHealthData".
   */
  function handleNext(): void {
    if (validateInputs()) {
      navigation.navigate("SignUpHealthData", {
        email,
        password,
        fullName,
        birthDate,
        gender,
        phone,
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Insira suas informações
      </Text>
      <Input
        placeholder="nome completo"
        func={(fullName: string) => setFullName(fullName)}
      />
      <Input
        placeholder="data de nascimento"
        func={(birthDate: string) => setBirthDate(birthDate)}
      />
      <SelectInput
        label={gender ? gender : "gênero"}
        func={() => setGenderModalVisible(true)}
      />
      <Input
        placeholder="telefone"
        func={(phone: string) => setPhone(phone)}
      />
      <Button
        outlined
        label="Avançar"
        func={() => handleNext()}
      />
      <GenderModal
        visible={genderModalVisible}
        onClose={() => setGenderModalVisible(false)}
        onSelect={setGender}
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