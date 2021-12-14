import React from 'react'
import { View, 
    Text, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


export default function Header() {
    const navigation = useNavigation();
    return (
        <View style = {Styles.container}>
            <View style = {Styles.contentwrap}>
             <Icon 
             name="navicon" 
             size={30} 
             color="#ffff"  
             style = {Styles.iconstyle}
             onPress ={()=>navigation.navigate("Menu")}
             />
             <Text style = {Styles.headerText}>INDIANSHOP</Text>
             <TouchableOpacity onPress ={()=>navigation.navigate("Cart")} style = {Styles.cartWrap}>
             <View style = {Styles.iconwrap}>
                 
                <Icon name="shopping-cart" size={27} color="#2a368f"  
                style = {Styles.iconstyle}
                
                />
             </View>
             <View style = {Styles.cartCount}>
                <Text style = {Styles.cartCoutText}>15</Text>
             </View>
             </TouchableOpacity>
             
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        
        backgroundColor:'#2a368f',
        width: '100%',
        marginBottom: 15,
        zIndex:1,
        paddingHorizontal: 15,
        marginTop:20,

    },
    headerText: {
        color: '#f9db04',
        fontSize: 28,
        fontWeight: 'bold',
        alignItems: 'center',
        flex: 0.68,

    },
    contentwrap:{
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: 10,
        marginTop:18,
    },
    iconstyle:{
        flex: 0.25,
        marginTop: 5,

    },
    iconwrap:{
        flex: 0.13,
        backgroundColor: '#ffff',
        height: 34,
        width: 34,
        borderRadius: 33/2,
        alignItems: 'center',
    },
    cartCount:{
        position: 'absolute',
        backgroundColor: 'red',
        width: 22,
        height: 22,
        borderRadius: 21 / 2,
        right: 0,
        top: -1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:999,
    },
    cartCoutText:{
        color:'#ffff',
    },
    cartWrap: {
        marginLeft:20,
    }
})
