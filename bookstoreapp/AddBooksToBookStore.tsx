import React, { useState } from 'react';
import { SafeAreaView,StyleSheet,Text} from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native-elements';

function AddBooksToBookStore(props) {

  const [bookName,setBookName] = useState('');
  const [author,setAuthor] = useState('');
  const [price,setPrice] = useState('');

   const addDetails = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        // Adding method type
        method: "POST",
        // Adding body or contents to send

        body: JSON.stringify({
            name: bookName,
           author: author,
           price: price
        }),
        // Adding headers to the request

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    // Converting to JSON
    .then(response => response.json())
    // Displaying results to console
    .then(data => console.log(data));
   }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>BookName:</Text>
            <TextInput
              style={styles.input}
              placeholder='Add a Book Name'
              onChangeText={(text) => setBookName(text)}
              maxLength={40}
            />
            <Text style={styles.label}>Author:</Text>
             <TextInput
              style={styles.input}
              placeholder='Add the Name of the Author'
              onChangeText={(text) => setAuthor(text)}
              maxLength={40}
            />
            <Text style={styles.label}>Price:</Text>
             <TextInput
              style={styles.input}
              placeholder='Add a Price'
              onChangeText={(text) => setPrice(text)}
              maxLength={10}
            />
             <Button
                title="ADD"
                buttonStyle={{
                  backgroundColor: 'blue',
                  borderWidth: 2,
                  borderColor: 'white',
                //   borderRadius: 30,
                }}
                containerStyle={{
                  width: "90%",
                  marginLeft: 20
                }}
                titleStyle={{ fontWeight: 'bold' }}
                onPress={addDetails}
              />
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        alignSelf: 'center',
        marginTop : 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        width: "90%",
        backgroundColor: "lightgray",
        borderRadius: 5
 },
 label: {
     marginLeft: 20
 }
})
export default AddBooksToBookStore;