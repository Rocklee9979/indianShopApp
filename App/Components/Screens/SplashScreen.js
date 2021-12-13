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
import MainTitle from '../MainTitle';
import SubTitle from '../SubTitle';
import * as Animatable from 'react-native-animatable';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import { useTheme } from '@react-navigation/native';


export default function SplashScreen() {
    //const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
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
              <MainTitle color={'#000066'} size = {24}>Stay connected with Us!</MainTitle>
              <SubTitle size = {18}>Start Shopping...</SubTitle>
              <View style={styles.button}>
              
              <Button title="Get Started" color={'#000066'}  type="clear" style = {styles.button} />
              
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
    backgroundColor: '#000066'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000066',
  },
  footer: {
      flex: 1,
      backgroundColor: '#ffff00',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  
  button: {
        alignItems: 'flex-end',
        marginTop: 30,
        color:'#000066',
        borderRadius: 8,
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
  }
});
