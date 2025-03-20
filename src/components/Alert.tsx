import React, { useContext } from "react";
import { Text, View } from "react-native";

import AppContext from "../contexts/AppContext";
import colors from "../utils/colors";

export default function Alert() {
  const { alert } = useContext(AppContext);

  return (
    <View >
      <Text style={{ color: colors.rose, fontWeight: 'bold' }}>
        {alert}
      </Text>
    </View>
  );
}