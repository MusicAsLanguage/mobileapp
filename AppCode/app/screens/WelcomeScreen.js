import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

import colors from '../config/colors';
import AppButton from '../components/AppButton';
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
    return (
    <ImageBackground 
        style={styles.background}
        source={require('../assets/signin_background.png')}
    >
        <View style={styles.logoContainer}>       
            <Text style={styles.tagLine}>#MusicAsLanguage</Text>
            <Image style={styles.logo} source={require('../assets/MAL_logo.png')} />
        </View>       
        <View style={styles.buttonContainer}>
            <AppButton 
                title="Login" 
                onPress={() => navigation.navigate(routes.LOGIN)}>
            </AppButton>
            <AppButton 
                title="Register" 
                onPress={() => navigation.navigate(routes.REGISTER)}>
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
    buttonContainer: {
        padding: 15,
        width: '100%',
        marginBottom: 25,
    },
    logo: {
        width: 120,
        height: 120,
    },
    logoContainer: {
        position: 'absolute',
        top: 280,
        alignItems: 'center',
    },
    tagLine: {
        fontSize: 20,
        paddingVertical: 10,
        color: colors.black,
        fontWeight: 'bold',
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default WelcomeScreen;