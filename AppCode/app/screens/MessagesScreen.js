import React from 'react';
import { StyleSheet, ScrollView, TextInput } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import BackButton from "../components/BackButton";
import uistrings from '../config/uistrings';
import {sendMessage} from '../api/message';


function MessagesScreen({ navigation }) {

    const [messageText, setMessageText] = React.useState("");

    const onClickSend = async () => {
        sendMessage(messageText)
        alert(uistrings.MessageSent)
        setMessageText("")
    };

    return (
        <Screen style={styles.screen}>
            <AppText style={styles.screenTitle}>{uistrings.AskForHelp}</AppText>
            <ScrollView>
            <AppText style={styles.detailsText}>{uistrings.SendMessageToMAL}</AppText>
            <TextInput 
                style={styles.textInput}
                multiline
                placeholder={uistrings.TypeMessage}
                keyboardType="default"
                name="messageText"
                value={messageText}
                onChangeText={value => {
                    setMessageText(value)
                }}
                />
            <AppButton disabled={!messageText} title="Send" onPress={onClickSend}/>
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
        textAlign: 'center',
    },
    textInput: {
        fontSize: 14,
        fontWeight: '500',
        backgroundColor: colors.lightgrey,
        color: colors.black,
        alignSelf: 'auto',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 60,
        marginBottom: 25,
        borderRadius: 10
    },
})

export default MessagesScreen;