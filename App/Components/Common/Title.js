import React from 'react'
import {Text} from 'react-native'

export default function Title({children, numberOfLines = 2, size= 18, 
    defaultColor= '#f9db04', defaultPadding = 20}) {
    return (
            <Text numberOfLines = {numberOfLines} 
            style = {{fontWeight: 'bold', 
            fontSize: size, 
            color: defaultColor,
            alignItems: 'center', 
            padding: defaultPadding}} > {children}</Text>
        
    )
}


