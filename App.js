import React from "react";
import {StyleSheet, View } from "react-native";
import BottomTabNavigator from "./bookstoreapp/BottomTabNavigator";

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
