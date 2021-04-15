import React from 'react';
import { StyleSheet, Image, ImageBackground, Text } from 'react-native';
import { useState } from 'react';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {AppForm, AppFormField, SubmitButton, ErrorMessage} from '../components/forms';
import {login} from '../api/auth';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';
import BackButton from '../components/BackButton';
import routes from "../navigation/routes";

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
        logIn(result.data.token);
    };
    
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/signin_background.png')}
        >
            <Screen style={styles.container}>
                <BackButton onPress={() => navigation.navigate(routes.WELCOME)} />
                <Image style={styles.logo} source={require("../assets/MAL_logo.png")} />
                <Text style={styles.hello}>Hello.</Text>
                <Text style={styles.hello}>Welcome Back!</Text>
                
                <AppForm
                    initialValues={{ email: 'jane.doe@mal.com', password: 'Mal123!' }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error="Invalid email and/or password." visible={loginFailed}/>
                    <Text style={styles.text}>EMAIL</Text>
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder=""
                        textContentType="emailAddress"
                    />
                    <Text style={styles.text}>PASSWORD</Text>
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder=""
                        secureTextEntry={true}
                        textContentType="password"
                        />
                    <SubmitButton title="Login" />
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
    logo: {
        width: 60,
        height: 60,
        alignSelf: 'auto',
        marginLeft: 270
    },
    text: {
        fontSize: 15,
        color: colors.black,
        paddingTop: 25,
    }
})

export default LoginScreen;