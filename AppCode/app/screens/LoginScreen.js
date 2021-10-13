import React from 'react';
import { StyleSheet, Image, ImageBackground, Text } from 'react-native';
import { useState } from 'react';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {AppForm, AppFormField, SubmitButton, ErrorMessage} from '../components/forms';
import {login} from '../api/auth';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';
import routes from "../navigation/routes";
import uistrings from '../config/uistrings';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
});


function LoginScreen({ navigation }) {
    const { logIn } = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async (userInfo) => {
        const result = await login(userInfo);
        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        logIn(result.data);
    };
    
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/signin_background.png')}
        >
            <Screen style={styles.container}>
                <Text style={styles.tagLine}>{uistrings.TagLine}</Text>
                <Image style={styles.logo} source={require("../assets/MAL_logo.png")} />
                
                <AppForm
                    initialValues={{ email: '', password: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={uistrings.ErrInvalidLogin} visible={loginFailed}/>
                    <Text style={styles.text}>{uistrings.Email}</Text>
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder=""
                        textContentType="emailAddress"
                    />
                    <Text style={styles.text}>{uistrings.Password}</Text>
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder=""
                        secureTextEntry={true}
                        textContentType="password"
                        />
                    <SubmitButton title={uistrings.LogIn} marginTop={60}/>
                    <Text style={styles.shallowText}>
                        <Text style={styles.hyperlinkStyle} onPress={() => navigation.navigate(routes.PASSWORDRESET)}>{uistrings.ForgotPassword}</Text>
                        {'   |   '}
                        <Text style={styles.hyperlinkStyle} onPress={() => navigation.navigate(routes.REGISTER)}>{uistrings.CreateAccount}</Text>
                    </Text>
                </AppForm>
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
    hello: {
        fontSize: 25,
        paddingVertical: 5,
        color: colors.black,
        fontWeight: 'bold',
    },
    hyperlinkStyle: {
        color: colors.darkblue,
    },
    logo: {
        width: 110,
        height: 110,
        alignSelf: 'center',
        marginBottom: 80,
    },
    shallowText: {
        fontSize: 13,
        color: colors.dark,
        alignSelf: 'center',
        marginTop: 20,
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
        fontSize: 15,
        color: colors.black,
        paddingTop: 25,
    }
})

export default LoginScreen;