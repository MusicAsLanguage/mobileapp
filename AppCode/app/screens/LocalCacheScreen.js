import React, { useEffect, useState } from "react"
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppText from "../components/AppText";
import BackButton from "../components/BackButton";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import uistrings from "../config/uistrings";
import AppButton from "../components/AppButton";
import { clearVideoCaches, deleteVideoCache, getLocalVideoCaches } from "../cache/videocache";
import Icon from "../components/Icon";

function LocalCacheScreen({ navigation }) {

    const [cachedVideos, setCachedVideos] = useState([])

    useEffect(() => {
        const focus = navigation.addListener("focus", () => {
            showLocalVideoCaches();
        })

        return focus;
    }, [navigation])

    const clearCache = () => {
        console.log("Clearing cache");
        clearVideoCaches();
        setCachedVideos([]);
    };

    const ConfirmAndClearCache = () => {
        Alert.alert(
            uistrings.ClearLocalCacheConfirmationTitle.toUpperCase(),
            uistrings.ClearLocalCacheConfirmationMsg,
            [
                { text: uistrings.OK, onPress: () => clearCache() },
                { text: uistrings.Cancel.toUpperCase(), onPress: () => { } },
            ],
            { cancelable: true }
        )
    }

    const deleteItem = (filename) => {
        console.log("delete item ", filename)
        deleteVideoCache(filename);
        showLocalVideoCaches();
    }

    const renderItem = (item) => {

        return (
            <View style={styles.list}>
                <TouchableOpacity style={{ paddingRight: 10, }} onPress={() => deleteItem(item)}>
                    <Icon name="trash-can-outline" backgroudColor={colors.medium}></Icon>
                </TouchableOpacity>
                <Text style={styles.listText} numberOfLines={1}>{item}</Text>
            </View>
        )
    }

    const showLocalVideoCaches = () => {

        getLocalVideoCaches().then((results) => {

            setCachedVideos(results);
            //console.log(results)
        })
    }

    return (
        <Screen style={styles.screen}>
            <BackButton onPress={() => navigation.navigate(routes.SETTINGS)} />
            <AppText style={styles.screenTitle}>{uistrings.LocalCache}</AppText>
            <View style={styles.container}>
                <View style={styles.header}>
                    <AppText style={styles.headerText}>Number of download(s): {cachedVideos.length}</AppText>
                </View>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {cachedVideos.map((video, index) =>
                        (<View style={styles.listContainer} key={index}>{renderItem(video.name)}</View>)
                    )}
                </ScrollView >
                < AppButton onPress={ConfirmAndClearCache} title={uistrings.ClearLocalCache}></AppButton>
            </View>
        </Screen >
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.yellowgreen,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 10,
        paddingBottom: 20,
    },
    contentContainer: {
        backgroundColor: colors.transparent,
        top: 10,
        bottom: 30,
        justifyContent: "space-between",
    },
    screenTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: colors.dark,
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 25,
    },
    header: {
        //backgroundColor: colors.medblue,
        alignItems: "center",
    },
    headerText: {
        fontSize: 20,
        color: colors.medblue,
    },
    list: {
        flexDirection: "row",
        alignItems: "center",
    },
    listContainer: {
        flex: 1,
        padding: 10,
    },
    listText: {
        fontSize: 16,
        color: colors.disabledButton,
        width: "90%",
    },
    button: {
        height: 70,
        width: '50%',
        backgroundColor: colors.white,
        alignItems: 'el',
    },
    buttonText: {
        color: colors.buttonText,
    },
})

export default LocalCacheScreen;