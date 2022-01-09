import React from 'react'
import { View, Text } from 'react-native'

export default function TitleLabel({children, numberOfLines = 1, size= 18, color= '#f9db04'}) {
    return (
 
            <Text numberOfLines = {numberOfLines} 
            style = {{fontSize: size, color: color, padding: 5, fontWeight: '100'}}>
                {children}
            </Text>
        
    )
}
