import React from 'react'
import { View, 
    Text, 
    StatusBar, 
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Switch
} from 'react-native'

import { useNavigation } from '@react-navigation/native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Title from '../Common/Title';
import SubTitle from '../Common/SubTitle';
import TitleLabel from '../Common/TitleLabel';
import RadioButton from '../Common/RadioButton';

export default function Settings() {
  
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const radioButtonsData = [
        {
          id: '1',
          label: 'Delivery',
          value: 'delivery',
          color: '#f9db04',
          selected: true,
        },
        {
          id: '2',
          label: 'Pick up',
          value: 'pick_up',
          color: '#f9db04',
          selected: false,
        },
      ];
      
    const navigation = useNavigation();
    return (
        <SafeAreaView style = {{flex:1}}>
        <View style = {styles.container}>
            <View style = {styles.itemContainer}>
                <View>

                    <TitleLabel>Your Store</TitleLabel>
                    <View style = {styles.settingContent}>
                        <MaterialIcons name='add-location-alt'  
                            size={24} color='#f9db04' style = {{flex: 0.33}}/>
                        <SubTitle color='#ffff'>
                            28 Colbee Ct, Phillip ACT 2606
                        </SubTitle>
                    </View>
                    <View style = {styles.settingContent}>
                        <MaterialIcons name='local-phone'  
                            size={24} color='#f9db04' style = {{flex: 0.33}}/>
                        <SubTitle color='#ffff'>
                            0452076021, 0261854555
                        </SubTitle>
                    </View>
                </View>
            </View>
            <View style = {styles.itemContainer}>
                <View style = {{flexDirection:'column'}}>
                    <TitleLabel>Delivery Options</TitleLabel>
                    <RadioButton radioButtonsData = {radioButtonsData} />
                </View>
            </View>
            <View style = {styles.itemContainer}>
                <View style = {{flexDirection:'column'}}>
                    <TitleLabel>Notifications</TitleLabel>
                    <View style = {{flexDirection: 'row', padding: 15}}>
                        <Text style = {{marginRight: 20,fontSize: 14, color: '#ffff'}}>Enable</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        /> 

                    </View>
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
},
settingContent: {
    flexDirection: 'row',
}
})