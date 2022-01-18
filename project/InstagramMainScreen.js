import React from 'react';
import { SafeAreaView,View,Text, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import CardComponent from '../Components/CardComponent';
import InstagramHeader from '../Components/InstagramHeader';
import { Avatar } from 'react-native-elements';
function InstagramMainScreen(props) {
    const dataList = [
        {
          image_url: 'https://randomuser.me/api/portraits/men/36.jpg',
        },
        {
          image_url:
            'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
        },
        {
          image_url:
            'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg',
        },
        {
          image_url:
            'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
        },
        {
          image_url:
            'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
        },
      ];


    return (
        <SafeAreaView style={styles.mainScreen}>
            <InstagramHeader />
            <ScrollView>
            {/* <View style={{height: 80,backgroundColor: "white"}}> */}
            <ScrollView horizontal>
            <View style={{display: "flex",flexDirection: "row",backgroundColor: "white"}}>
                {dataList.map((l, i) => (
            <View style={{margin: 10}}>
              <Avatar
                size={64}
                rounded
                source={l.image_url ? { uri: l.image_url } : {}}
                containerStyle={{ borderColor: 'pink',borderWidth: 1,borderStyle: 'solid' }}
              />
            </View>
            ))}
                </View>
                </ScrollView>
              {/* </View> */}
            <CardComponent likes="101 likes"
            imageURL={require('../assests/Mario-PNG-Image.png')}
            />
            <CardComponent likes="500 likes"
            imageURL={require('../assests/icon.png')}
            />
             <CardComponent likes="900 likes"
            imageURL={require('../assests/adaptive-icon.png')}
            />
           </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    mainScreen: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
})
export default InstagramMainScreen;