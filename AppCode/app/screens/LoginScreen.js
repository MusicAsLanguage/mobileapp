import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {AppForm, AppFormField, SubmitButton, ErrorMessage} from '../components/forms';
import authApi from '../api/auth';
import { useState, useContext } from 'react';
import AuthContext from '../auth/context';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
});

function LoginScreen(props) {
    const authContext = useContext(AuthContext);
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async (userInfo) => {
        const result = await authApi.login(userInfo);
        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        console.log(result.data);
        authContext.setUser(result.data.token);
    };

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")} />
            
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error="Invalid email and/or password." visible={loginFailed}/>
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
                    secureTextEntry={true}
                    textContentType="password"
                    />
                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})

export default LoginScreen;