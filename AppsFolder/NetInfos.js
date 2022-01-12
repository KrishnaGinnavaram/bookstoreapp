import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { useNetInfo } from '@react-native-community/netinfo';
function NetInfos(props) {
//    NetInfo.fetch().then((netinfo) => console.log(netinfo));
NetInfo.addEventListener((netinfo) => console.log(netinfo));
const netInfo = useNetInfo();
return (
    netInfo.isInternetReachable ?
    <SafeAreaView>
      <Text>Internet Reachable</Text>
    </SafeAreaView> :

     <SafeAreaView>
     <Text>Internet Not Reachable</Text>
   </SafeAreaView>
)

//    return null
}

export default NetInfos;