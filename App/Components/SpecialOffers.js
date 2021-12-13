import React from 'react';
import { View, Text } from 'react-native';
import HorizontalList from './HorizontalList';

export default function SpecialOffers({data}) {
    return (
        <HorizontalList title = "Special Offers" data = {data} />
    )
    
}
