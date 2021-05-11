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
        //shadows(different for ios and android)
        //ios
        shadowColor: "grey",
        //angle or position of shadow => shadowOffset
        shadowOffset: { width: 10, height: 10 },
        //how dark our shadow should be => shadowOpacity(0 => lighter to 1 => darker values)
        shadowOpacity: 1,
        //make shadows softer => shadowRadius
        shadowRadius: 10,

        //android
        elevation: 20,

      }}></View>
    </View>
  );
}
