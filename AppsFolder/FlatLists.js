import React, {useEffect, useState} from 'react';
import { Alert, FlatList, SafeAreaView, View,StyleSheet, Text, ActivityIndicator } from 'react-native';
import ListItem from '../Components/ListItem';
// import getListings from './Api/Listings';
import listingsApi from './Api/Listings';

// const initialMessages = [
// {
//     id: 1,
//     title: 'message1',
//     image: require('../assests/icon.png')
// },
// {
//     id: 2,
//     title: 'message2',
//     image: require('../assests/icon.png')
// }
// ];


function FlatLists(props) {
    const [listings,setListings] = useState([]);
    useEffect (() => {
     loadListings();
    },[])
    // const [messages,setMessages] = useState(initialMessages);
    const [refreshing,setrefreshing] = useState(false);
    const [error,setError] = useState(false);
    // const [loading,setLoading] = useState(false);
    const deleteMessages = (message) => {
        setListings(listings.filter( m => m.id !== message.id));
    }
    const loadListings = async () => {
    //  setLoading(true);
    //  const response =  await getListings();
    try {
        const response =  await listingsApi.getListings();

        //  setLoading(false);
        console.log(response.ok)
        if(!response.ok) {
            setError(true);
        }
        else {
            setError(false);

        }
         setListings(response.data);
    }
    catch (error) {
        console.log(error)
    }
    }

    // const kk = () => {
    //     setMessages([
    //         {
    //             id: 2,
    //             title: 'message2',
    //             image: require('../assests/icon.pngx')
    //         }
    //     ])
    // }
    return (
        <SafeAreaView style={styles.container}>
        {error && <>
          <Text style={{position: "relative",marginTop: 20}}>Couldn't retrive the data.</Text>
          </>
           }
           {/* <ActivityIndicator animating={loading} size="large" /> */}
        {!error && <FlatList
            data={listings}
            keyExtractor={item => (item.id.toString())}
            renderItem={({item}) =>
                <ListItem
                // onPress={() => Alert.prompt("Title", "Clickable Link ",(text) => console.log(text))}
                title={item.id}
                subTitle={item.title}
                imageUrl={item.images[0].url}
                onPress={() => deleteMessages(item)}
                />
            }
            ItemSeparatorComponent={() =>
               ( <View style={{height: 1,
                width: "100%",
                backgroundColor: "lightgrey",
                marginTop: 10,
                marginBottom: 10}}/>
            )}
            refreshing={refreshing}
            // onRefresh={() => {
            //     setMessages([
            //         {
            //             id: 2,
            //             title: 'message2',
            //             image: require('../assests/icon.png')
            //         }
            //     ])
            // }
            // }
            onRefresh={() => {
                setListings([])
            }}
        />}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container : {
        flex: 1
    }
})
export default FlatLists;