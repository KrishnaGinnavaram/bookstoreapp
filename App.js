import React from "react";
import {StyleSheet, View } from "react-native";
import AddBooksToBookStore from "./bookstoreapp/AddBooksToBookStore";

export default function App() {
  return (
    <View style={styles.container}>
      <AddBooksToBookStore />
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex: 1
  }
})
