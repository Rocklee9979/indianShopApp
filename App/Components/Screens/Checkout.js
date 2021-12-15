import React, { useState } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    Modal, 
    ScrollView, 
    Button, 
    TouchableOpacity 
} from 'react-native';


export default function Checkout() {

    return (

        
            <View style={ styles.cartContainer}>
            <ScrollView showsVerticalScrollIndicator={ false}>
                

                <View style={styles.titleContainer}>
                    <Text style={ styles.titleText }>Checkout</Text>
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
                    <View><Text style={ styles.mainbodyText}>Sub Total Price: </Text></View>
                    <View><Text style={ styles.bodyText }>$ 456.00</Text></View>
                </View>

                <View style={ styles.totalPriceContainer }>
                    <View><Text style={ styles.mainbodyText}>Shipping Price: </Text></View>
                    <View style = {styles.fline}><Text style={ styles.bodyText }>$ 0.00</Text></View>
                </View>

                <View style={ styles.totalPriceContainer }>
                    <View><Text style={ styles.mainbodyText}>Total Price: </Text></View>
                    <View><Text style={ styles.bodyText }>$ 456.00</Text></View>
                </View>



                <TouchableOpacity>
                <View style={ styles.button }>
                    <Text style={ styles.buttonText}>Confirm Order</Text>
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
    fline:{
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginHorizontal: 10,
        marginVertical: 4,
        width:100,
        alignItems: 'flex-end',
        padding:5,

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