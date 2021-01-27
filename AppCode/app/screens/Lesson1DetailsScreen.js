import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';

function Lesson1DetailsScreen(props) {
    return (
        <View style={styles.detailsContainer}>
            <Image style={styles.image} source={require('../assets/welcome_background.jpg')} />
            <AppText style={styles.title}>Lesson 1</AppText>
            <AppText style={styles.description}>lesson description</AppText>
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
    }
})

export default Lesson1DetailsScreen;