import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparatorComponent from '../components/ListItemSeparator';
import Icon from '../components/Icon';
import colors from '../config/colors';

const menuItems =[
    {
        title: "Musics",
        icon: {
            name: "music-box-multiple",
            backgroudColor: colors.primary
        }
    },
    {
        title: "Metronome",
        icon: {
            name: "metronome",
            backgroudColor: colors.secondary
        }
    }
]

function ToolboxScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparatorComponent}
                    renderItem={({ item }) => 
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon 
                                    name={item.icon.name} 
                                    backgroudColor={item.icon.backgroudColor} />
                            }
                        />
                    }
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light
    }
})

export default ToolboxScreen;