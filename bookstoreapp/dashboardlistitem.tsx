import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text,Avatar } from 'react-native-elements';
import { TouchableHighlight } from 'react-native';
function DashboardListitem({bookname,author,downloads,price}) {
    return (
        <TouchableHighlight>
        <View style={styles.container}>
           <Avatar
            size="medium"
             overlayContainerStyle={{backgroundColor: 'lightgray'}}
             activeOpacity={1.0}
             containerStyle={{margin: 3,width: 120,height: 110}}
            />

           <View>
           <Text style={styles.label}>Bookname:</Text>
               <Text style={styles.details}>{bookname}</Text>
               <Text style={styles.label}>Author:</Text>
               <Text style={styles.details}>{author}</Text>
               <Text style={styles.label}>Downloads:</Text>
               <Text style={styles.details}>{downloads}</Text>
           </View>
           <View>
               <Text style={styles.price}>${price}</Text>
           </View>
        </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 120,
        borderWidth: 1  ,
        borderColor: "black",
        borderStyle: "solid",
        display: "flex",
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 25,
        marginBottom: 5
    },
    box: {
        margin: 3,
        backgroundColor: "lightgray",
        height: 92,
        width: 120
    },
    details: {
        marginLeft: 10
    },
    price: {
        marginLeft: 45,
        marginTop: 40,
        fontSize: 20
    },
    priceLabel: {
        marginLeft: 25,
        // marginTop: 20,
        color: "darkgray",
        fontSize: 20
    },
    label: {
        color: "darkgray",
        marginLeft: 10
    }
})
export default DashboardListitem;