import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import RenderHTML from "react-native-render-html";

import Title from '../Common/Title';
import SubTitle from '../Common/SubTitle';

export default function BlockCard({ product, style, imageStyle, contentContainerStyle, defaultColor }) {

  const source = {
      html: `<p style='text-align:center;'>`
            + product.description +
            `</p>`
  };

  const image_url = { uri :
                      ( product.images.length  == 0 )
                      ? "https://pharsathapa.com/wp-content/uploads/woocommerce-placeholder.png"
                      : product.images[0].src
  }


    return (

        <View style = {[styles.container, style]}>
            <View style = {[styles.contentContainer, contentContainerStyle]}>
               <Title defaultColor = '#2a368f'> { product.name }</Title>
           </View>
           <Image  source = { image_url } style = {[styles.image, imageStyle]}/>

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
