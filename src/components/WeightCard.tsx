import React, { useContext, useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../utils/colors";
import fonts from "../utils/fonts";
import HealthContext from "../contexts/HealthContext";

export default function WeightCard() {

  const { weight } = useContext(HealthContext) as { weight: Weight[] };

  const [lastWeight, setLastWeight] = useState<Weight | null>(null);
  const [weightValue, setWeightValue] = useState<number | null>(null);

  useEffect(() => {
    if (weight.length > 0) {
      setLastWeight(weight[0]);
      setWeightValue(weight[0].weight);
    }
  }, [weight]);


  if (lastWeight === null) {
    return (
      <TouchableOpacity style={[styles.container, { justifyContent: 'center' }]}>
        <Text style={styles.title}>Insira seu peso</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>Peso</Text>
      <Text style={styles.text}>{weightValue} Kg</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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