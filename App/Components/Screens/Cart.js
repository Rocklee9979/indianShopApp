import React, { useState } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    Modal, 
    ScrollView, 
    TouchableOpacity 
} from 'react-native';
import { Button } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';


export default function Cart() {
    const navigation = useNavigation();
    //Please read the folling comments.
    //use this type of data in the main App.js file.
    const data = [
    { key:1,  quantity: 1, item: "Bacon and Egg Roll", price: 10 },
    { key:2,  quantity: 1, item: "Coffee", price: 5 },
    { key:3,  quantity: 2, item: "Pasta", price: 10 },
    { key: 4, quantity: 1, item: "Muffin", price: 5 },
        
    ];
    //use the following code inside return in the main App.js file.<Cart data={ { data } }/>
    
    


    const [itemQuantity, setItemQuantity] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    var totalPrice = 0;

    const handleViewCart = () => {
        setModalOpen(true);
    }

    const handleAddItems = () => {
        setModalOpen(false);
    }

    const handleAddPrice = (price) => {
        totalPrice = totalPrice + price;
    }


    return (

        
            <View style={ styles.cartContainer}>
            <ScrollView showsVerticalScrollIndicator={ false}>
                

                <View style={styles.titleContainer}>
                    <Text style={ styles.titleText }>Your Cart</Text>
                </View>

                <View style={ styles.horizontalLine}></View>

                <View>
                    <View>
                        <View style={ styles.bodyContainer }>
                            <View><Text style={ styles.mainbodyText}>Product</Text></View>
                            <View style={ styles.col2 }><Text style={ styles.mainbodyText }>Qty</Text></View>
                            <View style={ styles.col3 }><Text style={ styles.mainbodyText }>Price</Text></View>

                            </View>
                            <View style={ styles.horizontalLine }></View>
                               
                            </View>
                           
                </View>
                <View>
                    <View>
                        <View style={ styles.bodyContainer }>
                            <View style={ styles.col1 }><Text style={ styles.bodyText }>Cake</Text></View>
                            <View style={ styles.col2 }><Text style={ styles.bodyText }>1</Text></View>
                            <View style={ styles.col3 }><Text style={ styles.bodyText }>$ 12.00</Text></View>

                            </View>
                            <View style={ styles.horizontalLine }></View>
                               
                            </View>
                           
                </View>

                
                <View style={ styles.totalPriceContainer }>
                    <View><Text style={ styles.mainbodyText}>Sub Total: </Text></View>
                    <View><Text style={ styles.bodyText }>$ 456.00</Text></View>
                </View>

                <TouchableOpacity onPress ={()=>navigation.navigate("Checkout")}>
                <View style={ styles.button } >
                    <Text style={ styles.buttonText}>Go to checkout</Text>

                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={ handleAddItems }>
                <View style={ styles.button }>
                    <Text style={ styles.buttonText }>Add more items</Text>
                </View>
                </TouchableOpacity>


            </ScrollView>
            </View>
        


    );
}

const styles = StyleSheet.create({
    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#2a368f',
    },
    bodyContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    bodyText: {
        color: 'white',
        fontSize: 18,
    },
    mainbodyText:{
        color: '#f9db04',
        fontSize: 18,

    },
    cartContainer: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#2a368f',
        height: '100%',

    },
    button: {
        color: 'black',
        backgroundColor: '#f9db04',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        height: 40,
        marginHorizontal: 20,
        marginVertical: 5,
    },
    col1: {
        backgroundColor: '#989DAF',
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    col2: {},
    col3: {},
    horizontalLine: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginHorizontal: 10,
        marginVertical: 4,
    },
    pushBar: {
        alignItems: 'center',
        marginTop: 0,
    },
    titleContainer: {
      marginBottom: 20,  
    },
    titleText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    totalPriceContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginBottom: 10,
    },
}); 