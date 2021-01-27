import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'Lesson1',
        description: 'lesson1 description',
        image: require('../assets/welcome_background.jpg')
    },
    {
        id: 2,
        title: 'Lesson2',
        description: 'lesson2 description',
        image: require('../assets/children-singing.jpg')
    },
]

function LessonsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) =>
                    <Card
                     title={item.title}
                     subTitle={item.description}
                     image={item.image}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor:colors.lightgrey
    }
})

export default LessonsScreen;