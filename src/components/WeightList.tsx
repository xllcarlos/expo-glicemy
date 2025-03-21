import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import utils from "../utils/utils"; // Função para formatar datas
import HealthContext from "../contexts/HealthContext";
import colors from "../utils/colors";

const WeightList = () => {
  const { weight } = useContext(HealthContext);

  const renderWeightItem = ({ item }: any) => (
    <View style={styles.item}>
      <Text style={styles.date}>{utils.formatTimestamp(item.timestamp)}</Text>
      <Text style={styles.value}>Peso: {item.weight} Kg</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registros de Peso</Text>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Adicionar Registro</Text>
      </TouchableOpacity>

      <FlatList
        data={weight}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderWeightItem}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum registro encontrado.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f4f4f4",
    paddingTop: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
  empty: {
    textAlign: "center",
    marginVertical: 10,
    color: "#888",
  },
  addButton: {
    marginTop: 20,
    backgroundColor: colors.darkGreen,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16
  },
  addButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default WeightList;