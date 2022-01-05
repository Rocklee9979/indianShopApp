import React from "react";
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput id = 'search_name' style={styles.searchInput} placeholder="Search product here...." />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 12,
        justifyContent: 'center',
        marginTop: 10,
    }

})

export default SearchBar;
