import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    // PARENT
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
        //borders
        borderWidth: 10,
        borderColor: "royalblue",
        borderRadius: 10,
        borderTopWidth: 20
      }}></View>
    </View>
  );
}
