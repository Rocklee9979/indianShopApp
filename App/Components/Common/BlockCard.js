import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import RenderHTML from "react-native-render-html";

import Title from '../Common/Title';
import SubTitle from '../Common/SubTitle';
import Icon from "react-native-vector-icons/FontAwesome";


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
               <Title 
               defaultPadding = {10}
               defaultColor = '#2a368f'
               numberOfLines = {2} size={14}
               > { product.name }</Title>
               <Text style = {styles.priceText}>$ {product.price}</Text>
               <View style = {styles.iconContainer}>
                     <Icon name='shopping-cart'  size={24} color='#2a368f' style = {{flex: 0.33, marginTop:15}}/>
                     <Icon name='heart'  size={24} color='#2a368f' style = {{flex: 0.33, marginTop:15}}/>
                     <Icon name='eye'  size={24} color='#2a368f' style = {{flex: 0.33, marginTop:15}}/>

                     </View>

           </View>
           <Image  source = { image_url } style = {[styles.image, imageStyle]}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 330,
        overflow: 'hidden',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 15,
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
    },
    priceText:{
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#2a368f',
        fontStyle: 'italic',
    },
    iconContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        marginLeft: 15,
    },

})
