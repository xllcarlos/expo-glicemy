import React, { useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import colors from "../utils/colors";
import fonts from "../utils/fonts";
import HealthContext from "../contexts/HealthContext";
import utils from "../utils/utils";

export default function BloodGlucoseCard() {

  const { bloodGlucose } = useContext(HealthContext);
  const lastBloodGlucose: BloodGlucose | null = bloodGlucose.length > 0 ? bloodGlucose[0] : null;

  if (lastBloodGlucose === null) {
    return (
      <TouchableOpacity style={[styles.container, { justifyContent: 'center' }]}>
        <Text style={styles.title}>Insira um registro de glicemia</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.title}>Última glicemia</Text>
        <Text style={styles.text}>{utils.formatTimestamp(lastBloodGlucose?.timestamp)}</Text>
      </View>
      <View>
        <Text style={styles.text}>{lastBloodGlucose?.value} mg/dL</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.lightGreen,
    borderRadius: 16,
    padding: 16
  },
  title: {
    fontSize: fonts.smallTitle,
    fontWeight: 'bold',
    color: colors.white
  },
  text: {
    fontSize: fonts.mediumText,
    color: colors.white
  }
});