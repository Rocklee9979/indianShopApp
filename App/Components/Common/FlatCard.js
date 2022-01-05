import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import RenderHTML from "react-native-render-html";

import Title from './Title';
import SubTitle from './SubTitle';

export default function FlatCard({ product }) {

    const [productItem, setProductItem] = useState(product); //for future works 

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

    const loadDetail = (id) => {
        console.log(id);
    }

    return (
       <>
            <View style = {styles.container} key = { product.id } onPress = { () => { thisloadDetail( product.id ) } }  >
                 <Image source = { image_url } style = {styles.image}/>
                 <View style = {styles.contentContainer}>
                     <Title> { product.name }</Title>
                     <SubTitle>
                     <RenderHTML source = { source } />

                     </SubTitle>
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
        height: 80,
        marginTop:15,
        marginLeft: 15,
        marginRight:15,

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
