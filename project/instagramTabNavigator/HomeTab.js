import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { StyleSheet } from 'react-native';

function HomeTab(props) {
    return (
        <SafeAreaView styles={styles.homeTab}>
           <Text> Home Tab </Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    homeTab : {
        flex: 1,
    }
})
export default HomeTab;