import React from "react";
import { StyleSheet, TouchableOpacity, Icon } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function BackButton({onPress, color = "white"}){
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color]}]} onPress={onPress}>
            <MaterialCommunityIcons name="chevron-left" color={colors.black} size={30} /> 
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
    },
})

export default BackButton;