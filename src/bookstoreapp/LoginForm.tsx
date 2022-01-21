import React,{useState}from 'react';
import { SafeAreaView,View} from 'react-native';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Input,Icon,Text,Card,Button} from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import jwtDecode from 'jwt-decode';
import { Token } from 'typescript';
function LoginForm({navigation}) {
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const onSubmit = async (data) => {
        try {
            fetch("https://jsonplaceholder.typicode.com/posts", {
            // Adding method type
            method: "POST",
            // Adding body or contents to send

            body: JSON.stringify({
                email: data.email,
               password: data.password
            }),
            // Adding headers to the request

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        // Converting to JSON
        .then(response => response.json())
        // Displaying results to console
        .then(data => {console.log(data)});
        //FOR UPDATE PLEASE PASS THE ID TO URL EX : https://jsonplaceholder.typicode.com/posts/101
           }
           catch (error) {
            console.error(error);
          }
      };

     const resetValues = () => {
       reset({
           email: '',
           password: ''
       })
     }
    return (
        <SafeAreaView style={styles.container}>
            <View>
             <Card containerStyle={styles.inputText}>
             <Card.Title style={{fontSize: 20,marginBottom: 30}}>Please enter the below credentials</Card.Title>
             <Controller
              control={control}
              render={({ field: {onChange, onBlur, value} }) => (
                <Input
                  placeholder="Email Id"
                  errorStyle={{ color: 'red' }}
                  errorMessage={errors.email ? 'Email is required.' :
                    (value !== '' && reg.test(value) === false) ? 'Enter a valid email' :
                      ''}
                  onBlur={onBlur}
                  leftIcon={<Icon
                    name="email" tvParallaxProperties={undefined} />}
                  onChangeText={value => (onChange(value))}
                  value={value} autoCompleteType={undefined}                 />
                )}
               name="email"
               rules={{ required: true}}
               defaultValue=""
              />

             <Controller
              control={control}
              render={({ field: {onChange, onBlur, value} }) => (
                console.log(value.length),
                <Input
                  placeholder="Password"
                  errorStyle={{ color: 'red' }}
                  errorMessage={errors.password?.type === 'required'
                    ? 'Password is required.' :
                    // errors.password?.type === 'minLength'
                    (value !== '' && value.length < 4)
                      ? 'Minimum 4 characters are required' : ''}
                  onBlur={onBlur}
                  leftIcon={<Icon
                    name="lock" tvParallaxProperties={undefined} />}
                  onChangeText={value => onChange(value)}
                  value={value}
                  secureTextEntry autoCompleteType={undefined}                 />
                )}
               name="password"
              //  rules={{ required: true,minLength: 4}}
              rules={{required: true}}
               defaultValue=""
              />
            <View style={styles.buttonsView}>
             <Button
                title="Reset"
                buttonStyle={{
                  backgroundColor: 'gray',
                  borderWidth: 2,
                  borderColor: 'white',
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 100
                }}
                titleStyle={{ fontWeight: 'bold' }}
                onPress={resetValues}
              />

           <Button
                title="Log In"
                buttonStyle={{
                  backgroundColor: 'blue',
                  borderWidth: 2,
                  borderColor: 'white',
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 100,
                  marginLeft: 10
                }}
                titleStyle={{ fontWeight: 'bold' }}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
            </Card>
            </View>
        </SafeAreaView>
    );
}

const styles =StyleSheet.create({
  container : {
    width: "100%",
    flex: 1,
    backgroundColor: "orange"
  },
  inputText:{
    position: "relative",
    top: "50%",
    border: "0px"
  },
  loginText: {
      fontSize: 25,
      marginLeft: 120
  },
  buttonsView: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: 80
  }
})
export default LoginForm;