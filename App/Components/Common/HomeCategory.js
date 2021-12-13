import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import  Icon  from 'react-native-vector-icons/Fontisto';

export default function HomeCategory() {
    return (
        <View style = {styles.container}>
        <View style = {styles.categoryContainer}>
             <Icon name="test-bottle" size={30} color="#000066"  style = {styles.catIconStyle}/>
            
            
        </View>
        <Text style = {styles.categotyName}>Spices</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    categoryContainer:{
        width: '100%',
        height: 80,
        width: 80,
        overflow: 'hidden',
        backgroundColor: '#ffff00',
        borderRadius: 79/2,
        alignItems: 'center',
        padding:20,
        marginTop: 15,
    },
    
    catIconStyle:{
        width: 50,
        height:50,
        marginLeft:29,
    },
    categotyName:{
        color: '#fff'
    },
    container:
    {
        alignItems: 'center',
    }
})
