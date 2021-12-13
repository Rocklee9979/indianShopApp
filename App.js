import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './App/Components/Navigation/AppNavigator';
//import BottomNavigator from './App/Components/Navigation/BottomNavigator';


export default function App() { 
  return (
   <NavigationContainer>
    
    <AppNavigator/>
   </NavigationContainer>
   
  );
}

