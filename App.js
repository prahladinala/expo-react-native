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
    }}>
      <AppText>I Love React Native !</AppText>
    </View >
  );
}