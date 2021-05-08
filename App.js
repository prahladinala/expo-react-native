import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View, Alert } from 'react-native';

export default function App() {

  return (
    <View style={[styles.container, styles.text, containerStyles]}>
      <Button color="orange"
        title="Click Me"
        onPress={() => Alert.prompt("title", "Description", (text) => console.log(text))} />
    </View >
  );
}

const containerStyles = { backgroundColor: "blue" }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'green',
  }
});
