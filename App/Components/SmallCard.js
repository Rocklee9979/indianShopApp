import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import BlockCard from './BlockCard';

const {width} = Dimensions.get('window');

export default function SmallCard({item}) {
    return (
        <BlockCard item = {item} style = {styles.container} imageStyle = {styles.image} contentContainerStyle = {styles.contentContainer}/>
    )
}

const styles = StyleSheet.create({

    container: {
        width: width/2,
        marginRight: 15,
        height: 200,
    },
    image: {
        
        height: 100,
        position: 'absolute',
        top:20,
        right:20,
        left:20,
        bottom:20,
    },
    contentContainer: {
        paddingLeft: 10,
        paddingRight:10,
        marginVertical: 120,
    }

})
