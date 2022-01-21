import React from "react";
import {StyleSheet, View } from "react-native";
import BottomTabNavigator from "./src/bookstoreapp/BottomTabNavigator";
import 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <BottomTabNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex: 1
  }
})
