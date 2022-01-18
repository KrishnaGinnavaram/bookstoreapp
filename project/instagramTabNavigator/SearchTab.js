import React from 'react';
import { SafeAreaView,View,Text } from 'react-native';
import { StyleSheet } from 'react-native';
import InstagramHeader from '../../Components/InstagramHeader';

function Search(props) {


    return (
        <SafeAreaView>
            <InstagramHeader />
            <View style={styles.mainScreen}>
           <Text>Search</Text>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    mainScreen: {
        width: "100%",
        height: 600,
        backgroundColor: "lightgray",
        alignItems: "center",
        justifyContent: "center"
    }
})
export default Search;