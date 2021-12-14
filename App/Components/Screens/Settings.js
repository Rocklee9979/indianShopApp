import React from 'react'
import { View, 
    Text, 
    StatusBar, 
    SafeAreaView,
    Dimensions,
    StyleSheet
} from 'react-native'

import { useNavigation } from '@react-navigation/native';

export default function Settings() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style = {{flex:1}}>
        <View style = {styles.container}>
            <View style = {styles.itemContainer}>
                <View>
                    <Text>Select Store</Text>
                </View>
            </View>
            <View style = {styles.itemContainer}>
                <View>
                    <Text>Delivery Options</Text>
                </View>
            </View>
            <View style = {styles.itemContainer}>
                <View>
                    <Text>Notifications</Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
    )
}

const {width} = Dimensions.get("screen");
const styles = StyleSheet.create ({
container: {
   marginTop: StatusBar.currentHeight,
   paddingHorizontal: 15,
   backgroundColor: '#2a368f',
   flex: 1,
},
itemContainer: {
    padding: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    flexDirection:'row',
    flex:1,
}
})