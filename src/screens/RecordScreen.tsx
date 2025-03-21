import React, { useContext, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import BloodGlucoseList from "../components/BloodGlucoseList";
import BarFilter from "../components/BarFilter";
import GlycatedHemoglobinList from "../components/GlycatedHemogobinList";
import WeightList from "../components/WeightList";
import HeightList from "../components/HeightList";

const RecordsScreen = () => {

  const [records, setRecords] = useState(["Glicemia", "Hemoglobina Glicada", "Peso", "Altura"]);
  const [selected, setSelected] = useState(records[0]);

  if (selected === records[0]) {
    return (
      <>
        <BloodGlucoseList />
        <BarFilter records={records} selected={selected} func={setSelected} />
      </>
    );
  }

  if (selected === records[1]) {
    return (
      <>
        <GlycatedHemoglobinList />
        <BarFilter records={records} selected={selected} func={setSelected} />
      </>
    );
  }

  if (selected === records[2]) {
    return (
      <>
        <WeightList />
        <BarFilter records={records} selected={selected} func={setSelected} />
      </>
    );
  }

  if (selected === records[3]) {
    return (
      <>
        <HeightList />
        <BarFilter records={records} selected={selected} func={setSelected} />
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
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
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RecordsScreen;