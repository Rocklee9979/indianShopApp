import React from 'react';
import { View, Text,StatusBar,StyleSheet } from 'react-native';
import Header from '../Common/Header';
import SearchBar from '../Common/SearchBar';
export default function DashBoard() {
    return (
        <View style = {styles.container}>
            <Header/>
            <SearchBar/>
            
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
       marginTop: StatusBar.currentHeight,
       paddingHorizontal: 15,
       backgroundColor: '#2a368f',
       flex: 1,
    }
})
