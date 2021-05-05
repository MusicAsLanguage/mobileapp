import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';

function LessonListItem({ 
    title, 
    subTitle, 
    image, 
    onPress}) {
    return (
        <TouchableHighlight underlayColor={colors.white} onPress={onPress}>
            <View style={styles.container}>
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <View style={styles.durationContainer}>
                        <MaterialCommunityIcons name="clock-time-three" color={colors.purple} size={15} style={styles.icon} /> 
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 12,
        backgroundColor: colors.white
    },
    detailContainer: {
        marginLeft: 20,
        justifyContent: 'center'
    },
    durationContainer: {
        flexDirection: "row",
        alignContent: "center",
        marginTop: 2,
    },
    icon: {
        marginTop: 1,
    },
    image: {
        width: 70,
        height: 50,
        borderRadius: 5,
        marginLeft: 1,
    },
    subTitle: {
        fontSize: 13,
        color: colors.medium
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
})

export default LessonListItem;