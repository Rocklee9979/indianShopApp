import React, { useEffect, useState } from 'react';
import { View, 
    StyleSheet, 
    Image, 
    Text, 
    TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

import Title from './Title';
import SubTitle from './SubTitle';
import Review from './Review';

export default function DetailCard({ product,detailStyle }) {

    const navigation = useNavigation();
    const [productItem, setProductItem] = useState(product); //for future works

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
                     
                     <Text style = {styles.priceText}>$ {product.price}</Text>
                     <View style = {styles.iconContainer}>
                     <TouchableOpacity style = {{alignItems:'flex-start'}}>
                        <View style = {styles.cartButtonStyle}>
                            <Text style= {styles.cartLabelStyle}
                            style = {{color:'#f9db04'}}>Add to cart</Text>
                        </View>
                     </TouchableOpacity>  
                     <Icon name='eye'  
                      size={24} color='#2a368f'
                      style = {{flex: 0.33, marginTop:15}}
                      />

                     </View>
                 </View>

              </View>
              <View style = {styles.detailContentContainer}>
                <Title defaultPadding = '10' defaultColor = '#2a368f'> 
                Product Description</Title>
                <SubTitle numberOfLines={10}> { resultDesc }</SubTitle>
                <View style = {styles.reviewContainer}>
                    <Title defaultPadding = '20' defaultColor = '#2a368f'> 
                    Product Review</Title>

                    <Review />
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
        height: 160,
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
    },
    detailContentContainer:{
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 15,
        height: '100%',
        marginTop:-14,
        marginLeft: 15,
        marginRight:15,

    },
    cartButtonStyle:{
        backgroundColor: '#2a368f',
        color:'#000',
        fontWeight:'bold',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical:5,
        height: 40,
        width:115,
        marginHorizontal:8,

    }

})
