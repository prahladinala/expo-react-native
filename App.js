import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => { console.log("Image Pressed") }}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }} />
      </TouchableWithoutFeedback>
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
