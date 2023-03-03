import React from 'react';
import Colors from 'politokens/js/Light';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

function ButtonNormal(labelButton, onpress) {
  return (
        <TouchableOpacity 
            style={style.button}
            onPress={onpress}
        >
            <Text style={style.title}>
                {labelButton}
            </Text>
        </TouchableOpacity>
  )
}

export default ButtonNormal;

const style = StyleSheet.create({
    button: {
        backgroundColor: '#966',
        width: 118,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 3,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 400,
    }
})
