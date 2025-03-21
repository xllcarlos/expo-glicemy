import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

// Exemplo de função createGlicemia
const createGlicemia = (glicemiaValue: string, timestamp: number) => {
  // Aqui você pode implementar a lógica para salvar o registro
  console.log('Registro criado:', { glicemiaValue, timestamp });
};

const CreateGlicemiaRecord: React.FC = () => {
  const [glicemiaValue, setGlicemiaValue] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSave = () => {
    if (!glicemiaValue || !date || !time) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Converte a data e hora para um timestamp
    const dateTimeString = `${date} ${time}`;
    const timestamp = new Date(
      dateTimeString.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3')
    ).getTime();

    if (isNaN(timestamp)) {
      Alert.alert('Erro', 'Data ou hora inválida.');
      return;
    }

    // Chama a função createGlicemia
    createGlicemia(glicemiaValue, timestamp);

    Alert.alert('Sucesso', 'Registro de glicemia salvo com sucesso!');
    setGlicemiaValue('');
    setDate('');
    setTime('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Glicemia</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor da Glicemia (mg/dL)"
        keyboardType="numeric"
        value={glicemiaValue}
        onChangeText={setGlicemiaValue}
      />
      <TextInput
        style={styles.input}
        placeholder="Data (DD/MM/AAAA)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Hora (HH:MM)"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
});

export default CreateGlicemiaRecord;