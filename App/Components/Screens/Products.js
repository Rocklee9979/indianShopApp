import React , { useEffect, useState } from 'react';
import { View,
    Text,
    StatusBar,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image
} from 'react-native';
import axios from 'axios'

import Header from '../Common/Header';
import SearchBar from '../Common/SearchBar';
import HomeCategory from '../Common/HomeCategory';
import SubTitle from '../Common/SubTitle';
import BlockCard from '../Common/BlockCard';
import Title from '../Common/Title';
import SmallCard from '../Common/SmallCard';
import FlatCard from '../Common/FlatCard';

import MessageWraper from '../Common/MessageWraper';
import WooCommerceAPI from '../../lib/APIHelper'

export default function Products() {
    const [productList, setProductList] = useState([]);

    const fetchProducts = async() =>{
           await WooCommerceAPI.get("products")
               .then((response) => {
                   setProductList(response)
               })
               .catch((error) => {
                   console.log(error.response);
               });
    }

    useEffect(() => {
        fetchProducts();
      }, []);


    return (
        <SafeAreaView style = {styles.container}>
            <ScrollView showsVerticalScrollIndicator = {false}>
                <Header/>
                <View style = {styles.searchBarContainer}>
                    <SearchBar/>
                </View>
                 <View>
                    { productList.map((product, index) => {
                        <Title>{ product.name}</Title>
                     })}
                 </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
       marginTop: StatusBar.currentHeight,
       paddingHorizontal: 15,
       backgroundColor: '#2a368f',
       flex: 1,
    },
    searchBarContainer:{
        padding: 15,
    },
    categoryContainer: {
        flexDirection: 'row',
        padding: 15,

    },
    specialOffer: {
        padding : 15,
    },
    recentContainer: {
        padding: 15,
    },
    offerBanner: {
        padding: 15,
    },
    bannerImage: {
        padding: 15,
    }

})
