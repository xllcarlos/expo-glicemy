import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from '@react-native-vector-icons/ionicons';

import colors from "../utils/colors";
import fonts from "../utils/fonts";

interface SelectInputProps {
  label: string,
  func: any | Function
}

export default function SelectInput({ label, func }: SelectInputProps) {
  return (
    <TouchableOpacity
      onPress={() => func()}
      style={styles.container}
    >
      <Text style={styles.label}>
        {label}
      </Text>
      <Icon
        name="caret-down-outline"
        color={colors.gray}
        size={24}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.gray,
    borderRadius: 4,
    paddingHorizontal: 16
  },
  label: {
    color: colors.gray,
    fontSize: fonts.smallText
  }
});