import React from 'react'
import {Text} from 'react-native'

export default function SubTitle({children, numberOfLines = 2, size= 15, color= '#000066'}) {
    return (
            <Text numberOfLines = {numberOfLines} 
            style = {{fontSize: size, color: color, padding: 5}} > {children}</Text>
        
    )
}


