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
              <View style={styles.button}>
              
              <Button 
              title="Get Started" 
              color={'#2a368f'}  
              type="clear" 
              style = {styles.button} 
              onPress = {()=>navigation.navigate("Login")}
              />
              
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
  
  button: {
        alignItems: 'flex-end',
        marginTop: 30,
        color:'#2a368f',
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
