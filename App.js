import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => { console.log("Image Pressed") }}>
        <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}>
        </View>
      </TouchableNativeFeedback>
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
