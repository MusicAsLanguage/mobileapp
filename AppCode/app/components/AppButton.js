import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from '../config/colors';

function AppButton({title, onPress, disabled = false, color = "button", marginTop = 0}){
    return (
        <TouchableOpacity 
        style={[styles.button, { backgroundColor: disabled ? colors.disabledButton : colors[color], marginTop : marginTop}]} 
        disabled={disabled} 
        onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
    },
    text: {
        color: colors.buttonText,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default AppButton;