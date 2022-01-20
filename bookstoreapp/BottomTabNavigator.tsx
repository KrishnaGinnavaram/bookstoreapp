import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import DashboardView from './DashboardView';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './LoginForm';
import AddBooksToBookStore from './AddBooksToBookStore';
import DashboardTwoColumnView from './DashboardTwoColumnView';
function BottomTabNavigator(props) {
   const Tab = createBottomTabNavigator();
   const Stack = createStackNavigator();

   const stackNavigator = () => {
   return (
    <Stack.Navigator initialRouteName="Single Column Layout">
        <Stack.Screen name="Single Column Layout" component={DashboardView}/>
        <Stack.Screen name="Two Column Layout" component={DashboardTwoColumnView}/>
    </Stack.Navigator>
   )
   }
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{activeTintColor: "blue",inactiveTintColor: "gray"}}>
            <Tab.Screen name="Login" component={LoginForm} options=
                {{tabBarIcon: ({color}) => (<Icon name="home" color={color} tvParallaxProperties={undefined} />)}}
                />
                <Tab.Screen name="Books" component={stackNavigator} options=
                {{tabBarIcon: ({color}) => (<Icon name="library-books" color={color} tvParallaxProperties={undefined} />)}}
                />
                 <Tab.Screen name="AddBooks" component={AddBooksToBookStore} options=
                {{tabBarIcon: ({color}) => (<Icon name="plus" type="evilicon" color={color} tvParallaxProperties={undefined} />)}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomTabNavigator;