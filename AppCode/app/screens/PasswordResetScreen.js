import React from "react";
import { StyleSheet, ImageBackground, Text, Image, View, Alert } from "react-native";
import { useState } from 'react';
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton, ErrorMessage } from "../components/forms";
import { pwdReset } from '../api/auth';
import colors from '../config/colors';
import BackButton from '../components/BackButton';
import routes from "../navigation/routes";
import uistrings from '../config/uistrings';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
});

function PasswordResetScreen({ navigation }) {
    const [error, setError] = useState();

    const popupSuccessAlert = () => {
    Alert.alert("SUCCESS", "Check your email. We sent you a link to recover your password.", [
        {text: "OK", onPress: () => navigation.navigate(routes.LOGIN)}
    ])};

    const handleSubmit = async (userInfo) => {
        const result = await pwdReset(userInfo);
        if (!result.ok) return setError(result.data.message);
        popupSuccessAlert();
    };

    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/signin_background.png')}
        >
            <Screen style={styles.container}>
                <BackButton onPress={() => navigation.navigate(routes.LOGIN)} />
                <Image style={styles.logo} source={require("../assets/MAL_logo.png")} />
                <View style={styles.title}>
                    <Text style={styles.titleText}>{uistrings.ForgottenPassword}</Text>
                    <Text style={styles.titleText}>{uistrings.Recovery}</Text>
                </View>

                <AppForm
                    initialValues={{ email: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error} />
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
                    <SubmitButton title={uistrings.Recover} />
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
    logo: {
        width: 60,
        height: 60,
        alignSelf: 'auto',
        marginLeft: 270,
    },
    text: {
        fontSize: 15,
        color: colors.black,
        paddingTop: 25,
    },
    title: {
        paddingTop: 60,
        paddingBottom: 50,
    },
    titleText: {
        fontSize: 25,
        paddingVertical: 5,
        color: colors.black,
        fontWeight: 'bold',
    },
});

export default PasswordResetScreen;