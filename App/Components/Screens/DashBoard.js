import React, { useEffect, useState } from 'react';
import { View,
    Text,
    StatusBar,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    FlatList
} from 'react-native';
import Header from '../Common/Header';
import SearchBar from '../Common/SearchBar';
import HomeCategory from '../Common/HomeCategory';
import SubTitle from '../Common/SubTitle';
import BlockCard from '../Common/BlockCard';
import Title from '../Common/Title';
import SmallCard from '../Common/SmallCard';

import WooCommerceAPI from '../../lib/APIHelper'


export default function DashBoard() {

  const [ categoryList, setCategoryList ] = useState(null);
  const [ featuredProductList, setFeaturedProductList ] = useState(null);
  const [ recentProducts, setRecentProducts ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
      (async () => {
        try {
          await Promise.all([
            WooCommerceAPI.get("products/categories", { 'parent' : "0",  "exclude" : "20" }), //json data as 2nd param for get quey strings ; Uncategorised ID excluded
            WooCommerceAPI.get("products", {"featured" : "true" }),
            WooCommerceAPI.get("products", {"order" : "desc", "orderby" :'date', "page" : 1, "per_page" : 2 })

          ])
          .then(([categories, featured, recent ]) => {
             setCategoryList(categories)
             setFeaturedProductList(featured)
             setRecentProducts(recent)
             setIsLoading(false)
         })
        }
        catch(error){
            console.log(error.response);
        }

      })()
    }, [setCategoryList, setFeaturedProductList, setRecentProducts ]);


  if(isLoading){
    return (
      <View>
        <Text> Loading Dashboard . . . </Text>
      </View>
    );

  }

  return (
      <SafeAreaView style = {styles.container}>
          
              <Header/>
              <View style = {styles.searchBarContainer}>
                  <SearchBar/>
              </View>
          <ScrollView showsVerticalScrollIndicator = {false}>

              <View style = {styles.categoryContainer}
                    horizondal showsHorizontalScrollIndicator = {false} >

                    { categoryList.map(function(category){
                        console.log(category)
                        return (
                          <HomeCategory category = { category } key = { category.id }/>
                        )
                    })}
              </View>
              <View style = {styles.specialOffer}>
                  <Title >SPECIAL OFFERS</Title>
                  { featuredProductList.map(function(product){
                      return (
                       
                        <BlockCard product = { product} />
                        
                      )
                    })
                    
                    }


              </View>
              <View style = {styles.offerBanner}>
                  <Image
                  source = {require('../../../assets/images/banner-03.jpg')}
                  style = { styles.bannerImage}/>
              </View>



              <View style = {styles.recentContainer}>
                  <Title >RECENT</Title>
                <ScrollView style = {{flexDirection: 'row'}} horizontal 
                showsHorizontalScrollIndicator = {false}>
                  { recentProducts.map(function(product){
                      return (
                       
                        <SmallCard  product ={ product } key = {product.id}/>
                      )
                  })}
                </ScrollView>
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
