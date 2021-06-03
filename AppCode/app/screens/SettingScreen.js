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

            <View style={styles.container1}>
                <View style={styles.itemContainer}>
                    <SettingListItem
                        height={80}
                        text={uistrings.AccountDetails}
                        backgroundColor='purple1'
                        onPress={() =>
                            navigation.navigate(routes.ACCOUNT_DETAILS)}
                    />
                </View>
                <View style={styles.container2}>
                    <View style={styles.itemContainer}>
                        <SettingListItem
                            height={80}
                            text={uistrings.Notifications}
                            backgroundColor='purple2'
                            onPress={() =>
                                navigation.navigate(routes.NOTIFICATIONS)}
                    />
                    </View>
                    <View style={styles.container3}>
                        <View style={styles.itemContainer}>
                            <SettingListItem
                                height={80}
                                text={uistrings.Language}
                                backgroundColor='purple3'
                                onPress={() =>
                                    navigation.navigate(routes.LANGUAGE)}
                        />
                        </View>
                        <View style={styles.container4}>
                            <View style={styles.itemContainer}>
                                <SettingListItem
                                    height={80}
                                    text={uistrings.TermsAndConditions}
                                    backgroundColor='purple4'
                                    onPress={() =>
                                        navigation.navigate(routes.TERMS_AND_CONDITIONS)}
                                />
                            </View>  
                            <View style={styles.container5}>
                                <View style={styles.itemContainer}>
                                    <SettingListItem
                                        height={80}
                                        text={uistrings.PrivacyPolicy}
                                        backgroundColor='purple5'
                                        onPress={() =>
                                            navigation.navigate(routes.PRIVACY_POLICY)}
                                        />
                                </View>  
                                <View style={styles.container6}>
                                    <TouchableOpacity onPress={() => logOut()}>                               
                                        <Text style={styles.logoutText}>{uistrings.logOut}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container1: {
        height: 470,
        width: '100%',
        backgroundColor: colors.purple1,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    container2: {
        height: 390,
        width: '100%',
        backgroundColor: colors.purple2,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    container3: {
        height: 310,
        width: '100%',
        backgroundColor: colors.purple3,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    container4: {
        height: 230,
        width: '100%',
        backgroundColor: colors.purple4,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    container5: {
        height: 150,
        width: '100%',
        backgroundColor: colors.purple5,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    container6: {
        height: 70,
        width: '100%',
        backgroundColor: colors.medium,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    itemContainer: {
        width: '100%',
    },
    logoutText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        marginTop: 22,
    },
    screen: {
        backgroundColor: colors.deepskyblue,
    },
    screenTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: colors.white,
        alignSelf: 'center',
        marginTop: 25,
    },
    subtitle: {
        fontSize: 20,
        color: colors.white,
    },
})

export default SettingScreen;