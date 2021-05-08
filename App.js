import React from 'react';
import { Button, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
