import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 

export default function Review() {

    const totalStars = 5;
    const gainStars = 3;  


    return (
        <View style = {styles.reviewContainer}>
            {
                Array.from({length: gainStars}, (x, i) => {
                return(
                    <MaterialIcons key={i} name="star" size={30} color="#f9db04"/>
                )
                })
            }
            {
                Array.from({length: totalStars-gainStars}, (x, i) => {
                return(
                    <MaterialIcons key={i} name="star-border" size={30} color="#f9db04" />
                )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    reviewContainer: {
      flex: 1,
      flexDirection : "row",
      justifyContent: 'center',
      alignItems : "center",
      padding: 8,
    },
   
  });
