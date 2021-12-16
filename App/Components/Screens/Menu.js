import React, {useState,useEffect} from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";
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

//Menu Content
const CONTENT = [
    {
        isExpanded: false,
        main_title: 'Account',
        sub_title: [
            {id: 1, sub_name: 'DashBoard'},
            {id: 2, sub_name: 'Edit Profile'},
            {id: 3, sub_name: 'List'},
            {id: 4, sub_name: 'Wish List'},
            {id: 5, sub_name: 'Change Password'}
        ]
    },
    {
        isExpanded: false,
        main_title: 'Products',
        sub_title: [
            {id: 6, sub_name: 'Vegetables'},
            {id: 7, sub_name: 'Spices'},
            {id: 8, sub_name: 'Rices'},
            {id: 9, sub_name: 'Fruits'},
        ]
    },
    {
        isExpanded: false,
        main_title: 'Products',
        sub_title: [
            {id: 6, sub_name: 'Vegetables'},
            {id: 7, sub_name: 'Spices'},
            {id: 8, sub_name: 'Rices'},
            {id: 9, sub_name: 'Fruits'},
        ]
    },
    {
        isExpanded: false,
        main_title: 'Subscription',
        sub_title: [
            
        ]
    },
    {
        isExpanded: false,
        main_title: 'Settings',
        sub_title: [
            
        ]
    },
    {
        isExpanded: false,
        main_title: 'Sign Out',
        sub_title: [
            
        ]
    },
];


export default function Menu() {
    
    const [isExpanded,setisExpanded] = useState(false);
    console.log(isExpanded);
    const navigation = useNavigation();
  
    return (
    <SafeAreaView style = {{flex:1}}>
        <View style = {styles.container}>
        <ScrollView>

        <View>
            <View>
                <TouchableOpacity style = {styles.MenuItem} 
                     onPress = {()=>setisExpanded(!isExpanded)}>
                         <Icon name = "account-circle" size={30}  color = {'#2a368f'} 
                          style = {styles.menuLeftIcon}/>
                    <Text style = {styles.MenuItemText}>Account</Text>
                    
                    <Icon name={isExpanded ? 
                        'keyboard-arrow-up' : 'keyboard-arrow-down'} 
                        size={30} style = {styles.MenuIcon} color = {'#2a368f'}/>
                </TouchableOpacity>
                <View style = {{
                    height: (!isExpanded)? 0: '77%',
                    display: (!isExpanded)? 'none': 'block',
                    
                    }}>
                   
                        <TouchableOpacity style = {styles.Content}>
                            <Text style = {styles.subText}> DashBoard</Text>
                            <View style = {styles.seperator}/>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.Content} 
                                          onPress ={()=>navigation.navigate("List")}>
                            <Text style = {styles.subText}> List</Text>
                            <View style = {styles.seperator}/>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.Content}>
                            <Text style = {styles.subText}> Edit Profile</Text>
                            <View style = {styles.seperator}/>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.Content}>
                            <Text style = {styles.subText}> Change Password</Text>
                            <View style = {styles.seperator}/>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.Content}>
                            <Text style = {styles.subText}> Sign Out</Text>
                            <View style = {styles.seperator}/>
                        </TouchableOpacity>

                
            </View>
            </View>

            <TouchableOpacity style = {styles.MenuItem}>
                <Icon name = "shopping-basket" size={30}  color = {'#2a368f'} />
                <Text style = {styles.MenuItemText}> Products</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.MenuItem}>
                <Icon name = "subscriptions" size={30}  color = {'#2a368f'} />
                <Text style = {styles.MenuItemText}> Subscription</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style = {styles.MenuItem} onPress ={()=>navigation.navigate("Settings")}>
                <Icon name = "settings" size={30}  color = {'#2a368f'} />
                <Text style = {styles.MenuItemText}> Settings</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </View>
    </SafeAreaView>
)


}

const {width} = Dimensions.get("screen");
const styles = StyleSheet.create ({
container: {
   marginTop: StatusBar.currentHeight,
   paddingHorizontal: 15,
   backgroundColor: '#f9db04',
   flex: 1,
},
header:{
    flexDirection: 'row',
    padding: 10,

},
titleText:{
    
    fontSize: 22,
    fontWeight:'bold',
},
headerButton:{
    textAlign: 'center',
    justifyContent:'center',
    fontSize: 18,

},
MenuItem:
{
    backgroundColor: '#f9db04',
    padding: 20,
    borderBottomColor: '#2a368f',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    flexDirection:'row',
    flex:1,
},
MenuItemText:{
    fontSize: 18,
    fontWeight: "300",
    color: '#2a368f',
    flex:0.7,
},
Content:{
    paddingLeft:20,
    paddingRight: 10,
},
subText:{
    fontSize:16,
    padding:10,
    color: '#2a368f',
    fontWeight: "300",
},
seperator:{
    height: 0.5,
    width:'100%',
},
MenuIcon:{
    marginLeft: width*0.5,
    flex: 0.15,
},
menuLeftIcon:{
flex: 0.15,
paddingRight: 5,
}


})
