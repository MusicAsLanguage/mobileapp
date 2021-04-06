import React from "react";
import { StyleSheet } from "react-native";
import { useState } from 'react';
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton, ErrorMessage } from "../components/forms";
import { login, signup } from '../api/auth';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
});

function RegisterScreen() {
    const auth = useAuth();
    const [error, setError] = useState();

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
        auth.logIn(loginResult.data.token);
    };

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error={error} visible={error} />
                <AppFormField
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Register" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
});

export default RegisterScreen;