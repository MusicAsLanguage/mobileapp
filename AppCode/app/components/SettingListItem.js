import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';

function SettingListItem({ 
    height,
    text,
    backgroundColor,  
    onPress}) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[backgroundColor], height: height}]} onPress={onPress}>
            <View style={styles.container}>
                <AppText style={styles.text}>{text}</AppText>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="chevron-right" color={colors.dark} size={30}/>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        width: '100%',
    },
    container: {
        flexDirection: "row",
    },
    iconContainer: {
        justifyContent: 'center',
        position: 'absolute',
        right: 20,
    },
    text: {
        fontSize: 20,
        color: colors.dark,
        marginLeft: 25,
    },
})

export default SettingListItem;