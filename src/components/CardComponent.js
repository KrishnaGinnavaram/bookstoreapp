import React from 'react';
import { View,Text} from 'react-native';
import { StyleSheet } from 'react-native';
import { Card,Icon } from 'react-native-elements';
import { Avatar,Image} from 'react-native-elements';
import ErrorMessage from './ErrorMessage';
import { ScrollView } from 'react-native';
function CardComponent(props) {
    return (
        <View style={styles.contentPart}>
            <Card containerStyle={styles.inputText}>
              <View style={styles.view}>
            <Avatar
            size={40}
            rounded
            icon={{ name: 'rowing' }}
            containerStyle={{ backgroundColor: '#00a7f7',marginRight: 10}} />
            <View>
            <Text style={{color: "black",marginTop: 3}}>Krishna</Text>
            <Text style={{color: "black",fontSize: 10}}>17Jan,2022</Text>
            </View>
            </View>
             <Image
              source={props.imageURL}
              containerStyle={styles.image}
              />
            <View style={{display: "flex",flexDirection: "row",width: "100%"}}>
            <Icon
            style={{margin: 5}}
            name='heart'
            type='evilicon'
             size={25}
             />
              <Icon
            style={{margin: 5}}
            name='comments-o'
            type='font-awesome'
             size={25}
             />
            <Icon
            style={{margin: 5}}
             name='sc-telegram'
             type='evilicon'
             size={25}
             />
            </View>
            <Text style={{margin: 5,fontWeight: "900"}}>{props.likes}</Text>
            <View style={{flexDirection: "row"}}>
            <Text style={{margin: 5,fontWeight: "900"}}>Krishna</Text>
            <Text style={{margin: 5,paddingRight: 110}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </Text>
            </View>
            </Card>
           </View>
    );
}

const styles = StyleSheet.create({
    inputText: {
       margin: 0,
        padding: 0,
        flex: 1
    },
    view: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10
    },
    image: {
        height: 450,
        width: "100%",
        backgroundColor: "blue",
    }
})
export default CardComponent;