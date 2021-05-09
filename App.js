import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    // PARENT
    <View style={{ backgroundColor: "#fff", flex: 1, flexDirection: "row", justifyContent: "flex-start" }}>
      {/* CHILDREN */}
      <View style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
    </View>
    // Justify Content => Aligns items center of main/primary axis (Horizontal axis if flexDirection is row)
    // Justify Content => Aligns items center of main/primary axis (Vertical axis if flexDirection is column)

  );
}
