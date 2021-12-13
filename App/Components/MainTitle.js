import React from 'react'
import {Text} from 'react-native'

export default function MainTitle({children, numberOfLines = 2, size= 20,color = '#ffff00' }) {
    return (
            <Text numberOfLines = {numberOfLines} 
            style = {{fontWeight: 'bold', fontSize: size, color: color,marginTop: 10
        }} > {children}</Text>
        
    )
}


