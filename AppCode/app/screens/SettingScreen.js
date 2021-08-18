import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Screen from '../components/Screen';
import SettingListItem from '../components/SettingListItem';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';
import AppText from "../components/AppText";
import routes from "../navigation/routes";
import uistrings from '../config/uistrings';


function SettingScreen({ navigation }) {
    const { user, logOut } = useAuth();

    return (
        <Screen style={styles.screen}>   
            <AppText style={styles.screenTitle}>{uistrings.Settings}</AppText>

            <View style={styles.itemContainer}>

                <SettingListItem
                    height={80}
                    text={uistrings.Profile}
                    backgroundColor='white'
                    onPress={() =>
                        navigation.navigate(routes.PROFILE)}
                />

                <SettingListItem
                    height={80}
                    text={uistrings.TermsAndConditions}
                    backgroundColor='white'
                    onPress={() =>
                        navigation.navigate(routes.TERMS_AND_CONDITIONS)}
                />

                <SettingListItem
                    height={80}
                    text={uistrings.PrivacyPolicy}
                    backgroundColor='white'
                    onPress={() =>
                        navigation.navigate(routes.PRIVACY_POLICY)}
                /> 

                <View style={styles.logoutContainer}>
                    <TouchableOpacity onPress={() => logOut()}>                               
                        <Text style={styles.logoutText}>{uistrings.LogOut}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 470,
        width: '100%',
        backgroundColor: colors.white,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    logoutContainer: {
        height: 70,
        width: '100%',
        backgroundColor: colors.medium,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    logoutText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        marginTop: 22,
    },
    screen: {
        backgroundColor: colors.yellowgreen,
    },
    screenTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: colors.white,
        alignSelf: 'center',
        marginTop: 25,
    },
})

export default SettingScreen;