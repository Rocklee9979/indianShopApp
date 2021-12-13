import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Login from '../Screens/Login';

const Tab = createBottomTabNavigator();


export default function BottomNavigator() {
    return (
        
        <Tab.Navigator>
            
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Login" component={Login} />

        </Tab.Navigator>
        
    )
}
