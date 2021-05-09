import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    // PARENT
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      {/* CHILDREN */}
      <View style={{ backgroundColor: "dodgerblue", flex: 1 }} />
      <View style={{ backgroundColor: "gold", flex: 1 }} />
      <View style={{ backgroundColor: "tomato", flex: 1 }} />
    </View>
  );
}
