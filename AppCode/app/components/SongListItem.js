import React from "react";
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";

function SongListItem({
    songName, 
    length,
    onPress})
    {
    return (
        <TouchableHighlight underlayColor={colors.white} onPress={onPress}>
            <>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <View style={styles.thumbnail}>
                        <Text style={styles.thumbnailText}>B</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text numberOfLines={1} style={styles.title}>
                            {songName}
                        </Text>
                        <Text style={styles.singer}>
                            Bernadette Bascom
                        </Text>
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.musicLength}>{length}</Text>
                </View>
            </View>
            <ListItemSeparator />
            </>
        </TouchableHighlight>
    )
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
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
        backgroundColor: colors.yellowgreen,
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
    singer: {
        fontSize: 12,
        color: colors.grey,
    },
    musicLength: {
        fontSize: 15,
        color: colors.grey,
    }
})

export default SongListItem;