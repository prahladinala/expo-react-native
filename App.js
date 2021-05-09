import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    // PARENT
    <View style={{
      backgroundColor: "#fff", flex: 1,
      flexDirection: "row", //horizantal
      justifyContent: "center", //main axis
      alignItems: 'center', //secondary axis
      alignContent: "center",
      flexWrap: "wrap"
    }}>
      {/* CHILDREN */}
      <View style={{ backgroundColor: "dodgerblue", width: 100, height: 300 }} />
      <View style={{ backgroundColor: "gold", width: 100, height: 200 }} />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "grey", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "greenyellow", width: 100, height: 100 }} />


    </View>
    // Justify Content => Aligns items center of main/primary axis (Horizontal axis if flexDirection is row)
    // Justify Content => Aligns items center of main/primary axis (Vertical axis if flexDirection is column)

    // alignItems => Aligns items center of secondary axis

    //alignContent => Assigned to Container (Parent) , Applies to the entire container

    //alignItems => Assigned to Container (Parent)
    //alignSelf => Assigned to Item (Child)
  );
}
