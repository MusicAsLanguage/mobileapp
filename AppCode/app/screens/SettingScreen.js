import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';
import AppText from "../components/AppText";


function SettingScreen(props) {
    const { user, logOut } = useAuth();

    return (
        <Screen style={styles.screen}>   
            <AppText style={styles.screenTitle}>Settings</AppText>

            <View style={styles.container1}>
                <View style={styles.itemContainer}>
                    <AppText style={styles.subtitle}>Account Details</AppText>
                </View>
                <View style={styles.container2}>
                    <View style={styles.itemContainer}>
                        <AppText style={styles.subtitle}>Notifications</AppText>
                    </View>
                    <View style={styles.container3}>
                        <View style={styles.itemContainer}>
                            <AppText style={styles.subtitle}>Language</AppText>
                        </View>
                        <View style={styles.container4}>
                            <View style={styles.itemContainer}>
                                <AppText style={styles.subtitle}>Term & Conditions</AppText>
                            </View>  
                            <View style={styles.container5}>
                                <View style={styles.itemContainer}>
                                    <AppText style={styles.subtitle}>Privacy Policy</AppText>
                                </View>  
                                <View style={styles.container6}>
                                    <Text style={styles.logoutText} onPress={() => logOut()}>Log Out</Text>
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
        flexDirection: "row",
        marginVertical: 25,
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
        marginTop: 20,
    },
    subtitle: {
        fontSize: 20,
        color: colors.white,
    },
})

export default SettingScreen;