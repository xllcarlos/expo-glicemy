import React from "react";
import { TextInput } from "react-native";
import colors from "../utils/colors";

interface InputProps {
  placeholder: string,
  func: any | Function,
  secret?: boolean
}
export default function Input({placeholder, func, secret}: InputProps) {
  return(
    <TextInput
      placeholder={placeholder}
      onChangeText={value => func(value)}
      secureTextEntry={secret}
      style={{
        width: '100%',
        height: 48,
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.gray,
        borderRadius: 4,
        paddingHorizontal: 16
      }}
    />
  )
}