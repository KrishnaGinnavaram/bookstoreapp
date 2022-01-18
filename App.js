import React from "react";
import {StyleSheet, View } from "react-native";
import AuthNavigator from "./AppsFolder/AuthNavigator";
import LoginForm from "./project/LoginForm";
import Kk from "./project/Kk";
import InstagramFeed from "./project/InstagramFeed";
import TabNavigator from "./project/instagramTabNavigator/TabNavigator";
export default function App() {
  return (
    <View style={styles.container}>
      <AuthNavigator />
      {/* <LoginForm /> */}
      {/* <Kk /> */}
      {/* <InstagramFeed /> */}
      {/* <TabNavigator /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex: 1
  }
})
