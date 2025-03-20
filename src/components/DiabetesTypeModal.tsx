import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface DiabetesTypeModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (type: string, id: number) => void;
}

const DiabetesTypeModal: React.FC<DiabetesTypeModalProps> = ({ visible, onClose, onSelect }) => {
  const diabetesTypes = [
    'Diabetes Tipo 1',
    'Diabetes Tipo 2',
    'Diabetes Gestacional',
    'Diabetes Mody',
    'Diabetes LADA',
  ];

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Selecione o Tipo de Diabetes</Text>
          {diabetesTypes.map((type, index) => (
            <TouchableOpacity
              key={type}
              style={styles.optionButton}
              onPress={() => {
                onSelect(type, (index + 1))
                onClose();
              }}
            >
              <Text style={styles.optionText}>{type}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#d9534f',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DiabetesTypeModal;