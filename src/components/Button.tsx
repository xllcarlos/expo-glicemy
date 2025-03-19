import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import fonts from "../utils/fonts";
import colors from "../utils/colors";

interface ButtonProps {
  label: string,
  func: any | Function,
  outlined?: boolean
}

export default function Button({ label, func, outlined }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={func}
      style={outlined ? [styles.container, { backgroundColor: colors.white, borderWidth: 2, borderColor: colors.darkGreen }] : styles.container}
    >
      <Text style={outlined ? [styles.label, { color: colors.darkGreen }] : styles.label}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkGreen,
    borderRadius: 24
  },
  label: {
    fontSize: fonts.mediumText,
    color: colors.white
  }
});