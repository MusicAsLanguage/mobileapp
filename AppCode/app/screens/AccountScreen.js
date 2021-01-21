import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparatorComponent from '../components/ListItemSeparator';
import Icon from '../components/Icon';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems =[
    {
        title: "Lessons",
        icon: {
            name: "format-list-bulleted",
            backgroudColor: colors.primary
        }
    },
    {
        title: "Messages",
        icon: {
            name: "email",
            backgroudColor: colors.secondary
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title='Shuo Zhang'
                    subTitle='shuzha@microsoft.com'
                    image={require("../assets/portrait.jpg")}
                >
                </ListItem>
            </View>
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
            <ListItem
            title="Log Out"
            IconComponent={
                <Icon name="logout" backgroudColor="#ffe66d" />
            } />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.lightgrey
    }
})

export default AccountScreen;