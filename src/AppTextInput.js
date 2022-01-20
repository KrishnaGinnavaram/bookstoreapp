import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';

function AppTextInput({...otherPros}) {
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
            {...otherPros}/>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  container : {
    width: "100%",
    backgroundColor: "lightgray"
  }
})
export default AppTextInput;