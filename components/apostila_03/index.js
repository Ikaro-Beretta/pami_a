import React, { useState } from 'react';
import { Text, View , TouchableOpacity } from 'react-native';
import styles from './styles';

export default function apostila03() {
  
  //State
  const [contador, setContador] = useState(0);
  //Função
  function subNumber(){
    setContador (contador-1);
  }
  function addNumber() {
    setContador (contador+1);
  }
  function zerarNumber(){
    setContador (contador-contador);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textCounter}>    Contador    </Text>
      <Text style={styles.textCounter}>{contador}</Text>
      
      <TouchableOpacity 
        style={styles.buttonact}
        onPress={ () => subNumber()}
      >
      <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.buttonact}
        onPress={ () => addNumber()}
      >
      <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={ () => zerarNumber()}
      >
      <Text style={styles.textButton}>Zerar</Text>
      </TouchableOpacity>
    </View>
  );
}