import React, { useEffect, useState } from 'react';
import {SafeAreaView,StyleSheet,View,Text} from 'react-native';
import { FlatList } from 'react-native';
import DashboardListitem from './DashboardListitem';

function DashboardView(props) {

    const [data,setData] = useState([]);

    useEffect(() => {
        loadBookDetails();
    },[]);

    const loadBookDetails = async () => {
           const response = await fetch('https://61dddb4af60e8f0017668ac5.mockapi.io/api/v1/Book');
           const details = await response.json();
           setData(details);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
            <Text style={styles.headerLabel}>List of Books</Text>
            </View>
            <FlatList
             data={data}
             keyExtractor={item => item.id }
             renderItem={({item}) =>
            <DashboardListitem
              bookname={item.name}
              author={item.author}
              price={item.price}
              downloads={item.downloads}
             />
            }
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerLabel: {
        fontSize: 20,
        width: "100%",
        backgroundColor: "lightblue",
        borderWidth: 1,
        textAlign: "center",
        height: 50,
        paddingTop: 10
      },
})
export default DashboardView;