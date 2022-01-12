import React from "react";
import {StyleSheet, View } from "react-native";
import Loginscreen from "./AppsFolder/Loginscreen";
export default function App() {
  return (
    <View style={styles.container}>
      <Loginscreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex: 1
  }
})
