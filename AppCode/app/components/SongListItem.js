import React from "react";
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";

const getThumbnailText = (songName) => songName[0]

const convertTime = (timeInSecond) => {
    const min = Math.floor(timeInSecond/60)
    const sec = timeInSecond % 60
    if (sec < 10) {
        return `${min}:0${sec}`;
    }
    return `${min}:${sec}`;
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
    length,
    onPress,
    isPlaying,
    activeListItem,
    repeats})
    {
    return (
        <TouchableHighlight underlayColor={colors.white} onPress={onPress}>
            <>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <View style={[styles.thumbnail, {backgroundColor: 
                    activeListItem ? colors.yellowgreen : colors.lightgrey}]}>
                        <Text style={styles.thumbnailText}>
                            {activeListItem ? renderPlayPauseIcon(isPlaying) : getThumbnailText(songName)}
                        </Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text numberOfLines={1} style={styles.title}>
                            {songName}
                        </Text>
                        <Text style={styles.completions}>
                            Completions: {repeats}
                        </Text>
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.musicLength}>{convertTime(length)}</Text>
                </View>
            </View>
            <ListItemSeparator />
            </>
        </TouchableHighlight>
    )
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    completions: {
        fontSize: 12,
        color: colors.grey,
    },
    container: {
        flexDirection: "row",
        alignSelf: "center",
        width: width - 50,
        paddingTop: 10,
        paddingBottom: 10,
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    rightContainer: {
        flexBasis: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    thumbnail: {
        height: 50,
        flexBasis: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
    },
    thumbnailText: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.black,
    },
    titleContainer: {
        width: width - 100,
        paddingLeft: 10,
        paddingRight: 50,
    },
    title: {
        fontSize: 18,
        color: colors.black,
    },
    musicLength: {
        fontSize: 15,
        color: colors.grey,
    },
    icon: {
        marginTop: 1,
    },
})

export default SongListItem;