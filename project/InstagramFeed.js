import React from 'react';
import { SafeAreaView, StyleSheet,Text } from 'react-native';
import InstagramMainScreen from './InstagramMainScreen';

function InstagramFeed(props) {
    return (
        <SafeAreaView style={styles.instagramView}>
            <InstagramMainScreen />
            {/* <Text>View</Text> */}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    instagramView: {
        flexDirection: "column",
        flex: 1,
    }
})
export default InstagramFeed;