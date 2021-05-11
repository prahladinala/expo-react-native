import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    // PARENT
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      fontSize: 10 // not supported to view component (No errors)
    }}>
      <Text style={{
        //ios
        // fontFamily: "Courier",
        //android
        // fontFamily: "Roboto",
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "600", // "bold", "900",..., "600"
        color: "tomato",
        textTransform: "capitalize",
        // textDecorationLine: "line-through",
        textAlign: "center",
        lineHeight: 30,
      }}>I love React Native ! This is my first React Native App! Here is some more text</Text>
    </View >
  );
}
//fontFamily => In real time ios and android have different fonts,
//              so we need to use platform API to detect the current platform and load based on that platform