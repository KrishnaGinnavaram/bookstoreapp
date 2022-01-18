import React from 'react';
import { Image, SafeAreaView, StyleSheet, TextInput,Text,View, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../Components/ErrorMessage';
import PushNotification from "react-native-push-notification";
import { useNavigation } from '@react-navigation/native';
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function Loginscreen({navigation}) {
const onSubmit = async(result) => {
    navigation.navigate("Pressables");
    PushNotification.createChannel({
        channelId: "FlatList",
        channelName: "FlatList"
    })
   try {
    fetch("https://jsonplaceholder.typicode.com/posts", {
    // Adding method type
    method: "POST",
    // Adding body or contents to send

    body: JSON.stringify({
        email: result.email,
       password: result.password
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
//FOR UPDATE PLEASE PASS THE ID TO URL EX : https://jsonplaceholder.typicode.com/posts/101
   }
   catch (error) {
    console.error(error);
  }
}
    return (
        <SafeAreaView  style={styles.area}>
            <View style={{flex: 1,padding: 15}}>
            <Image
            source={require('../assests/favicon.png')}
            style={styles.logo}/>
            <Formik
            initialValues={{email: '',password: ''}}
            onSubmit={(data) => onSubmit(data)}
            // onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
           {  ({handleChange,handleSubmit,errors,setFieldTouched,touched}) => (
            <View style={{flex: 1,marginTop: 25}}>
            <Text>Email :</Text>
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={handleChange("email")}
              keyboardType='email-address'
              placeholder='Enter email address'
              onBlur={() => setFieldTouched("email")}
            />
            {touched.email && <ErrorMessage error={errors.email}/>}
            <Text>Password :</Text>
             <TextInput
              style={styles.input}
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={handleChange("password")}
              placeholder='Enter password'
              secureTextEntry
              onBlur={() => setFieldTouched("password")}
            />
            {touched.password && <ErrorMessage error={errors.password}/>}
            <Button
             title='Submit'
             onPress={handleSubmit}
            // onPress={() => {navigation.navigate("Pressables")}}
             />
            </View>
           )
            }
            </Formik>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    area : {
      flex: 1
    },
    logo: {
        alignSelf: 'center'
    },
    input: {
           alignSelf: 'center',
           marginTop : 10,
           marginBottom: 10,
           marginLeft: 5,
           marginRight: 5,
           width: "100%",
           backgroundColor: "lightgray",
           borderRadius: 5
    }
})
export default Loginscreen;