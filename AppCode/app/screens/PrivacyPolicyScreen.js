import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import BackButton from "../components/BackButton";
import uistrings from '../config/uistrings';


function PrivacyPolicyScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <BackButton onPress={() => navigation.navigate(routes.SETTINGS)} />
            <AppText style={styles.screenTitle}>{uistrings.PrivacyPolicy}</AppText>
            <ScrollView>
            {/* TODO: Get actual privacy policy text here */}
            <AppText style={styles.detailsText}>
                {uistrings.PrivacyPolicyText}
            </AppText>
            <AppText style={styles.detailsText}>
                {uistrings.PrivacyPolicyText}
            </AppText>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    screen: {
        backgroundColor: colors.white,
    },
    screenTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: colors.dark,
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 25,
    },
    detailsText: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.dark,
        alignSelf: 'auto',
        marginBottom: 25,
        marginLeft: 25,
    },
})

export default PrivacyPolicyScreen;