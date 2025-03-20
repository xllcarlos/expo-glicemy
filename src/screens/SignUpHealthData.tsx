import React, { useContext, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import colors from "../utils/colors";
import fonts from "../utils/fonts";
import SelectInput from "../components/SelectInput";
import Input from "../components/Input";
import Button from "../components/Button";
import DiabetesTypeModal from "../components/DiabetesTypeModal";
import AppContext from "../contexts/AppContext";
import Alert from "../components/Alert";
import UserContext from "../contexts/UserContext";

export default function SignUpHealthData() {
  const { alert, handleSetAlert } = useContext(AppContext);
  const { signup } = useContext(UserContext);

  const route: any = useRoute();

  // Pegando parametros de email e password
  const { email, password, gender, phone, fullName, birthDate } = route.params;

  // Estados para os inputs
  const [diabetesType, setDiabetesType] = useState("");
  const [diabetesTypeId, setDiabetesTypeId] = useState("");
  const [diagnosisYear, setDiagnosisYear] = useState("");
  const [diabetesTypeVisible, setDiabetesTypeVisible] = useState(false);

  /**
   * Valida os campos de entrada do formulário.
   * 
   * @returns {boolean} Retorna `true` se todos os campos forem válidos, caso contrário, `false`.
   */
  function validateInputs(): boolean {
    if (!diabetesType || !diagnosisYear) {
      handleSetAlert("Todos os campos são obrigatórios.");
      return false;
    }
    if (!/^\d{4}$/.test(diagnosisYear)) {
      handleSetAlert("Ano de diagnóstico inválido. Use o formato AAAA.");
      return false;
    }
    const currentYear = new Date().getFullYear();
    if (parseInt(diagnosisYear) > currentYear || parseInt(diagnosisYear) < 1900) {
      handleSetAlert("Ano de diagnóstico inválido. Deve estar entre 1900 e o ano atual.");
      return false;
    }
    return true;
  }

  /**
     * Finaliza o cadastro do usuário.
     * 
     * Valida os campos de entrada e, se forem válidos, exibe uma mensagem de sucesso.
     */
  function handleSignUp(): void {
    if (validateInputs()) {
      signup(email, password, fullName, birthDate, gender, phone, diabetesTypeId, diagnosisYear);
    }
  }

  return (
    <View style={styles.container}>
      {alert ? <Alert /> : null}
      <Text style={styles.title}>
        Qual seu tipo de Diabetes?
      </Text>
      <SelectInput
        label={diabetesType ? diabetesType : "selecionar tipo"}
        func={() => setDiabetesTypeVisible(true)}
      />
      <Text style={styles.title}>
        Em que ano sua Diabetes foi diagnosticada?
      </Text>
      <Input
        placeholder="ano"
        func={(year: string) => setDiagnosisYear(year)}
      />
      <Button
        label="Finalizar"
        func={() => handleSignUp()}
      />
      <DiabetesTypeModal
        visible={diabetesTypeVisible}
        onClose={() => setDiabetesTypeVisible(false)}
        onSelect={(diabetesType: string, id: number) => {
          setDiabetesType(diabetesType)
          setDiabetesTypeId(id.toString())
        }}
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