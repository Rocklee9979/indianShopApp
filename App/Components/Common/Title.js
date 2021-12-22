import React from 'react'
import {Text} from 'react-native'

export default function Title({children, numberOfLines = 2, size= 18, defaultColor= '#f9db04'}) {
    return (
            <Text numberOfLines = {numberOfLines} 
            style = {{fontWeight: 'bold', 
            fontSize: size, 
            color: defaultColor, 
            padding:20}} > {children}</Text>
        
    )
}


