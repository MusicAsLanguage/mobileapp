import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import BackButton from "../components/BackButton";


function ProfileScreen({ navigation }) {
    const { user } = useAuth();

    return (
        <Screen style={styles.screen}>
            <BackButton onPress={() => navigation.navigate(routes.SETTINGS)} />
            <View style={styles.accountInfo}>       
                <Image style={styles.portrait} source={require('../assets/portrait_placeholder.png')} />
                <Text style={styles.title}>{user.name}</Text>
                <Text style={styles.subTitle}>{user.email}</Text>
            </View>  
            <ScrollView>
                {/* TODO: Get actual account details here */}
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    accountInfo: {
        marginVertical: 30,
        alignItems: 'center',
    },
    container: {
        marginTop: 20,
    },
    portrait: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    screen: {
        backgroundColor: colors.white,
    },
    subTitle: {
        fontSize: 15,
        paddingVertical: 10,
        color: colors.grey,
    },
    title: {
        fontSize: 20,
        paddingVertical: 10,
        color: colors.black,
        fontWeight: 'bold',
    },
})

export default ProfileScreen;