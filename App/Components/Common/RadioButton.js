import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';


export default function RadioButton({radioButtonsData}) {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const onPressRadioButton = radioButtonsArray => {
    console.log(radioButtonsArray);
    setRadioButtons(radioButtonsArray);
  };
  return (
    <View style={styles.container}>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 200,
  },
});