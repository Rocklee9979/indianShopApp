import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainTitle from '../Common/MainTitle';
import SubTitle from '../Common/SubTitle';
import * as Animatable from 'react-native-animatable';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import { useTheme } from '@react-navigation/native';

export default function Home() {
    //const { colors } = useTheme();
    const navigation = useNavigation();


     function componentDidMount(){
            console.log("Mounting login component");
            alert("functioning tab")
        }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#2a368f' barStyle="dark-content"/>
          <View style={styles.header}>
              <Animatable.Image 
                  animation="zoomInDown"
                  duraton="1500"
              source={require('../../../assets/images/shopping.png')}
              style={styles.logo}
              resizeMode="stretch"
              />
          </View>
          <Animatable.View 
              style = {styles.footer}
              animation="fadeInUpBig"
          >
              <MainTitle color={'#2a368f'} size = {24}>Stay connected with Us!</MainTitle>
              <SubTitle size = {18}>Start Shopping...</SubTitle>
              <View>

              <TouchableOpacity 
              style = {{alignItems:'flex-end'}}
              onPress = {()=>navigation.navigate("Login")}>
                <View style = {styles.CustomButton}>
                    <Text style = {styles.ButtonLabel}>Get Started</Text>
                </View>
              </TouchableOpacity>
              
              
              </View>
          </Animatable.View>
        </View>
      );
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#2a368f'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2a368f',
  },
  footer: {
      flex: 1,
      backgroundColor: '#f9db04',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
  CustomButton: {
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 8,
    backgroundColor:'#2a368f',
    width: 116,
    height: 40,
},
ButtonLabel:{
    color:'#fff',
    fontSize: 14,
    paddingBottom:8,
    paddingTop:8,
    
}
});
