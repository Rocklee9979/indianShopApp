import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Textarea from 'react-native-textarea';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 

import Rating from './Rating';

export default function CommentBox() {

    const totalStars = 5;
    const [gainStars, setgainStars] = useState(0);
    
    const ratingStars = [1, 2, 3, 4, 5];
    
    const addRating = (value) => {
        setgainStars(value);
    }

    console.log(gainStars);

    // const addRating = ()=> {
    //     alert(gainStars);

    // }

    // var ratingStars = [];

	// for(let i = 1; i <= (gainStars); i++){

	// 	ratingStars.push(
	// 		<MaterialIcons 
    //                 key={i} name="star" size={30} color="#f9db04"
    //                 onPress={(key)=> setgainStars(i)}
    //                 />
	// 	)
	// }
    
    // for(let j=1; j <= (5-gainStars); j++){
    //     console.log(j);

	// 	ratingStars.push(
	// 		<MaterialIcons 
    //                 key={j} name="star-border" size={30} color="#f9db04"
    //                 onPress={(j)=>addRating(j)}
    //                 />
                    
	// 	)
	// }
	
      

    return (
        <View style={styles.container}>
            <View style = {styles.ratingContainer}>

            { ratingStars.map(  
                    (stars) => {
                        return (
                            <MaterialIcons name='star' size={ 30 } color={stars<=gainStars ? 'green' : 'black'}
                                onPress={ ()=>addRating(stars)}
                            />

                        )
                        
                    }
            ) }
                
            <Button onPress={addRating}> Test</Button>
            
            </View>
            <Textarea
                containerStyle={styles.textareaContainer}
                style={styles.textarea}
                maxLength={120}
                placeholder={'Type your comments here...'}
                placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'}
            />
            <TouchableOpacity style = {{alignItems:'flex-start'}}>
                <View style = {styles.ButtonStyle}>
                    <Text style= {styles.LabelStyle}
                    style = {{color:'#f9db04'}}>Post</Text>
                </View>
            </TouchableOpacity>

        </View>

)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
  ButtonStyle:{
    backgroundColor: '#2a368f',
    color:'#000',
    fontWeight:'bold',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical:10,
    height: 35,
    width:100,
    marginHorizontal:15,

},
LabelStyle:{
    fontSize: 16,
},
ratingContainer: {
      flex: 1,
      flexDirection : "row",
      justifyContent: 'center',
      alignItems : "center",
      padding: 8,
    },
   
});
