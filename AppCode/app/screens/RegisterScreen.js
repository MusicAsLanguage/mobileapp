import React from "react";
import { StyleSheet, ImageBackground, Text, Image } from "react-native";
import { useState } from 'react';
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton, ErrorMessage } from "../components/forms";
import { login, signup } from '../api/auth';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';
import BackButton from '../components/BackButton';
import routes from "../navigation/routes";
import uistrings from '../config/uistrings';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
});

function RegisterScreen({ navigation }) {
    const auth = useAuth();
    const [error, setError] = useState();
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    const handleSubmit = async (userInfo) => {
        const result = await signup(userInfo);
        if (!result.ok){
            if (result.data) setError(result.data.message);
            else{
                setError("An unexpected error occurred.");
                console.log(result);
            }
            return;
        }      

        const loginInfo = {
            email: userInfo.email,
            password: userInfo.password
        };
        const loginResult = await login(loginInfo);
        if (!loginResult.ok) setError("Login failed. Please try again later.");
        auth.logIn(loginResult.data);
    };

    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/signin_background.png')}
        >
            <Screen style={styles.container}>
                <BackButton onPress={() => navigation.navigate(routes.NAVIGATION)} />
                <Image style={styles.logo} source={require("../assets/MAL_logo.png")} />
                <Text style={styles.hello}>{uistrings.Hello}</Text>
                <Text style={styles.hello}>{uistrings.CreateAnAccount}</Text>

                <AppForm
                    initialValues={{ name: "", email: "", password: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error} />
                    <Text style={styles.text}>{uistrings.Name}</Text>
                    <AppFormField
                        autoCorrect={false}
                        icon="account"
                        name="name"
                        placeholder=""
                    />
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
                        secureTextEntry={isSecureEntry}
                        textContentType="password"
                        rightIcon={isSecureEntry? "eye" : "eye-off"}
                        rightIconOnPress={() => {
                            setIsSecureEntry((prev) => !prev);
                        }}
                    />
                    <SubmitButton title={uistrings.SignUp} marginTop={50}/>
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
});

export default RegisterScreen;