import React from 'react';
import { View, Text } from 'react-native';
import styles from './style'; // Importa os estilos que vamos criar

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>RECEITAS NOW</Text>
    </View>
  );
}