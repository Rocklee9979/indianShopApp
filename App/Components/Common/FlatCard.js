import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Title from './Title';
import SubTitle from './SubTitle';

export default function FlatCard() {
    return (
        <>
        
        <View style = {styles.container}>
           <Image source = {require('../../assets/images/featured.jpg')} style = {styles.image}/>
           <View style = {styles.contentContainer}>
               <Title>Indian Spices</Title>
               <SubTitle>A little cayenne pepper certainly goes a long way – just a pinch can add heat to an entire pot of curry.</SubTitle>
           </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10,
        height: 80,
        marginTop:15,
    },
    image: {
        
        flex: 0.35,
        height:'100%',


    },
    contentContainer: {
        flex: 0.65,
        paddingHorizontal: 5,
    }
})
