import React from 'react';
import { SafeAreaView,StyleSheet,Text} from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native-elements';

function AddBooksToBookStore(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>BookName:</Text>
            <TextInput
              style={styles.input}
              placeholder='Add a Book Name'
              maxLength={40}
            />
            <Text style={styles.label}>Author:</Text>
             <TextInput
              style={styles.input}
              placeholder='Add the Name of the Author'
              maxLength={40}
            />
            <Text style={styles.label}>Price:</Text>
             <TextInput
              style={styles.input}
              placeholder='Add a Price'
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
                // onPress={resetValues}
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