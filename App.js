import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log("TEXT PRESSED")
    alert("Multi Line Function")
  }
  return (

    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native - Long Text to check Number of Lines numberOfLines={1}</Text>
    </View>
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
