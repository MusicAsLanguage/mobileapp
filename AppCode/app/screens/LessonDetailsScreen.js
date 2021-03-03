import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Video } from 'expo-av'

import AppText from '../components/AppText';
import colors from '../config/colors';

function LessonDetailsScreen({ route }) {
    const lesson = route.params;

    return (
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{lesson.Name}</AppText>
            <AppText style={styles.description}>{lesson.Description}</AppText>
            <Video
              source={lesson.IntroVideo.Url}
              shouldPlay
              resizeMode="cover"
              useNativeControls
              style={styles.video}
            />
            <AppText style={styles.title}>Activities</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    description: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 150
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        marginTop: 10,
    },
    video: {
        width: "100%",
        height: 200,
        marginBottom: 20
    }
})

export default LessonDetailsScreen;