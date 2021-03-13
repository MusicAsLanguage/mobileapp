import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useContext } from 'react';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparatorComponent from '../components/ListItemSeparator';
import Icon from '../components/Icon';
import colors from '../config/colors';
import AuthContext from '../auth/context';


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
    const { user, setUser} = useContext(AuthContext);

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title='Music Lover'
                    subTitle='shengyfu@microsoft.com'
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
                IconComponent={<Icon name="logout" backgroudColor="#ffe66d" />}
                onPress={() => setUser(null)} 
            />
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

export default AccountScreen;