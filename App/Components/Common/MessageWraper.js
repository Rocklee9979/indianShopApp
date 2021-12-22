import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function MessageWraper({children}) {
    return (
        <View style = {{alignItems:'flex-start'}}>
            <Text style = {styles.MessageTxtWraper}>{children}</Text>
        </View>
    )
}
const styles = StyleSheet.create ({
    MessageTxtWraper: {
        color : '#f77777',
        fontSize: 12,
    }
})
