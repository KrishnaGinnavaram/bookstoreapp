import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text,Avatar } from 'react-native-elements';
import { TouchableHighlight } from 'react-native';
import { Dimensions } from 'react-native';
function TwoColumnDashboardLayout ({bookname,author,downloads,price}) {
    return (
        <TouchableHighlight>
        <View style={styles.container}>
           <Avatar
            size="medium"
             overlayContainerStyle={{backgroundColor: 'lightgray'}}
             activeOpacity={1.0}
             containerStyle={{margin: 10,width: "90%",height: 70}}
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
        width: (Dimensions.get('window').width - 30) /2,
        borderWidth: 1  ,
        borderColor: "black",
        borderStyle: "solid",
        marginLeft: 10,
        marginTop: 25,
        marginBottom: 5,
    },
    details: {
        marginLeft: 10,
        width: 100
    },
    price: {
        marginLeft: 10,
        fontSize: 20
    },
    priceLabel: {
        marginLeft: 25,
        color: "darkgray",
        fontSize: 20
    },
    label: {
        color: "darkgray",
        marginLeft: 10
    }
})
export default TwoColumnDashboardLayout;