import React from 'react';
import Colors from 'politokens/js/Light';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';


// import { Container } from './styles';

const Button = ({labelButton, onpress}) => {
  return (

        <TouchableOpacity 
            style={style.button}
            onPress={onpress}
        >
            <Text>
                {labelButton}
            </Text>
        </TouchableOpacity>
    
  )
}

export default Button;

const style = StyleSheet.create({
    button: {
        // backgroundColor: Colors.backgroundLevel0
        backgroundColor: '#966',
        width: 100,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
