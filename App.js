import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, SafeAreaView, Platform } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Button color="orange"
        title="Click Me"
        onPress={() => Alert.prompt("title", "Description", (text) => console.log(text))} />
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
