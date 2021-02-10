import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from '../config/colors';
import routes from '../navigation/routes';

const listings = [
    {
        id: 1,
        title: 'Introduction',
        description: 'Introduction of Music of Language',
        image: require('../assets/welcome_background.jpg'),
        video: require('../assets/sample_video.mp4')
    },
    {
        id: 2,
        title: 'Lesson1',
        description: 'lesson1 description',
        image: require('../assets/children-singing.jpg'),
        video: require('../assets/sample_video.mp4')
    },
]

function LessonsScreen({ navigation }) {
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
                     onPress={() => navigation.navigate(routes.LESSON_DETAILS, item)}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor:colors.light
    }
})

export default LessonsScreen;