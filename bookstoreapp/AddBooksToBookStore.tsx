import React, { useState } from 'react';
import { SafeAreaView,StyleSheet,Text,View} from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native-elements';

function AddBooksToBookStore(props) {

  const [bookName,setBookName] = useState('');
  const [author,setAuthor] = useState('');
  const [price,setPrice] = useState('');

   const addDetails = async () => {
    fetch('https://61dddb4af60e8f0017668ac5.mockapi.io/api/v1/Book', {
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
            <View>
            <Text style={styles.headerLabel}>Add a New Book</Text>
            </View>

           <View style={{display: "flex",justifyContent: "space-between",height: "90%"}}>
            <View>
            <Text style={styles.label}>BookName:</Text>
            <TextInput
              style={styles.input}
              placeholder='Name of the Book'
              onChangeText={(text) => setBookName(text)}
              maxLength={40}
            />
            <Text style={styles.label}>Author:</Text>
             <TextInput
              style={styles.input}
              placeholder='Name of the Author'
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
            </View>
            <View>
             <Button
                title="ADD"
                buttonStyle={{
                  backgroundColor: 'blue',
                  borderWidth: 2,
                  borderColor: 'white',
                }}
                containerStyle={{
                  width: "90%",
                  marginLeft: 20
                }}
                titleStyle={{ fontWeight: 'bold' }}
                onPress={addDetails}
              />
              </View>
              </View>
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
     marginLeft: 20,
     marginTop: 5
 }
})
export default AddBooksToBookStore;