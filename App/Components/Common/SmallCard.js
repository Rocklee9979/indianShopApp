import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import BlockCard from './BlockCard';

const {width} = Dimensions.get('window');

export default function SmallCard({ product }) {
    return (
         
            <BlockCard product = { product } 
            style = {styles.container} 
            imageStyle = {styles.image} 
            contentContainerStyle = {styles.contentContainer}
            />
        
    )
}

const styles = StyleSheet.create({

    scrollContainer:{
        flexDirection: 'row',
        
    },
    container: {
        width: width/3,
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
    },

})
