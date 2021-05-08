import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  console.log(require('./assets/favicon.png'))
  // returns 4

  return (
    <View style={styles.container}>
      <Image source={require('./assets/favicon.png')} />
      <Text>Hello React Native</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
