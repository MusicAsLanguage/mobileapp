import React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from '../config/colors';
import getLessons from '../api/lessons';
import routes from '../navigation/routes';

const lessons = [
    {
        ID: 1,
        Name: 'Introduction',
        Description: 'Introduction of Music of Language',
        ImageUrl: require('../assets/welcome_background.jpg'),
        IntroVideo: {
            ID: 1,
            Name: "Stats about NonVerbal",
            Description: "Stats about NonVerbal disability among childrens.",
            Url: require('../assets/sample_video.mp4'),
            LengthInSeconds: 30
        },
    },
    {
        ID: 2,
        Name: 'Lesson1',
        Description: 'lesson1 description',
        ImageUrl: require('../assets/children-singing.jpg'),
        IntroVideo: {
            ID: 1,
            Name: "Stats about NonVerbal",
            Description: "Stats about NonVerbal disability among childrens.",
            Url: require('../assets/sample_video.mp4'),
            LengthInSeconds: 30
        },
    },
    {
        ID: 3,
        Name: 'Lesson2',
        Description: 'lesson2 description',
        ImageUrl: require('../assets/children-singing.jpg'),
        IntroVideo: {
            ID: 1,
            Name: "Stats about NonVerbal",
            Description: "Stats about NonVerbal disability among childrens.",
            Url: require('../assets/sample_video.mp4'),
            LengthInSeconds: 30
        },
    },
]

function LessonsScreen({ navigation }) {
    /// <Start> This is the code getting lesson info json file from webservice. The data will be stored in 'programs'.
    const [programs, setLessons] = useState([]);

    useEffect(() => {
        loadLessons();
    },[]);

    const loadLessons = async() => {
        const response = await getLessons();
        setLessons(response.data);
        console.log("Loaded json data:", response.data);
        if (!response.ok){
            console.log(response.problem);
        }
    };
    /// <End> To replace with downloaded json file, uncommon below line 'data={programs[0].Phases[0].Lessons}', instead of 'data={lessons}'.

    return (
        <Screen style={styles.screen}>
            <FlatList 
                //data={programs[0].Phases[0].Lessons}
                data={lessons}
                keyExtractor={lesson => lesson.ID.toString()}
                renderItem={({item}) =>
                    <Card
                     title={item.Name}
                     subTitle={item.Description}
                     image={item.ImageUrl}
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