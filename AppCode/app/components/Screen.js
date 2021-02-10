import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={style}>{children}</View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }
})

export default Screen;