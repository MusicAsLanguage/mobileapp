import React from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';

import Screen from '../components/Screen';
import AppText from "../components/AppText";
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import uistrings from '../config/uistrings';

function SongListScreen(props) {
    return (
        <Screen style={styles.screen}>
            <AppText style={styles.screenTitle}>{uistrings.SongList}</AppText>

            <ScrollView style={styles.songListContainer}>

            </ScrollView>
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
    },
    songListContainer: {
        marginTop: 25,
        backgroundColor: colors.white,
    },
})

export default SongListScreen;