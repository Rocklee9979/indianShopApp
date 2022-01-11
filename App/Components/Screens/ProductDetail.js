import React , { useEffect, useState } from 'react';
import { View, 
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet
 } from 'react-native';

 import DetailCard from '../Common/DetailCard';
 import Header from '../Common/Header';


import MessageWraper from '../Common/MessageWraper';
import WooCommerceAPI from '../../lib/APIHelper'

export default function ProductDetail({route}) {
    const { productId } = route.params;
    const [ productList, setProductList ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {

    (async () => {
        try {
            await Promise.all([
              WooCommerceAPI.get("products/"+productId)])
              .then((response) => { 
                 setProductList(response[0])
                 setIsLoading(false)
             })
           }
          catch(error){
              console.log(error.response);
          }

      })()
    }, [setProductList]);

    if(isLoading){
      return (
        <View>
          <Text> Loading Products . . . </Text>
        </View>
      );

    }

    return (
        <SafeAreaView style = {styles.container}>
            <Header/>
            <ScrollView showsVerticalScrollIndicator = {false}>
           
                    <DetailCard product = { productList } 
                              key = { productList.id }  
                              detailStyle = {styles.productDetailContainer}/>
                    
                  
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
    productDetailContainer:{
        height : 200,
    }
})
