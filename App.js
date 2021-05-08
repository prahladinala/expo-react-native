import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View, Alert } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Button color="orange"
        title="Click Me"
        onPress={() => Alert.alert("My Title", "My Message", [{ text: "Yes", onPress: () => console.log("YES") }, { text: "No", onPress: () => console.log("NO") }])} />
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
