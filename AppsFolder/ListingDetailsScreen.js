import React from "react";
import {Image, SafeAreaView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import ListItem from "../Components/ListItem";
export default function ListingDetailsScreen() {
return (
    <SafeAreaView >
       <Image
       style={styles.image}
       source= {require('../assests/favicon.png')}
       />
       <View style={styles.texts}>
           <Text style={styles.title}>Cube for Sale</Text>
           <Text style={styles.price}>$100</Text>
           <ListItem
           image={require('../assests/icon.png')}
           title={"krishna"}
           subTitle={"5 Listings"}/>
       </View>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    image : {
        width: 90,
        height: 90,
        marginLeft: 20,
        backgroundColor: "lightblue"
    },
    texts: {
        padding: 20
    },
    title: {
        fontSize: 20
    },
    price: {
        color: "lightgreen",
        fontWeight: "bold",
        fontSize: 15,
        marginVertical: 5,
        marginLeft: 5
    }
})