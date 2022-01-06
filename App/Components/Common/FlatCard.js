import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import RenderHTML from "react-native-render-html";
import Icon from "react-native-vector-icons/FontAwesome";


import Title from './Title';
import SubTitle from './SubTitle';

export default function FlatCard({ product }) {

    const [productItem, setProductItem] = useState(product); //for future works

    const source = {
        html: `<p style='text-align:center; margin-top: 10px; overflow: hidden'>`
              + product.description +
              `</p>`
    };
    // For eliminating HTML tags from Json data (product desc)
    const regex = /(<([^>]+)>)/ig;
    const resultDesc = product.description.replace(regex, '');

    const image_url = { uri :
                        ( product.images.length  == 0 )
                        ? "https://pharsathapa.com/wp-content/uploads/woocommerce-placeholder.png"
                        : product.images[0].src
                      }

    const loadDetail = (id) => {
        console.log(id);
    }

    return (
       <>
            <View style = {styles.container} key = { product.id } onPress = { () => { thisloadDetail( product.id ) } }  >
                 <Image source = { image_url } style = {styles.image}/>
                 <View style = {styles.contentContainer}>
                     <Title defaultPadding = '0' defaultColor = '#2a368f'> { product.name }</Title>
                     <Text style = {styles.brandText}>Brand Name</Text>
                     <SubTitle>
                     { resultDesc }
                     </SubTitle>
                     <Text style = {styles.priceText}>$ {product.price}</Text>
                     <View style = {styles.iconContainer}>
                     <Icon name='shopping-cart'  size={24} color='#2a368f' style = {{flex: 0.33, marginTop:15}}/>
                     <Icon name='heart'  size={24} color='#2a368f' style = {{flex: 0.33, marginTop:15}}/>
                     <Icon name='eye'  size={24} color='#2a368f' style = {{flex: 0.33, marginTop:15}}/>

                     </View>
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
        marginBottom: 15,
        height: 150,
        marginTop:15,
        marginLeft: 15,
       marginRight:15,
    },
    image: {

        flex: 0.35,
        height:'80%',
        marginLeft: 15,

    },
    contentContainer: {
        flex: 0.65,
        paddingHorizontal: 5,
    },
    iconContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    brandText: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 14,
        color: '#f9db04',
        fontStyle: 'italic',
    },
    priceText:{
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#2a368f',
        fontStyle: 'italic',
    }
})
