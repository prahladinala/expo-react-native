import React from 'react';
import { View, Text } from 'react-native';
import AppText from './components/AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function App() {
  return (
    // PARENT
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      fontSize: 10 // not supported to view component (No errors)
    }}>
      <MaterialCommunityIcons name="email" size={200} color="dodgerblue" />
    </View >
  );
}
//fontFamily => In real time ios and android have different fonts,
//              so we need to use platform API to detect the current platform and load based on that platform