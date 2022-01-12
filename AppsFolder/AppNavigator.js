import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Loginscreen from './Loginscreen';
import FlatLists from './FlatLists';
import AuthNavigator from './AuthNavigator';
import Pressables from './Pressables';
const Tab = createBottomTabNavigator();
function AppNavigator(props) {
    return (
        <NavigationContainer>
            <Tab.Navigator  tabBarOptions={{activeBackgroundColor: "orange",
            activeTintColor: "white", inactiveBackgroundColor: "darkgray",
        inactiveTintColor: "yellow"}}>
                                {/* <Tab.Screen name="ok" component={AuthNavigator} /> it's like nesting one navigation container inside another*/ }
                <Tab.Screen name="Login" component={Loginscreen} />
                <Tab.Screen name="FlatLists" component={FlatLists} />
                <Tab.Screen name="Pressables" component={Pressables} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;