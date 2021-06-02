import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';
import uistrings from '../config/uistrings'


function AccountScreen(props) {
    const { user, logOut } = useAuth();

    return (
        <Screen style={styles.screen}>
            <View style={styles.accountInfo}>       
                <Image style={styles.portrait} source={require('../assets/portrait.jpg')} />
                <Text style={styles.title}>{user.name}</Text>
                <Text style={styles.subTitle}>{user.email}</Text>
            </View>   

            <View style={styles.container}>
                <ListItem
                    title={uistrings.Lessons}
                    IconComponent={<Icon name="format-list-bulleted" backgroudColor={colors.magenta} />}
                    onPress={() => logOut()} 
                />
            </View>
            <View style={styles.container}>
                <ListItem
                    title={uistrings.Messages}
                    IconComponent={<Icon name="email" backgroudColor={colors.yellowgreen} />}
                    onPress={() => logOut()} 
                />
            </View>
            <View style={styles.container}>
                <ListItem
                    title={uistrings.LogOut}
                    IconComponent={<Icon name="logout" backgroudColor={colors.deepskyblue} />}
                    onPress={() => logOut()} 
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    accountInfo: {
        marginVertical: 30,
        alignItems: 'center',
    },
    container: {
        marginVertical: 10,
    },
    portrait: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    screen: {
        backgroundColor: colors.white
    },
    title: {
        fontSize: 20,
        paddingVertical: 10,
        color: colors.black,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 15,
        paddingVertical: 10,
        color: colors.grey,
    }
})

export default AccountScreen;