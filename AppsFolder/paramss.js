import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Paramss(props) {
    return (
        <SafeAreaView>
           <Text>{props.title}</Text>
        </SafeAreaView>
    );
}

export default Paramss;