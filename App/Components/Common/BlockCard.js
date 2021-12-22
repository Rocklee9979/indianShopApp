import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Title from '../Common/Title';
import SubTitle from '../Common/SubTitle';

export default function BlockCard({style,imageStyle,contentContainerStyle,defaultColor}) {
    return (
        
        <View style = {[styles.container, style]}>
            <View style = {[styles.contentContainer,contentContainerStyle]}>
               <Title defaultColor = '#2a368f'>Indian Spices</Title>
           </View>
           <Image source = {require('../../../assets/images/Special.jpg')} style = {[styles.image, imageStyle]}/>
           
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
        top:30,
        right:30,
        left:30,
        bottom:50,
    },
    contentContainer: {
        paddingLeft: 10,
        paddingRight:10,
        marginVertical: 220,
    }
})
