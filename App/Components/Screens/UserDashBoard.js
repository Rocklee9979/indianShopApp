import React, {useState,useEffect} from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";
import { 
    View, 
    Text, 
    StyleSheet,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    LayoutAnimation,
    Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../Common/Header';

export default function UserDashBoard() {
    return (
        <SafeAreaView style = {{flex:1}}>
            <View style = {styles.container}>
                <ScrollView>
                <Header/>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#2a368f'
    },
})
