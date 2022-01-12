import React from 'react';
import { Image, View,StyleSheet,Text, TouchableHighlight} from 'react-native';
function ListItem({title,subTitle,imageUrl,onPress}) {

    return (
        <TouchableHighlight
        underlayColor={"lightgray"}
        onPress={onPress}>
        <View style={styles.container}>
            <Image
            style={styles.image}
            source={{uri:imageUrl}}
            />
        <View style={styles.texts}>
           <Text style={styles.title}>{title}</Text>
           <Text>{subTitle}</Text>
           </View>
        </View>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    container : {
       flexDirection: "row"
    },
    image: {
        width: 100,
        height: 50,
        borderRadius: 5
    },
    texts: {
        marginTop: 18,
        marginLeft: 5
    },
   title: {
       fontWeight: "800"
   }

})
export default ListItem;