import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function RiviewList({productID}) {
    return (
        <View style = {styles.reviewListContainer}>
            <Text style = {styles.nameText}>Full Name : {productID}</Text>
            <Text style = {styles.commentText}>Indian Shop boasts as the largest online Indian 
                grocery store in Australia and is the first of its kind in Canberra.</Text>
            <Text style = {styles.DataText}>01/07/2021 10:00 am</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    reviewListContainer: {
        margin: 10,
        borderBottomColor: '#f9db04',
        borderBottomWidth: 1,
        
    },
    nameText:{
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#2a368f',
    },
    commentText: {
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: '100',
        color: '#2a368f',
    },
    DataText:{
        fontSize: 16,
        alignItems: 'right',
        marginBottom: 10,
        color: '#2a368f',
        marginTop: 10
    }
});
