import React from "react";
import {StyleSheet, View } from "react-native";
import AddBooksToBookStore from "./bookstoreapp/AddBooksToBookStore";
import BottomTabNavigator from "./bookstoreapp/BottomTabNavigator";
import DashboardView from "./bookstoreapp/DashboardView";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AddBooksToBookStore /> */}
      <BottomTabNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex: 1
  }
})
