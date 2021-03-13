import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import AppButton from '../components/AppButton';
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
    return (
    <ImageBackground 
        style={styles.background}
        source={require('../assets/welcome_background.jpg')}
    >
        {/* <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            <Text style={styles.tagLine}>Music As Language</Text>
        </View>        */}
        <View style={styles.buttonContainer}>
            <AppButton 
                title="Login" 
                onPress={() => navigation.navigate(routes.LOGIN)}>
            </AppButton>
            <AppButton 
                title="Register" 
                color="secondary" 
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
    },
    logo: {
        width: 80,
        height: 80,
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        alignItems: 'center',
    },
    tagLine: {
        fontSize: 25,
        paddingVertical: 10,
        color: colors.white,
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