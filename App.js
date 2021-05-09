import React from 'react';
import { Dimensions, StyleSheet, SafeAreaView, Platform, StatusBar, View } from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks"
export default function App() {

  console.log(useDimensions())
  console.log(useDeviceOrientation())

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: "100%",
        height: "30%"
      }}></View>
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
