import React, { useState } from 'react';
import { View , Text , TextInput , TouchableOpacity , StyleSheet } from 'react-native';

import styles from './styles'

function Apostila05(){
      
      const [n1, setN1] = useState (0);
      const [n2, setN2] = useState (0);
      const [total, setTotal] = useState (0);

      function Soma(){
            const conta = parseInt(n1) + parseInt(n2);
            setTotal(conta.toString());
      }
      function Sub(){
            const conta = parseInt(n1) - parseInt(n2);
            setTotal(conta.toString());
      }
      function Div(){
            const conta = parseInt(n1) / parseInt(n2);
            setTotal(conta.toString());
      }
      function Multi(){
            const conta = parseInt(n1) * parseInt(n2);
            setTotal(conta.toString());
      }
      function zerarCampos() {
            setN1(0);
            setN2(0);
            setTotal(0);
      }
          

      return(
            <View style={styles.container}>
                  <Text style={styles.paragraph}>Apostila05</Text>

                  <Text style={styles.txtSaida}>Calculadora Básica</Text>

                  <Text style={styles.textLabel}>1º número</Text>
                  <TextInput 
                        style={styles.txtEntrada}
                        onChangeText={(entrada)=> setN1(entrada)}
                        value={n1}
                        >
                  </TextInput>

                  <Text style={styles.txtSaida}>(+) (-) (/) (*)</Text>

                  <Text style={styles.textLabel}>2º número</Text>
                  <TextInput 
                        style={styles.txtEntrada}
                        onChangeText={(entrada)=> setN2(entrada)}
                        value={n2}
                  >
                  </TextInput>

                  <Text style={[styles.txtSaida, {margin: 0}]}>=</Text>

                  <Text style={styles.textLabel}>Total</Text>
                  <TextInput 
                        style={styles.txtEntrada}
                        editable={false}
                        value={total}
                  >
                  </TextInput>

                  <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button} onPress={() => Soma()}>
                  <Text style={styles.textButton}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => Sub()}>
                  <Text style={styles.textButton}>-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => Div()}>
                  <Text style={styles.textButton}>/</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => Multi()}>
                  <Text style={styles.textButton}>*</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.buttonZerar} onPress={() => zerarCampos()}>
                  <Text style={styles.textButton}>Zerar</Text>
                  </TouchableOpacity>
                  </View>

            </View>
      )
};

export default Apostila05;

