import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../config/colors';

function GradientButtonLeft({ onPress, colors, text, renderIcon }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient start={{x:0.6, y:0.5}} end={{x:1, y:0.5}} colors={colors} style={styles.linearGradientStyleLeft}>
        {renderIcon()}
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

function GradientButtonRight({ onPress, colors, text, renderIcon }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient start={{x:0, y:0.5}} end={{x:0.4, y:0.5}} colors={colors} style={styles.linearGradientStyleRight}>
        {renderIcon()}
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    linearGradientStyleLeft: {
        height: 70,
        padding: 15,
        alignItems: 'center',
        borderRadius: 35,
        flexDirection: 'row',
    },
    linearGradientStyleRight: {
        height: 70,
        padding: 15,
        alignItems: 'center',
        borderRadius: 35,
        flexDirection: 'row-reverse',
    },
    text: {
        color: colors.buttonText,
        fontSize: 20,
    },
})

export { GradientButtonLeft, GradientButtonRight }