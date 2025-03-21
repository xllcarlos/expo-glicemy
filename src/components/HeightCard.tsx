import React, { useContext, useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../utils/colors";
import fonts from "../utils/fonts";
import HealthContext from "../contexts/HealthContext";

export default function HeightCard() {

  const {height} = useContext(HealthContext) as {height: Height[]};

  const [lastHeight, setLastHeight] = useState<Height | null>(null);
  const [heightValue, setHeightValue] = useState<number | null>(null);

  useEffect(() => {
    if (height.length > 0) {
      setLastHeight(height[0]);
      setHeightValue(height[0].height);
    }
  }, [height]);

  if (lastHeight === null) {
    return (
      <TouchableOpacity style={[styles.container, { justifyContent: 'center' }]}>
        <Text style={styles.title}>Insira sua altura</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>Altura</Text>
      <Text style={styles.text}>{heightValue} m</Text>
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