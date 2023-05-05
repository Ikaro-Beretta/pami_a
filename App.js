import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {View, StyleSheet, Text } from 'react-native';


import Index from './components/apostila_3';

export default function app () {
  return (
    <View style={styles.container}>
      <Index />
      <StatusBar style='auto' />
    </View>
  );

}

const styles = StyleSheet.create ({
  container :{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9e9e9e',
    padding: 8,
  },
});