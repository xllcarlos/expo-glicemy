import React, { useContext, useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../utils/colors";
import fonts from "../utils/fonts";
import HealthContext from "../contexts/HealthContext";

export default function ImcCard() {

  const { weight, height } = useContext(HealthContext) as { weight: Weight[], height: Height[] };

  const [lastWeight, setLastWeight] = useState<Weight | null>(null);
  const [lastHeight, setLastHeight] = useState<Height | null>(null);
  const [imcValue, setImcValue] = useState<number | null>(null);

  useEffect(() => {
    if (weight.length > 0 && height.length > 0) {
      setLastWeight(weight[0]);
      setLastHeight(height[0]);
      const imc = weight[0].weight / (height[0].height * height[0].height);
      setImcValue(imc);
    }
  }, [weight, height]);

  if (imcValue === null) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <Text style={styles.title}>Insira seu peso e altura para visualizar o IMC</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>Indice de massa corporal (IMC)</Text>
      <Text style={styles.text}>{imcValue.toFixed(1)}</Text>
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
    backgroundColor: colors.darkGreen,
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