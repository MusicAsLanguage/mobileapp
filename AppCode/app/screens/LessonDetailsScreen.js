import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Video } from 'expo-av'

import AppText from '../components/AppText';
import colors from '../config/colors';

function LessonDetailsScreen({ route }) {
    const lesson = route.params;

    return (
        <View style={styles.detailsContainer}>
            <Image style={styles.image} source={lesson.image} />
            <AppText style={styles.title}>{lesson.title}</AppText>
            <AppText style={styles.description}>{lesson.description}</AppText>
            <Video
              source={require('../assets/sample_video.mp4')}
              shouldPlay
              resizeMode="cover"
              useNativeControls
              style={styles.video}
            />
        </View>
    );
}

const styles = StyleSheet.create({
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
    description: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    video: {
        width: "100%",
        height: 200
    }
})

export default LessonDetailsScreen;