import React from 'react';
import { View, 
    Text,
    StatusBar,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image
} from 'react-native';
import Header from '../Common/Header';
import SearchBar from '../Common/SearchBar';
import HomeCategory from '../Common/HomeCategory';
import SubTitle from '../Common/SubTitle';
import BlockCard from '../Common/BlockCard';
import Title from '../Common/Title';
import SmallCard from '../Common/SmallCard';


export default function DashBoard() {
    return (
        <SafeAreaView style = {styles.container}>
            <ScrollView showsVerticalScrollIndicator = {false}>
                <Header/>
                <View style = {styles.searchBarContainer}>
                    <SearchBar/>
                </View>
                
                <View style = {styles.categoryContainer}
                      horizondal showsHorizontalScrollIndicator = {false} >
                   <HomeCategory/>
                </View>
                <View style = {styles.specialOffer}>
                    <Title >SPECIAL OFFERS</Title>
                    <BlockCard/>
                </View>
                <View style = {styles.offerBanner}>
                    <Image 
                    source = {require('../../../assets/images/banner-03.jpg')} 
                    style = { styles.bannerImage}/>
                </View>
                <View style = {styles.recentContainer}>
                    <Title >RECENT</Title>
                    <SmallCard/>
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
