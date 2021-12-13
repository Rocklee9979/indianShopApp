import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Title from './Title';
import SubTitle from './SubTitle';

export default function BlockCard({style,imageStyle,contentContainerStyle}) {
    return (
        
        <View style = {[styles.container, style]}>
           <Image source = {require('../../assets/images/featured.jpg')} style = {[styles.image, imageStyle]}/>
           <View style = {[styles.contentContainer,contentContainerStyle]}>
               <Title>Indian Spices</Title>
               <SubTitle>A little cayenne pepper certainly goes a long way – just a pinch can add heat to an entire pot of curry.</SubTitle>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        overflow: 'hidden',
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    image: {
        
        height: 200,
        position: 'absolute',
        top:20,
        right:20,
        left:20,
        bottom:20,
    },
    contentContainer: {
        paddingLeft: 10,
        paddingRight:10,
        marginVertical: 220,
    }
})
