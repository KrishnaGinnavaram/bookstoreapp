import React from "react";
import { SafeAreaView, Text } from "react-native";
import { StyleSheet } from "react-native";
export default function App1() {
return (
    <SafeAreaView style={styles.container}>
        <Text>
            Hello React Native!
        </Text>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue"
    }
})