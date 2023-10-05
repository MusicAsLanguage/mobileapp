import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from "../config/colors";
import AppText from "../components/AppText";

const getThumbnailText = (songName) => songName[0]

const convertTime = (timeInSecond) => {
    const min = Math.floor(timeInSecond/60)
    const sec = timeInSecond % 60
    if (sec < 10) {
        return `${min}:0${sec}`;
    }
    return `${min}:${sec}`;
}

const getPointColor = (repeats) => {
    if (repeats === 0) {
        return colors.magentaLight
    }
    return colors.yellowgreenLight
}

const renderPlayPauseIcon = isPlaying => {
    if (isPlaying) {
        return <MaterialCommunityIcons
        name="pause"
        color={colors.black}
        size={25}
        style={styles.icon}
        />
    }
    return <MaterialCommunityIcons
        name="play"
        color={colors.black}
        size={25}
        style={styles.icon}
        />
}

function SongListItem({
    songName, 
    score,
    length,
    onPress,
    isPlaying,
    activeListItem,
    repeats})
    {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.leftContainer}>
                <View style={[styles.thumbnail, {backgroundColor: 
                activeListItem ? colors.yellowgreen : colors.lightgrey}]}>
                    <AppText style={styles.thumbnailText}>
                        {activeListItem ? renderPlayPauseIcon(isPlaying) : getThumbnailText(songName)}
                    </AppText>
                </View>
                <View style={styles.titleContainer}>
                    <AppText numberOfLines={1} style={styles.title}>
                        {songName}
                    </AppText>
                    <AppText style={styles.completions}>
                        {convertTime(length)}     Completions: {repeats}
                    </AppText>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <View style={[styles.pointCircle, {backgroundColor: getPointColor(repeats)}]}>
                    <MaterialCommunityIcons name="music-note" color={colors.black} size={18}></MaterialCommunityIcons>
                    <AppText style={styles.point}>+{score}pt</AppText>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    completions: {
        fontSize: 12,
        color: colors.grey,
        marginTop: 3,
    },
    container: {
        flexDirection: "row",
        alignSelf: "center",
        width: width - 20,
        paddingHorizontal: 15,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginTop: 10,
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    point: {
        fontSize: 16,
        marginRight: 3,
    },
    pointCircle: {
        height: 40,
        width: 95,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    rightContainer: {
        flexBasis: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    thumbnail: {
        height: 50,
        flexBasis: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginVertical: 10,
    },
    thumbnailText: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.black,
    },
    titleContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 50,
    },
    title: {
        fontSize: 16,
        color: colors.black,
    },
    icon: {
        marginTop: 1,
    },
})

export default SongListItem;