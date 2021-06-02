import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import BackButton from "../components/BackButton";
import uistrings from '../config/uistrings';


function TermsAndConditionsScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <BackButton onPress={() => navigation.navigate(routes.SETTINGS)} />
            <AppText style={styles.screenTitle}>{uistrings.TermsAndConditions}</AppText>
            <ScrollView>
            {/* TODO: Get actual terms and conditions text here */}
            <AppText style={styles.detailsText}>
                {uistrings.TermsAndConditionsText}
            </AppText>
            <AppText style={styles.detailsText}>
            {uistrings.TermsAndConditionsText}
            </AppText>
            <AppText style={styles.detailsText}>
            {uistrings.TermsAndConditionsText}
            </AppText>
            <AppText style={styles.detailsText}>
            {uistrings.TermsAndConditionsText}
            </AppText>
            <AppText style={styles.detailsText}>
            {uistrings.TermsAndConditionsText}
            </AppText>
            <AppText style={styles.detailsText}>
            {uistrings.TermsAndConditionsText}
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
        backgroundColor: colors.purple4,
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
        fontSize: 14,
        fontWeight: '500',
        color: colors.white,
        alignSelf: 'auto',
        marginBottom: 25,
        marginLeft: 25,
    },
})

export default TermsAndConditionsScreen;