import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import colors from '../config/colors';

function AppTextInput({ icon, rightIcon, rightIconOnPress, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && (
                <MaterialCommunityIcons 
                    name={icon} 
                    size={20} 
                    color={defaultStyles.colors.medium} 
                    style={styles.icon}
                />
            )}
            <TextInput 
                placeholderTextColor={defaultStyles.colors.medium}
                style={[defaultStyles.text, {width: "80%"}]} 
                {...otherProps} 
            />
            {rightIcon && rightIconOnPress && (
                <TouchableOpacity onPress={rightIconOnPress}>
                    <MaterialCommunityIcons 
                        name={rightIcon} 
                        size={20} 
                        color={defaultStyles.colors.medium} 
                        style={styles.rightIcon}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '100%',
        padding: 0,
        marginVertical: 10,
        borderBottomColor: colors.grey,
        borderBottomWidth: 2,
    },
    icon: {
        marginRight: 10
    },
    rightIcon: {
        marginLeft: 10
    },
})

export default AppTextInput;