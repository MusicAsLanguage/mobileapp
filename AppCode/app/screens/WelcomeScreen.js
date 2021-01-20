import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
    <ImageBackground 
        style={styles.background}
        source={require('../assets/welcome_background.jpg')}
    >
        <View style={styles.logoContainer}>
            <Image source={require('../assets/favicon.png')} />
            <Text style={styles.tagLine}>Music As Language</Text>
        </View>       
        <View style={styles.buttonContainer}>
            <AppButton 
                title="Login" 
                onPress={() => console.log("Login button tapped.")}>
            </AppButton>
            <AppButton 
                title="Register" 
                color="secondary" 
                onPress={() => console.log("Register button tapped.")}>
            </AppButton>
        </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    tagLine: {
        fontSize: 20,
        paddingVertical: 10,
        color: colors.white,
        fontWeight: 'bold',
    },
    buttonContainer: {
        padding: 15,
        width: '100%',
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default WelcomeScreen;