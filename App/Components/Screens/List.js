import React, { useState } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    Button, 
    TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function List() {
    return (
        <View style={ styles.cartContainer}>
        <ScrollView showsVerticalScrollIndicator={ false}>
            <View style={styles.titleContainer}>
                <Text style={ styles.titleText }>Your List</Text>
            </View>

            <View style={ styles.horizontalLine}></View>

            <View>
                <View>
                    <View style={ styles.bodyContainer }>
                        <View><Text style={ styles.bodyText}>Items</Text></View>
                        <View style={ styles.col2 }><Text style={ styles.bodyText }>Qty</Text></View>
                        <View style={ styles.col3 }><Text style={ styles.bodyText }>Action</Text></View>
                    </View>
                    
                    <View style={ styles.horizontalLine }></View>
                           
                </View>
            </View>


            <View>
                <View>
                    <View style={ styles.bodyContainer }>
                        <View style={ styles.col1 }><Text style={ styles.bodyText }>Cake</Text></View>
                        <View style={ styles.col2 } style = {styles.listAction}>
                            <Text style={ styles.bodyText }>
                                1 
                            </Text>
                            <Icon 
                                    name="plus" 
                                    size={20} 
                                    color="#f9db04"
                                    style = {styles.listIcon}  
                            />
                        </View>
                        <View style={ styles.col3 } style = {styles.listAction}>
                        <Icon 
                            name="shopping-cart" 
                            size={20} 
                            color="#f9db04"
                            style = {styles.listIcon}  
                        />
                        <Icon 
                            name="trash-o" 
                            size={20} 
                            color="#f9db04" 
                            style = {styles.listIcon} 
                        />

                        </View>
                    </View>

                    <View style={ styles.bodyContainer }>
                        <View style={ styles.col1 }><Text style={ styles.bodyText }>Rice</Text></View>
                        <View style={ styles.col2 } style = {styles.listAction}>
                            <Text style={ styles.bodyText }>
                                1 
                            </Text>
                            <Icon 
                                    name="plus" 
                                    size={20} 
                                    color="#f9db04"
                                    style = {styles.listIcon}  
                            />
                        </View>
                        <View style={ styles.col3 } style = {styles.listAction}>
                        <Icon 
                            name="shopping-cart" 
                            size={20} 
                            color="#f9db04"
                            style = {styles.listIcon}  
                        />
                        <Icon 
                            name="trash-o" 
                            size={20} 
                            color="#f9db04" 
                            style = {styles.listIcon} 
                        />

                        </View>
                    </View>
                    <View style={ styles.horizontalLine }></View>
                </View>
            </View>
        </ScrollView>
        </View>
    )
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
        fontSize:18,
        padding:5,
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
        height: 30,
        marginHorizontal: 20,
        marginVertical: 5,
    },
    col1: {
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
    titleContainer: {
      marginBottom: 20,  
    },
    titleText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:10,
    },
    listAction:{
        flexDirection: 'row',
    },
    listIcon:{
        marginVertical:10,
        marginRight:10,
    }
}); 
