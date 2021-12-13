import React, {useEffect, useState} from 'react';

import { 
    View,
    StyleSheet, 
    StatusBar,
    Text,
    Image,
    Dimensions 
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Input,Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
const baseUrl = 'http://localhost:3000/tb_users_login';

export default function Login() {
    const navigation = useNavigation();

    const [userName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [iconColor, setIconColor] = useState("#2a368f");
    const [valIcon, setValIcon] = useState("");
    const [iconColorPass, setIconColorPass] = useState("#2a368f");
    const [valIconPass, setValIconPass] = useState("");

   
    

    function SubmitLoginForm(){
        if(userName=="" || Password =="")
        {
            alert("erroorrr");
        }
        else{
        const userObject = {
            user_name: userName,
            user_pass: Password
        };

        axios.post(baseUrl, userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
            setUserName('');
            setPassword('');
        }
        
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
           setIconColor('#1ff11f');
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
            setIconColorPass('#1ff11f');
            setValIconPass('checkcircleo');
 
        }
    }
    return (
        <View style = {styles.container}>
            <StatusBar backgroundColor='#2a368f' barStyle="dark-content"/>
            <View style = {styles.firstcontainer}>
                <View style = {styles.innercontainer}>
                <Image source = {require('../../../assets/images/shopping.png')} style = {styles.logostyle} />              
                  <Text style = {styles.logoText}>INDIAN SHOP</Text>
                  <Text style = {styles.logoSubText}>Account Login</Text>
                </View>
            </View>
            <View style = {styles.secondcontainer}>
            <Input placeholder='Email'
                placeholderTextColor = '#f9db04'
                keyboardType = 'email-address'
                color = '#f9db04'
                onChangeText={
                   email => handleChangeEmail(email)
                   }
               // onBlur = {handleBlur('email')}
               // value = {values.email}
                leftIcon={
                <Icon name='user' size={24} color='#f9db04'/>}
                rightIcon={
                    <AntDesign  name= {valIcon} size={18} color={iconColor}/>}
            />

            <Input placeholder="Password" 
                secureTextEntry={true} 
                placeholderTextColor = '#f9db04'
                keyboardType = 'email-address'
                onChangeText={text => setPassword(text),
                    password => handleChangePassword(password)}
                //onBlur = {handleBlur('email')}
                //value = {values.email}
                leftIcon={
                <Icon name='lock'  size={24} color='#f9db04' />} 
                rightIcon={
                    <AntDesign  name= {valIconPass} size={18} color={iconColorPass}/>}
            />
            
            <Button 
                title="Login"   
                type="clear"
                onPress = {()=>SubmitLoginForm()} 
                style = {styles.LogButtonStyle} />
            <Button 
                title="SignUp Now"   
                type="clear" 
                style = {styles.RegButtonStyle} 
                onPress ={()=>navigation.navigate("SignUp")}
                />
            </View>
            <View style = {styles.ThirdContainer}>
                <Text style = {styles.TextLink} onPress ={()=>navigation.navigate("DashBoard")}>Guest User</Text>
                <Text style = {styles.TextLink} onPress ={()=>navigation.navigate("ForgotPassword")}>Forgot Password</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
       marginTop: StatusBar.currentHeight,
       paddingHorizontal: 15,
       backgroundColor: '#2a368f',
       alignItems:'center',
       flex: 1,
    },
    firstcontainer:{
        flex:0.4,
        alignItems:'center',
        padding: 20,
    },
    secondcontainer:{
        flex:0.4,
        alignItems:'center',
    },
    ThirdContainer:{
        flex:0.2,
        alignItems:'center',
        marginTop:20,
    },
    TextLink:{
        marginTop: 20,
            fontSize: 18,
            color: '#ffff',
            borderBottomColor:'#f9db04',
            borderBottomStartRadius:1,
    },
    logostyle:{
        width: 150,
        height:150,
        position: 'relative',
        zIndex: 999,
    },
    innercontainer:{
        flexDirection:'column',
        
    },
    logoText:{
        color: '#f9db04',
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
        color:'#2a368f',
        fontWeight:'bold',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical:5,
        height: 50,
        width:300,
        marginHorizontal:5,
    },
    RegButtonStyle:{
        backgroundColor: '#f9db04',
        color:'#2a368f',
        fontWeight:'bold',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical:5,
        height: 50,
        width:300,
        marginHorizontal:5,

    }
})