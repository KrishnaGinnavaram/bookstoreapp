import React from 'react';
import { SafeAreaView, View,Text,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import FlatLists from './FlatLists';
import Switches from './Switches';
//navigation object wont be available as a prop to child components
const Link = () => {
    const navigation = useNavigation();
    return (
        <Button
        title="Link to Tweet Details"
        onPress={() => {navigation.navigate("TweetDetails",{id: 2})}}
        />
    )
}
const Tweets =({navigation}) => {
    return (
    <SafeAreaView>
        <Text>Tweets</Text>
        <Button
        title="Tweet details"
        onPress={() => navigation.navigate("TweetDetails",{id: 1})}
        />
        <Link />
    </SafeAreaView>
    )
}

const Account =() => {
    return (
    <SafeAreaView>
        <Text>Account</Text>
    </SafeAreaView>
    )
}

const TweetDetailsChild =() => {
    //if you are in child component make use of useRoute() hook
    const route = useRoute();
    return (
    <SafeAreaView>
        <Text>Tweet Details {route.params.id}</Text>
    </SafeAreaView>
    )
}

const TweetDetails =({navigation,route}) => {
    return (
    <View>
        <Text>Tweet Details {route.params.id}</Text>
        <Button
        title="Go to FlatLists"
        // onPress={() => navigation.goBack()
        onPress={() => navigation.navigate("FlatLists")
        }
        />
        <TweetDetailsChild />
    </View>
    )
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
    return (
   <Stack.Navigator initialRouteName="Tweets"  screenOptions={{title : "First Screen Tweets",headerStyle:{backgroundColor: "orange"},headerTintColor:"white",headerShown: true}}>
       <Stack.Screen name="Tweets" component={Tweets}
       options={{title : "First Screen Tweets",headerStyle:{backgroundColor: "blue"},headerTintColor:"white"}}/>
       <Stack.Screen name="TweetDetails" component={TweetDetails} options={({route}) => ({title: route.params.id})}/>
       <Stack.Screen name="FlatLists" component={FlatLists} />
   </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return (
   <Tab.Navigator
   tabBarOptions={{activeBackgroundColor: "orange",
            activeTintColor: "white", inactiveBackgroundColor: "darkgray",
        inactiveTintColor: "yellow"}}
   >
       {/* <Tab.Screen name="Tweets" component={Tweets}/> */}
       <Tab.Screen name="Tweets" component={StackNavigator}/>
       <Tab.Screen name="Account" component={Account} />
   </Tab.Navigator>
    )
}

function StackNavigators(props) {
    return (
        <NavigationContainer>
          {/* <StackNavigator /> */}
          <TabNavigator />
        </NavigationContainer>
    );
}

export default StackNavigators;