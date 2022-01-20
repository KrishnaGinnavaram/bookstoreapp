import React from 'react';
import { SafeAreaView,View,Text,StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
function InstagramHeader(props) {
    return (
      <View style={styles.top}>
       <Icon
        name='camera'
        type='evilicon'
        size={30}
         />
        <Text style={{color: "black", fontSize: 20}}> Instagram </Text>
        <Icon
             name='sc-telegram'
             type='evilicon'
             size={30}
        />
       </View>
    );
}
const styles = StyleSheet.create({
    top: {
        position: 'relative',
        top: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        height: "8%",
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default InstagramHeader;