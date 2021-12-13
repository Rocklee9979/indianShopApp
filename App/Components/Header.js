import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Header() {
    return (
        <View style = {Styles.container}>
            <View style = {Styles.contentwrap}>
             <Icon name="navicon" size={30} color="#ffff"  style = {Styles.iconstyle}/>
             <Text style = {Styles.headerText}>INDIANSHOP</Text>
             <View style = {Styles.iconwrap}>
                 
                <Icon name="shopping-cart" size={27} color="#000066"  style = {Styles.iconstyle}/>
             </View>
             <View style = {Styles.cartCount}>
                <Text style = {Styles.cartCoutText}>15</Text>
             </View>
             
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        
        backgroundColor:'#000066',
        width: '100%',
        marginBottom: 15,
        zIndex:1,
        paddingHorizontal: 15,
        marginTop:20,

    },
    headerText: {
        color: '#ffff00',
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
    }
})
