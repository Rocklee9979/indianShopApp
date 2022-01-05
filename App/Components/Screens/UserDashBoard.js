import React, {useState,useEffect} from 'react';
import Icon from "react-native-vector-icons/FontAwesome";

import { 
    View, 
    Text, 
    StyleSheet,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    LayoutAnimation,
    Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../Common/Header';

export default function UserDashBoard() {
    return (
        <SafeAreaView style = {{flex:1}}>
            <View style = {styles.container}>
                <Header/>
                <ScrollView>
                    <View style = {styles.TitleContainer}>
                        <Text 
                        style ={{color:'#f9db04', fontSize:18, fontWeight: 'bold'}}>
                            Hi, Neethu</Text>
                        <Text style ={{color:'white', fontSize:16, fontWeight: 'normal'}}>This is your Dashboard..</Text>
                    </View>
                    <TouchableOpacity style = {styles.UserTabTitleContainer}>
                    
                        <Text style = {styles.TabTitleText}>View your order history</Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.UserTabTitleContainer}>
                    
                        <Text style = {styles.TabTitleText}>Find Coupons</Text>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.UserTabTitleContainer}>
                    
                        <Text style = {styles.TabTitleText}>View / Edit Profile</Text>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.UserTabTitleContainer}>
                    
                        <Text style = {styles.TabTitleText}>View / Edit Address</Text>
                        
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#2a368f',
      flexDirection: 'column',
    },
    TitleContainer: {
        backgroundColor: '#2a368f',
        alignItems : 'center',
        width: '100%',
        height: 50,
        marginBottom: 15,
    },
    UserTabTitleContainer: {
        backgroundColor: '#f9db04',
        alignItems : 'center',
        width: '100%',
        height: 30,
        flexDirection: 'row',
        marginBottom: 15,
    },
    TabTitleText: {
        color:'#2a368f', 
        fontSize:18, 
        fontWeight: 'bold',
        marginLeft: 15,
    }
})
