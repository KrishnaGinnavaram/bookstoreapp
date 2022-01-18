import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import DashboardView from './DashboardView';
import LoginForm from './LoginForm';
import AddBooksToBookStore from './AddBooksToBookStore';
function BottomTabNavigator(props) {
   const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{activeTintColor: "blue",inactiveTintColor: "gray"}}>
            <Tab.Screen name="Login" component={LoginForm} options=
                {{tabBarIcon: ({color}) => (<Icon name="home" color={color} tvParallaxProperties={undefined} />)}}
                />
                <Tab.Screen name="Books" component={DashboardView} options=
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