import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import DashBoard from '../Screens/DashBoard';
import Products from '../Screens/Products';
import Welcome from '../Screens/Welcome';
import Menu from '../Screens/Menu';
import Cart from '../Screens/Cart';
import List from '../Screens/List';
import Checkout from '../Screens/Checkout';
import Settings from '../Screens/Settings';
import ProductDetail from '../Screens/ProductDetail';

import UserDashBoard from '../Screens/UserDashBoard'

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
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="UserDashBoard" component={UserDashBoard} />
            <Stack.Screen name='ProductDetail' component ={ProductDetail} 
            initialParams={{productId: 0}}/>
        </Stack.Navigator>
    )
}
