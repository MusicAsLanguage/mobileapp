import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

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
            <TouchableOpacity 
                style={styles.loginButton} 
                onPress={() => console.log("Login button tapped.")}>
                    <Text style={styles.text}>{"Login"}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.registerButton} 
                onPress={() => console.log("Register button tapped.")}>
                    <Text style={styles.text}>{"Register"}</Text>
            </TouchableOpacity>
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
    loginButton: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10,
    },
    registerButton: {
        backgroundColor: colors.secondary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default WelcomeScreen;