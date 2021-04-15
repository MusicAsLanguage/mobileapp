import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparatorComponent from '../components/ListItemSeparator';
import Icon from '../components/Icon';
import colors from '../config/colors';


function ToolboxScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Musics"
                    IconComponent={<Icon name="music-box-multiple" backgroudColor={colors.magenta} />}
                    onPress={() => logOut()} 
                />
            </View>
            <View style={styles.container}>
                <ListItem
                    title="Metronome"
                    IconComponent={<Icon name="metronome" backgroudColor={colors.yellowgreen} />}
                    onPress={() => logOut()} 
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