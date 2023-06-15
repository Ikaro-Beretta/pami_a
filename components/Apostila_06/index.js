import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

function Apostila06() {
  const [massa, setMassa] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);

  function Calcular() {
    const valor = massa / (altura * altura);
    setResultado(valor);
  }

  function ImcText() {
      if (resultado < 18.5) {
        return 'Abaixo do peso!';
      }
      if (resultado > 18.5 && resultado < 24.99) {
        return 'Peso normal!';
      }
      if (resultado > 25 && resultado < 29.99) {
        return 'Sobrepeso!';
      }
      if (resultado > 30 && resultado < 34.99) {
        return 'Obesidade grau 1!';
      }
      if (resultado > 35 && resultado < 39.99) {
        return 'Obesidade grau 2!';
      }
      if (resultado > 40) {
        return 'Obesidade grau 3!';
      }
    }
    
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Exemplo 06</Text>
      <View style={styles.entradaImc}>
        <TextInput
          placeholder='Massa'
          placeholderTextColor='lightgray'
          keyboardType='numeric'
          style={styles.input}
          onChangeText={(entrada) => setMassa(entrada)}
        />

        <TextInput
          placeholder='Altura'
          placeholderTextColor='lightgray'
          keyboardType='numeric'
          style={styles.input}
          onChangeText={(entrada) => setAltura(entrada)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => Calcular()}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>

      <Text style={styles.resultados}>{ImcText()}</Text>
    </View>
  );
}

export default Apostila06;
