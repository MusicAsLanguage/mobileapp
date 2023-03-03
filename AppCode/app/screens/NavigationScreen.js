import React from 'react';
import { StyleSheet, Image, ImageBackground, Text } from 'react-native';

import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import routes from "../navigation/routes";
import uistrings from '../config/uistrings';

function NavigationScreen({ navigation }) {
    
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/signin_background.png')}
        >
            <Screen style={styles.container}>
                <Text style={styles.tagLine}>{uistrings.TagLine}</Text>
                <Image style={styles.logo} source={require("../assets/MAL_logo.png")} />
                
                <Text style={styles.text}>New to the app? Create your account</Text>
                <AppButton 
                    title={uistrings.SignUp} 
                    onPress={() => navigation.navigate(routes.REGISTER)} 
                    marginTop={20}
                />

                <Text style={styles.text}>Already have an account? Sign in</Text>
                <AppButton 
                    title={uistrings.LogIn} 
                    onPress={() => navigation.navigate(routes.LOGIN)} 
                    marginTop={20}
                />
                
            </Screen>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-start",
    },
    container: {
        padding: 15,
    },
    logo: {
        width: 110,
        height: 110,
        alignSelf: 'center',
        marginBottom: 20,
    },
    tagLine: {
        fontSize: 15,
        paddingVertical: 10,
        color: colors.black,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 50,
    },
    text: {
        fontSize: 20,
        color: colors.black,
        paddingTop: 35,
        alignSelf: 'center',
    }
})

export default NavigationScreen;