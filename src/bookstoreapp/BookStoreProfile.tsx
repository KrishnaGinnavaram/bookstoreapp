import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import AvatarComponent from '../components/AvatarComponent';
function BookStoreProfile(props){

    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <AvatarComponent
            size={84}
            activeOpacity={1.0}
            icon={{ name: 'person', type: 'material', color: '#009688' }}
            containerStyle={{
              borderStyle: 'solid',
              borderRadius: 63,
              borderWidth: 4,
              marginTop: 150,
              backgroundColor: "white",
              borderColor: "white",
              alignSelf:'center',
              position: 'absolute'
            }}
            overlayContainerStyle={{}}
          />
          <View>
            <View style={styles.bodyContent}>

              <View style={styles.buttonContainer}>
                <Text style={styles.textFont}>UserName: <Text style={styles.textFontLabel}>Krishna</Text></Text>
                <Text style={styles.textFont}>Email: <Text style={styles.textFontLabel}>Krishna@gmail.com</Text></Text>
              </View>
            </View>
        </View>
        <ButtonComponent
                title="Log Out"
                icon={{}}
                buttonStyle={{
                  backgroundColor: 'rgba(78, 116, 289, 1)',
                  borderColor: 'rgba(78, 116, 289, 1)',
                  borderRadius: 5
                }}
                type="outline"
                titleStyle={{fontSize: 15,color: 'white'}}
                containerStyle={{
                  marginRight: 0.5,
                  justifyContent: "flex-end"
                }}
                onPress={() => {console.log('logout')}}
                />
      </View>
    );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "lightblue",
    height:200,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    height: 0,
    display: "flex",
    marginBottom: 100
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  container: {
      flex: 1,
      display: "flex",
      justifyContent: "space-between"
  },
  buttonContainer: {
    marginTop:0,
    height:300,
    flexDirection: 'column',
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom:10,
    width:250,
    fontSize: 40
  },
  textFont: {
      fontSize: 20
  },
  textFontLabel: {
      color: 'black'
  }
});

export default BookStoreProfile;