import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Button color="orange" title="Click Me" onPress={() => { console.log("Button Clicked") }} />
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
