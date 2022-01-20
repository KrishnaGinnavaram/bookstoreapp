import React from "react";
import {StyleSheet, View } from "react-native";
import BottomTabNavigator from "./src/bookstoreapp/BottomTabNavigator";
import TwoColumnDashboardLayout from "./src/bookstoreapp/TwoColumnDashBoardLayout";

export default function App() {
  return (
    <View style={styles.container}>
      <BottomTabNavigator />
      {/* <TwoColumnDashboardLayout /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex: 1
  }
})
