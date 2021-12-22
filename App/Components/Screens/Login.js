import React, {useEffect, useState} from 'react';
import {
    View,
    StyleSheet,
    StatusBar,
    Text,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { useValidation } from 'react-native-form-validator';

import WooCommerceAPI from '../../lib/APIHelper'

export default function Login() {
    const navigation = useNavigation();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
        useValidation({
          state: { userName, password },
        });

    const SubmitLoginForm = () => {
    validate({
      userName: { email: true, required:true },
      password: {},
    });

    }

    function handleChangeEmail(e)
    {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(e) === false) {
            setIconColor('red');
            setValIcon('closecircleo');
        }
        else {
           setUserName(e);
           //console.log(userName);
           setIconColor('#1FF11F');
           setValIcon('checkcircleo');
        }
    }
    function handleChangePassword(password_val)
    {
        if(password_val.length == 0){
            setIconColorPass('red');
            setValIconPass('closecircleo');
        }
        else{
            setIconColorPass('#1FF11F');
            setValIconPass('checkcircleo');
        }
    }

    return (
        <View style = {styles.container}>
            <StatusBar backgroundColor='#2A368F' barStyle="dark-content"/>
            <View style = {styles.firstcontainer}>
                <View style = {styles.innercontainer}>
                <Image source = {require('../../../assets/images/shopping.png')} style = {styles.logostyle} />
                  <Text style = {styles.logoText}>INDIAN SHOP</Text>
                  <Text style = {styles.logoSubText}>Account Login</Text>
                </View>
            </View>
           <View style = {styles.secondcontainer}>
                <View style = {styles.loginContainer}>
                    <Icon name='user'  size={24} color='#F9DB04'
                    style = {{flex: 0.1, marginTop:15}}/>
                    <TextInput placeholder='Email'
                    placeholderTextColor = '#F9DB04'
                    style = {styles.Input} autoComplete = 'off'
                    onChangeText={setUserName} value={userName}
                    key = 'userName'
                    />
                    {isFieldInError('userName') &&
                            getErrorsInField('userName').map((errorMessage, index) => (
                    <Text key = {'userNameError'+ index }>{errorMessage}</Text>
                    ))}
                </View>
                <View style = {styles.loginContainer}>
                    <Icon name='lock'  size={24} color='#F9DB04'
                    style = {{flex: 0.1, marginTop:15}}/>
                    <TextInput placeholder='Password'
                    placeholderTextColor = '#F9DB04'
                    secureTextEntry={true}
                    onChangeText={setPassword} value={password}
                    style = {styles.Input}  autoComplete = 'off'
                    key = 'password'
                    />
                    {isFieldInError('passsword') &&
                            getErrorsInField('password').map((errorMessage, index) => (
                              <Text key = {'passwordError'+ index }>{errorMessage}</Text>
                    ))}
                </View>

           
            <TouchableOpacity
              style = {{alignItems:'flex-start'}}
              onPress={SubmitLoginForm}>
                <View style = {styles.LogButtonStyle}>
                    <Text style= {styles.ButtonLabel}
                    style = {{color:'#2A368F'}}>Login</Text>
                </View>
            </TouchableOpacity>
           


            <TouchableOpacity
              onPress ={()=>navigation.navigate("SignUp")}
              style = {{alignItems:'flex-start'}}>
                <View style = {styles.RegButtonStyle}>
                    <Text style = {{color:'#2A368F'}}>SignUp</Text>
                </View>
            </TouchableOpacity>
            </View>
            <View style = {styles.ThirdContainer}>
                    <Text
                    style = {styles.TextLink}
                    onPress ={()=>navigation.navigate("DashBoard")}>
                        Guest User
                    </Text>
                    <Text
                    style = {styles.TextLink}
                    onPress ={()=>navigation.navigate("ForgotPassword")}>
                        Forgot Password
                    </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create ({
    container: {
       marginTop: StatusBar.currentHeight,
       paddingHorizontal: 15,
       backgroundColor: '#2A368F',
       alignItems:'center',
       flex: 1,
    },
    firstcontainer:{
        flex:0.4,
        alignItems:'center',
        padding: 20,
    },
    secondcontainer:{
        flex:0.6,
        alignItems:'center',
        width:'100%',
        padding:20,
    },
    ThirdContainer:{
        flex:0.2,
        alignItems:'center',
    },
    loginContainer:{
        flex: 1,
        flexDirection: 'row',
        height: 50
    },
    TextLink:{
            marginTop: 5,
            fontSize: 16,
            color: '#ffff',
            borderBottomColor:'#F9DB04',
            borderBottomStartRadius:1,
    },
    logostyle:{
        width: 100,
        height:100,
        position: 'relative',
        zIndex: 999,
    },
    innercontainer:{
        flexDirection:'column',
        alignItems: 'center',
    },
    logoText:{
        color: '#F9DB04',
        fontSize: 28,
        fontWeight: 'bold',
        alignItems: 'center',
        paddingTop:10,
    },
    logoSubText: {
        color: '#ffff',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        marginLeft:20
    },
    LogButtonStyle :{
        backgroundColor: '#ffff',
        color:'#000',
        fontWeight:'bold',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical:5,
        height: 50,
        width:300,
        marginHorizontal:8,
    },

    ButtonLabel:{
        color:'#fff',
        fontSize: 14,
        padding:50
    },

    RegButtonStyle:{
        backgroundColor: '#F9DB04',
        color:'#2A368F',
        fontWeight:'bold',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical:5,
        height: 50,
        width:300,
        marginHorizontal:8,
    },
    Input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#F9DB04',
        fontSize: 18,
        borderColor: '#ffff',
        flex:0.9
      },

})