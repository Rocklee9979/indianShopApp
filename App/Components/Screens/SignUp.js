import React, { Component,useState } from 'react';
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
import MainTitle from '../Common/MainTitle';
import MessageWraper from '../Common/MessageWraper';
import { useNavigation } from '@react-navigation/native';
import { useValidation } from 'react-native-form-validator';
import WooCommerceAPI from '../../lib/APIHelper';


export default function SignUp() {
    const navigation = useNavigation();

    const [FirstName, setTextInputFname] = useState('');
    const [LastName, setTextInputLname] = useState('');
    const [Phone, setTextInputPhone] = useState('');
    const [Email, setTextInputEmail] = useState('');
    const [Username, setTextInputUsername] = useState('');
    const [Password, setTextInputPassword] = useState('');

   
    const {validate, isFieldInError, getErrorsInField, getErrorMessages } = useValidation({
        state: { FirstName, LastName, Phone, Email, Username, Password}
      });
    const submitRegistrationForm = ()=> {

        const data = {
            email: Email,
            first_name: FirstName,
            last_name: LastName,
            username: Username,
            password: Password
            }
       
        validate({
            FirstName: { required: true },
            LastName: { required: true },
            Phone: { numbers: true, required: true },
            Email: { required: true, email: true },
            Username: { required: true, minlength: 5 },
            Password: { required: true, minlength: 5, maxlength: 8},
          })
          if(!getErrorMessages =="")
          { 
            WooCommerceAPI.post("customers", data)
            .then((response) => {
             console.log(response);
             navigation.push("Login");
            })
            .catch((error) => {
              console.log(error.response);
            });
          }
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
            onChangeText={(val)=> setTextInputFname(val)}
            value={FirstName}
            />
            {isFieldInError('FirstName') &&
            getErrorsInField('FirstName').map(errorMessage => (
                  <MessageWraper>{errorMessage}</MessageWraper>
             ))}
            <TextInput placeholder='Last Name' placeholderTextColor = '#f2f2f2'
            style = {styles.Input}
            autoComplete = 'off' 
            autoCapitalize = 'words'
            onChangeText={(val)=> setTextInputLname(val)}
            value={LastName}
            />
            {isFieldInError('LastName') &&
            getErrorsInField('LastName').map(errorMessage => (
                  <MessageWraper>{errorMessage}</MessageWraper>
             ))}
            <TextInput placeholder='Email' placeholderTextColor = '#f2f2f2'
            style = {styles.Input}
            autoComplete = 'off'
            onChangeText={(val)=> setTextInputEmail(val)}
            value={Email}
            />
            {isFieldInError('Email') &&
            getErrorsInField('Email').map(errorMessage => (
                  <MessageWraper>{errorMessage}</MessageWraper>
             ))}
            <TextInput placeholder='Phone Number' placeholderTextColor = '#f2f2f2'
            style = {styles.Input}
            autoComplete = 'off' 
            textContentType = 'telephoneNumber'
            onChangeText={(val)=> setTextInputPhone(val)}
            value={Phone} 
            />
             {isFieldInError('Phone') &&
            getErrorsInField('Phone').map(errorMessage => (
                  <MessageWraper>{errorMessage}</MessageWraper>
             ))}
            <TextInput placeholder='Username' placeholderTextColor = '#f2f2f2'
            style = {styles.Input}
            autoComplete = 'off'  
            autoCapitalize = 'none'
            onChangeText={(val)=> setTextInputUsername(val)} 
            value={Username}
            />
             {isFieldInError('Username') &&
            getErrorsInField('Username').map(errorMessage => (
                  <MessageWraper>{errorMessage}</MessageWraper>
             ))}
            <TextInput placeholder='Password' placeholderTextColor = '#f2f2f2'
            style = {styles.Input}
            autoComplete = 'off'
            secureTextEntry = 'true' 
            onChangeText={(val)=> setTextInputPassword(val)} 
            value={Password}
            />
             {isFieldInError('Password') &&
            getErrorsInField('Password').map(errorMessage => (
                  <MessageWraper>{errorMessage}</MessageWraper>
             ))}
            
            <TouchableOpacity 
              onPress ={submitRegistrationForm}
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
