import React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from '../config/colors';
import getLessons from '../api/lessons';
import routes from '../navigation/routes';

function LessonsScreen({ navigation }) {
    /// <Start> This is the code getting lesson info json file from webservice. The data will be stored in 'programs'.
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        let mounted = true;
        getLessons()
        .then(response => {
        if(mounted) {
        let lessons2 = response.data[0].Phases[0].Lessons
        setLessons(lessons2)
        }
        })
        return () => mounted = false;
        }, [])

    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={lessons}
                keyExtractor={lesson => lesson._id.toString()}
                renderItem={({item}) =>
                    <Card
                     title={item.Name}
                     subTitle={item.Description}
                     image={{uri: item.ImageUrl}}                     
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
        backgroundColor:colors.white
    }
})

export default LessonsScreen;