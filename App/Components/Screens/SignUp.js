import React, { Component } from 'react';
import { View,
        StyleSheet, 
        StatusBar,
        Text,
        TextInput,
        Image,
        Dimensions,
        SafeAreaView,
        ScrollView,
        TouchableOpacity
    } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button } from 'react-native-elements';
import MainTitle from '../Common/MainTitle';
import { useNavigation } from '@react-navigation/native';


  
export default function SignUp() {
    const navigation = useNavigation();
    function userRegiter() {
        
    }
    return (
        <SafeAreaView style = {styles.container}>
            <ScrollView showsVerticalScrollIndicator = {false} >
            <StatusBar backgroundColor='#2a368f' barStyle="dark-content"/>
            <MainTitle color={'#f9db04'} size = {24}>Create Account</MainTitle>
            <View style = {styles.FormContainer}>

            <TextInput placeholder='First Name' placeholderTextColor = '#f2f2f2'
            style = {styles.Input} autoComplete = 'off'
            autoCapitalize = 'words'
            />
            <TextInput placeholder='Last Name' placeholderTextColor = '#f2f2f2'
            style = {styles.Input}
            autoComplete = 'off' 
            autoCapitalize = 'words'
            />
            <TextInput placeholder='Email' placeholderTextColor = '#f2f2f2'
            style = {styles.Input}
            autoComplete = 'off'  
            />
            <TextInput placeholder='Phone Number' placeholderTextColor = '#f2f2f2'
            style = {styles.Input}
            autoComplete = 'off' 
            textContentType = 'telephoneNumber' 
            />
            <TextInput placeholder='Username' placeholderTextColor = '#f2f2f2'
            style = {styles.Input}
            autoComplete = 'off'  
            autoCapitalize = 'none'
            />
            <TextInput placeholder='Password' placeholderTextColor = '#f2f2f2'
            style = {styles.Input}
            autoComplete = 'off'
            secureTextEntry = 'true' 
            />
            
            <TouchableOpacity 
              onPress ={userRegiter()}
              style = {{alignItems:'flex-start'}}>
                <View style = {styles.LogButtonStyle}>
                    <Text style = {{color:'#2a368f', fontSize:18}}>Register</Text>
                </View>
            </TouchableOpacity>
            
            </View>
            </ScrollView>
        </SafeAreaView>

    )
}


const {height} = Dimensions.get("screen");



const styles = StyleSheet.create ({
    container: {
       marginTop: StatusBar.currentHeight,
       paddingHorizontal: 15,
       backgroundColor: '#2a368f',
       alignItems:'center',
       flex: 1,
    },
    FormContainer:{
        alignItems:'center',
        padding: 20,
        width: '97%',
    },
    InputStyle:{
        

    },
    LogButtonStyle :{
        backgroundColor: '#f9db04',
        color:'#2a368f',
        fontWeight:'bold',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical:5,
        height: 40,
        width: 269,
        marginHorizontal:5,
    },
    Input: {
        height: 40,
        width: '90%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#f9db04',
        borderColor: '#f2f2f2',
        fontSize: 18,
      },
})
