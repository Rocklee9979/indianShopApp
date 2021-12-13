import React from 'react';
import { View, Text, FlatList } from 'react-native';
import MainTitle from './MainTitle';
import FlatCard from './FlatCard';

export default function VerticalList({title, data}) {
    return (
        <>
            <MainTitle>Product List</MainTitle>
            <FlatCard/>
        </>
        
    )
}
