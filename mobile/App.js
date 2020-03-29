import 'intl';
import 'intl/locale-data/jsonp/pt-BR'

import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
    /*<View style={styles.container}>
      <Text style={styles.title}>Exemplo de aplicativo!</Text>
    </View>*/
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e02041',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    justifyContent: 'center',
    fontWeight: "bold",
  },
});
*/