import React,{useState} from 'react';
import { Pressable, SafeAreaView,Text } from 'react-native';

function Pressables({navigation}) {
    const [pre,setPre] = useState(0);
    const preFunction =() => {
        navigation.navigate("FlatLists");
         setPre(pre + 1);
    }
    return (
        <SafeAreaView>
            <Pressable>
                <Text
                onLongPress={preFunction}
                // onPressIn={preFunction}
                >
                    Press Me!
                </Text>
            </Pressable>
            <Text>Number of Clicks: {pre}</Text>
        </SafeAreaView>
    );
}

export default Pressables;