import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import colors from '../config/colors';
import uistrings from '../config/uistrings';


function ToolboxScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={uistrings.Music}
                    IconComponent={<Icon name="music-box-multiple" backgroudColor={colors.magenta} />} 
                />
            </View>
            <View style={styles.container}>
                <ListItem
                    title={uistrings.Metronome}
                    IconComponent={<Icon name="metronome" backgroudColor={colors.yellowgreen} />}
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    screen: {
        backgroundColor: colors.white
    }
})

export default ToolboxScreen;