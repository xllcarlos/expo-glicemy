import React, { useContext, useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import colors from "../utils/colors";
import fonts from "../utils/fonts";
import HealthContext from "../contexts/HealthContext";
import utils from "../utils/utils";

export default function GlycatedHemoglobinCard() {

  const { glycatedHemoglobin } = useContext(HealthContext) as { glycatedHemoglobin: GlycatedHemoglobin[] };

  const [lastGlycatedHemoglobin, setLastGlycatedHemoglobin] = useState<GlycatedHemoglobin | null>(null);
  const [percentage, setPercentage] = useState<number | null>(null);
  const [timestamp, setTimestamp] = useState<string | null>(null);

  useEffect(() => {
    if (glycatedHemoglobin.length > 0) {
      setLastGlycatedHemoglobin(glycatedHemoglobin[0]);
      setPercentage(glycatedHemoglobin[0].percentage);
      setTimestamp(utils.formatTimestamp(glycatedHemoglobin[0].timestamp));
    }
  }, [glycatedHemoglobin]);

  if (lastGlycatedHemoglobin === null) {
    return (
      <TouchableOpacity style={[styles.container, { justifyContent: 'center' }]}>
        <Text style={styles.title}>Insira um registro de hemoglobina glicada</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.title}>Última hemoglobina glicada</Text>
        <Text style={styles.text}>{timestamp}</Text>
      </View>
      <View>
        <Text style={styles.text}>{percentage} %</Text>
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
    backgroundColor: colors.rose,
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