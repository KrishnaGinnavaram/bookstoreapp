import React, { useEffect,useState } from 'react';
import { Button, Image, SafeAreaView, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
// var ImagePicker = require('react-native-image-picker');

// import { launchImageLibrary } from 'react-native-image-picker';
function ImagePickers(props) {
 const [photos,setPhotos] = useState(null);
 const uploadPhoto = () => {
     const options= {
         noData: true
     }
     ImagePicker.showImagePicker(options,response => {
        console.log("response",response)
        if(response?.uri) {
            console.log(response.uri)
            setPhotos(response.uri);
        }
    });
 };
    return (
        <SafeAreaView style={{flex: 1}}>
            {photos &&
            <Image
            source={{width: 300,height: 300,uri: photos}}
           />}
            <Button
            title="Upload A Picture"
            color="blue"
            onPress={uploadPhoto}/>

        </SafeAreaView>
    );
}

export default ImagePickers;