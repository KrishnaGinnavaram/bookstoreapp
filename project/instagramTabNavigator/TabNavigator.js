import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InstagramMainScreen from '../InstagramMainScreen';
import Search from './SearchTab';
import Profile from './ProfileTab';
import Likes from './LikesTab';
import Media from './AddMediaTab';
import { StyleSheet } from 'react-native';

function TabNavigator(props) {

    const Tab = createBottomTabNavigator();
    return (
             <NavigationContainer style={styles.container}>
               <Tab.Navigator
               tabBarOptions={{
                              activeTintColor: "blue",
                              inactiveTintColor: "gray"}}
                swipeEnabled={true}
               >
                   <Tab.Screen name="Home" component={InstagramMainScreen} options={{
                    tabBarLabel: 'Homes',
                    tabBarIcon: ({color}) => (
                                <Icon name="home" color={color} />
                               )
                   }}/>
                   <Tab.Screen name="Search" component={Search}  options={{
                       tabBarIcon: ({color}) => (
                        <Icon name="search" color={color} />
                       )
                   }}/>
                   <Tab.Screen name="Media" component={Media} options={{
                       tabBarIcon: ({color}) => (
                        <Icon name="plus" type="evilicon" color={color} />
                       )
                   }}/>
                   <Tab.Screen name="Likes" component={Likes} options={{
                       tabBarIcon: ({color}) => (
                        <Icon name="heart" type="font-awesome" color={color} />
                       )
                   }}/>
                   <Tab.Screen name="Profile" component={Profile} options={{
                       tabBarIcon: ({color}) => (
                        <Icon name="person" color={color} />
                       )
                   }}/>
               </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: "100%",
        // height: "100%"
    }
})
export default TabNavigator;