import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../config/colors';
import { View } from 'react-native-web';

function GradientButtonLeft({ onPress, colors, text, renderIcon }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient start={{x:0, y:0.75}} end={{x:1, y:0.25}} colors={colors} style={styles.linearGradientStyleLeft}>
        {renderIcon()}
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

function GradientButtonRight({ onPress, colors, text, renderIcon }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient start={{x:0, y:0.75}} end={{x:1, y:0.25}} colors={colors} style={styles.linearGradientStyleRight}>
        {renderIcon()}
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    linearGradientStyleLeft: {
        padding: 14,
        alignItems: 'center',
        borderRadius: 100,
        flexDirection: 'row',
    },
    linearGradientStyleRight: {
      padding: 14,
      alignItems: 'center',
      borderRadius: 100,
      flexDirection: 'row-reverse',
    },
    text: {
        color: colors.buttonText,
        fontSize: 20,
    },
})

export { GradientButtonLeft, GradientButtonRight }