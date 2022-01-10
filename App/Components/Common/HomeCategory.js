import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import  Icon  from 'react-native-vector-icons/Fontisto';

export default function HomeCategory({ category }) {


    return (
        <View style = {styles.container} >
        <View style = {styles.categoryContainer} >
        { category.image !== null ?
                <Image  source = {  { uri :category.image.src } } size={30} color="#000066"  style = {styles.catIconStyle}/>
                :
                <Icon name="test-bottle" size={30} color="#000066"  style = {styles.catIconStyle}/>

          }
        </View>
        <Text style = {styles.categotyName}> { category.name }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    categoryContainer:{
        width: '100%',
        height: 80,
        width: 80,
        overflow: 'hidden',
        backgroundColor: '#ffff',
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
