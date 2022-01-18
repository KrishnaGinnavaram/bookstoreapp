import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import StackNavigators from './StackNavigators';
import Loginscreen from './Loginscreen';
import FlatLists from './FlatLists';
import myTheme from './NavigationTheme';
import Switches from './Switches';
import Pressables from './Pressables';
import LoginForm from '../project/LoginForm';
const Stack = createStackNavigator();

function AuthNavigator(props) {
    return (
        <NavigationContainer theme={myTheme}>
        <Stack.Navigator>
            <Stack.Screen name="Login Page" component={LoginForm}
             options={{title : "Login Page",headerStyle:{backgroundColor: "black"},headerTintColor:"white"}}
             />
            <Stack.Screen name="Pressables" component={Pressables} />
            <Stack.Screen name="FlatLists" component={FlatLists} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthNavigator;