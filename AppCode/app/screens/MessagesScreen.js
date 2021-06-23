import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Screen from '../components/Screen';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';
import colors from '../config/colors';
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import BackButton from "../components/BackButton";
import uistrings from '../config/uistrings';


function MessagesScreen({ navigation }) {

    const handleSubmit = async (userInfo) => {
        // TODO: Send the message here
        navigation.navigate(routes.ACCOUNT);
    };

    return (
        <Screen style={styles.screen}>
            <BackButton onPress={() => navigation.navigate(routes.ACCOUNT)} />
            <AppText style={styles.screenTitle}>{uistrings.SendMessage}</AppText>
            <ScrollView>
            <AppText style={styles.detailsText}>{uistrings.SendMessageToMAL}</AppText>    
            <AppForm
                    initialValues={{ message: '' }}
                    onSubmit={handleSubmit}
                >
                    <AppFormField
                        style={styles.textInput}
                        multiline
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="message"
                        placeholder="Type your message here"
                        textContentType="emailAddress"
                    />
                    <SubmitButton title={uistrings.Send} />
            </AppForm>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 15,
    },
    screenTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: colors.black,
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 25,
    },
    detailsText: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.black,
        alignSelf: 'auto',
        marginBottom: 25,
        marginLeft: 25,
    },
    textInput: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.black,
        alignSelf: 'auto',
        marginBottom: 25,
        marginLeft: 25,
    },
})

export default MessagesScreen;