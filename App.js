import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import AppNavigator from "./AppsFolder/AppNavigator";
import AsyncStorages from "./AppsFolder/AsyncStorages";
import AuthNavigator from "./AppsFolder/AuthNavigator";
import FetchGet from "./AppsFolder/FetchGet.js";
import FlatLists from "./AppsFolder/FlatLists";
import ImagePickers from "./AppsFolder/ImagePickers";
import Loginscreen from "./AppsFolder/Loginscreen";
import NetInfos from "./AppsFolder/NetInfos";
import Paramss from "./AppsFolder/paramss";
import Pressables from "./AppsFolder/Pressables";
import StackNavigators from "./AppsFolder/StackNavigators";
import Switches from "./AppsFolder/Switches";
// import FlatLists from "./AppsFolder/FlatLists";
import TextInputs from "./AppsFolder/TextInputs";
import Counter from "./ReactNative-Redux/Counter";
// import ListingDetailsScreen from "./AppsFolder/ListingDetailsScreen";
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
