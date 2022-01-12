import React from 'react';
// import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native';
// import { AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
function AsyncStorages(props) {

    // const asyncStorage = useAsyncStorage();
    const demo =  async () => {
        try {
            await AsyncStorage.getItem('person',JSON.stringify({id: 1}));
            const result = await AsyncStorage.setItem('person');
            console.log(JSON.parse(result))
        }
        catch(error) {
            console.log(error)
        }

    }
    demo();

    return null;
}

export default AsyncStorages;