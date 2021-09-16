import React from 'react';
import { StyleSheet, ScrollView, View, TextInput } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import uistrings from '../config/uistrings';
import {sendMessage} from '../api/message';


function MessagesScreen() {

    const [messageText, setMessageText] = React.useState("");

    const onClickSend = async () => {
        sendMessage(messageText)
        alert(uistrings.MessageSent)
        setMessageText("")
    };

    return (
        <Screen style={styles.screen}>
            <AppText style={styles.screenTitle}>{uistrings.AskForHelp}</AppText>
            <AppText style={styles.detailsText}>{uistrings.SendMessageToMAL}</AppText>
            <ScrollView style={styles.textContainer}>
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
            </ScrollView>
            <View style={styles.buttonContainer}>
                <AppButton disabled={!messageText} title="Send" onPress={onClickSend}/>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.yellowgreen,
    },
    screenTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: colors.white,
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 25,
    },
    detailsText: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.white,
        alignSelf: 'auto',
        marginBottom: 25,
        textAlign: 'center',
    },
    textInput: {
        fontSize: 16,
        fontWeight: '500',
        backgroundColor: colors.white,
        color: colors.black,
        alignSelf: 'auto',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 25,
    },
    textContainer: {
        marginTop: 60,
        backgroundColor: colors.white,
    },
    buttonContainer: {
        height: 70,
        width: '80%',
        backgroundColor: colors.white,
        alignSelf: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },

})

export default MessagesScreen;