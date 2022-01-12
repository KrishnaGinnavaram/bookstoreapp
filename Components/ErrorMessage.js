import React from 'react';
import { StyleSheet, Text } from 'react-native';

function ErrorMessage({error}) {
    return (
        <Text style={styles.errorMessage}>
           {error}
        </Text>
    );
}
const styles = StyleSheet.create({
    errorMessage : {
        color: "red"
    }
})
export default ErrorMessage;