import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import colors from "../utils/colors";

export default function BarFilter({ records, selected, func }: any) {
  return (
    <View style={{ width: '100%', height: 48, flexDirection: 'row',  gap: 8, alignItems: 'center', justifyContent: 'center' }}>
      {records.map((item: any) => <TouchableOpacity
        key={item}
        style={{ padding: 10, backgroundColor: selected === item ? colors.lightGreen : 'white' }}
        onPress={() => func(item)}
      >
        <Text style={{color: selected === item ? colors.white : 'black'}}>{item}</Text>
      </TouchableOpacity>)}
    </View>
  );
}