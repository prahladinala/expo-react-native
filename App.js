import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    // PARENT
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      {/* CHILD */}
      <View style={{ backgroundColor: "dodgerblue", flex: 1 }} />
    </View>
  );
}
