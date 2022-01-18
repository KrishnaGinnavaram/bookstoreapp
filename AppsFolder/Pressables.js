import React,{useState} from 'react';
import { Pressable, SafeAreaView,Text, Button,View } from 'react-native';
import PushNotification from "react-native-push-notification";

function Pressables({navigation}) {
    const [pre,setPre] = useState(0);
    const preFunction =() => {
        navigation.navigate("FlatLists");
        PushNotification.localNotification({
            channelId: "FlatList",
            title: "Flatlist Screen",
            message: "Navigated To FlatList Screen"
        })
         setPre(pre + 1);
    }
    return (
        <SafeAreaView>
            <Pressable>
                <View style={{marginLeft: 30,marginRight: 30}}>
                <Button
                title="Click here to navigate to Flatlists Screen"
                onPress={preFunction} />
                </View>
            </Pressable>
            <Text style={{marginLeft: 120}}>Number of Clicks: {pre}</Text>
        </SafeAreaView>
    );
}

export default Pressables;