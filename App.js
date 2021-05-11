import React from 'react';
import { View, Text } from 'react-native';
import AppText from './components/AppText';

export default function App() {
  return (
    // PARENT
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      fontSize: 10 // not supported to view component (No errors)
    }}>
      <AppText style={{

      }}>I love React Native !</AppText>
    </View >
  );
}
//fontFamily => In real time ios and android have different fonts,
//              so we need to use platform API to detect the current platform and load based on that platform