import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Title from './Title';
import SmallCard from './SmallCard';

export default function HorizontalList({title, data}) {
    return (
        <>
            <Title>{title}</Title>
            <FlatList date = {data} keyExtractor = {item => item.id} 
            horizondal showsHorizontalScrollIndicator = {false} 
            renderItem = {({item}) => <SmallCard item = {item}/>}/>
        </>
        
    )
}
