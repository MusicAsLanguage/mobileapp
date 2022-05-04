import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../config/colors';

function GradientButton({ onPress, colors, text, renderIcon }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient start={{x:0, y:0.75}} end={{x:1, y:0.25}} colors={colors} style={styles.linearGradientStyle}>
        {renderIcon()}
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    linearGradientStyle: {
        padding: 20,
        alignItems: 'center',
        borderRadius: 100,
        flexDirection: 'row',
    },
    text: {
        color: colors.buttonText,
        fontSize: 20,
    },
})

export default GradientButton;