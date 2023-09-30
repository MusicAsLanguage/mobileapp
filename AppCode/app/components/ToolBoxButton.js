import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import AppText from "./AppText";

function ToolBoxButtonLeft({ onPress, color, text, renderIcon }) {
  return (
    <TouchableOpacity 
      style={styles.linearGradientStyleLeft}
      onPress={onPress}
    >
      {renderIcon()}
      <AppText style={[styles.text, color={color}]}>{text}</AppText>
    </TouchableOpacity>
  )
}

function ToolBoxButtonRight({ onPress, color, text, renderIcon }) {
  return (
    <TouchableOpacity 
      style={styles.linearGradientStyleRight}
      onPress={onPress}
    >
      {renderIcon()}
      <AppText style={[styles.text, color={color}]}>{text}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    linearGradientStyleLeft: {
        height: 70,
        backgroundColor: colors.white,
        padding: 15,
        alignItems: 'center',
        borderRadius: 35,
        flexDirection: 'row',
    },
    linearGradientStyleRight: {
        height: 70,
        backgroundColor: colors.white,
        padding: 15,
        alignItems: 'center',
        borderRadius: 35,
        flexDirection: 'row-reverse',
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
})

export { ToolBoxButtonLeft, ToolBoxButtonRight }