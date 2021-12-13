import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import DashBoard from '../Screens/DashBoard';
import Welcome from '../Screens/Welcome';
import Menu from '../Screens/Menu';

//import BottomNavigator from './BottomNavigator';


const Stack = createNativeStackNavigator();
export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="DashBoard" component={DashBoard} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
    )
}
