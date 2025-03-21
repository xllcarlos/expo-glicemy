import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../utils/colors";
import fonts from "../utils/fonts";
import UserContext from "../contexts/UserContext";
import BloodGlucoseCard from "../components/BloodGlucoseCard";
import HeightCard from "../components/HeightCard";
import WeightCard from "../components/WeightCard";
import ImcCard from "../components/ImcCard";
import GlycatedHemoglobinCard from "../components/GlycatedHemoglobinCard";

export default function Home() {
  const { user } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Olá, {user.name.split(" ")[0]}
      </Text>

      <BloodGlucoseCard />
      <GlycatedHemoglobinCard />

      <View style={{ flexDirection: 'row', gap: 16 }}>
        <WeightCard />
        <HeightCard />
      </View>

      <ImcCard />

      <Text style={styles.subtitle}>
        Menu
      </Text>
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
  subtitle: {
    fontSize: fonts.mediumTitle,
    color: colors.darkGreen,
    fontWeight: 'bold'
  }
});