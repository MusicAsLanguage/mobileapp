import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {Audio} from 'expo-av';

import Screen from '../components/Screen';
import AppText from "../components/AppText";
import colors from '../config/colors';
import uistrings from '../config/uistrings';
import SongListItem from "../components/SongListItem";

const songs = [
    {
        "_id": 1,
        "Name": "Be My Baby",
        "Description": "Be My Baby",
        "Url": "https://malstore.blob.core.windows.net/assets/songs/Be_My_Baby05142021.mp3",
        "LengthInSeconds": 162
    },
    {
        "_id": 2,
        "Name": "Bye Bye Bye",
        "Description": "Bye Bye Bye",
        "Url": "https://malstore.blob.core.windows.net/assets/songs/Bye_Bye_ByeRev_1.mp3",
        "LengthInSeconds": 201
    },
    {
        "_id": 3,
        "Name": "Lovely Day",
        "Description": "Lovely Day",
        "Url": "https://malstore.blob.core.windows.net/assets/songs/Lovely_Day.mp3",
        "LengthInSeconds": 239
    },
    {
        "_id": 4,
        "Name": "Man In The Mirror",
        "Description": "Man In The Mirror",
        "Url": "https://malstore.blob.core.windows.net/assets/songs/Man_In_The_Mirror05132021.mp3",
        "LengthInSeconds": 238
    },
    {
        "_id": 5,
        "Name": "Me Too",
        "Description": "Me Too",
        "Url": "https://malstore.blob.core.windows.net/assets/songs/Me_Too.mp3",
        "LengthInSeconds": 180
    },
    {
        "_id": 6,
        "Name": "Never Going To Give You Up",
        "Description": "Never Going To Give You Up",
        "Url": "https://malstore.blob.core.windows.net/assets/songs/Never_Going_To_Give_You_Up_vocalup.mp3",
        "LengthInSeconds": 218
    },
    {
        "_id": 7,
        "Name": "God Must Have Spent",
        "Description": "God Must Have Spent",
        "Url": "https://malstore.blob.core.windows.net/assets/songs/NSYNC_God_Must_Have_Spent.mp3",
        "LengthInSeconds": 241
    },
    {
        "_id": 8,
        "Name": "The Way You Make Me Feel",
        "Description": "The Way You Make Me Feel",
        "Url": "https://malstore.blob.core.windows.net/assets/songs/The_Way_You_Make_Me_Feel.mp3",
        "LengthInSeconds": 295
    }
]

function SongListScreen(props) {

    const handleAudioPress =(songItem) => {
        const playbackObj = new Audio.Sound();
        playbackObj.loadAsync({uri: songItem.Url}, {shouldPlay:true})
    };

    const renderItem = (item) => {
        return (
          <SongListItem
            songName={item.Name}
            length={item.LengthInSeconds}
            onPress={() => handleAudioPress(item)}
          />
        );
    };

    return (
        <Screen style={styles.screen}>
            <AppText style={styles.screenTitle}>{uistrings.SongList}</AppText>

            <View style={styles.songListContainer}>
                <FlatList
                data={songs}
                keyExtractor={(song) => song._id.toString()}
                renderItem={({ item }) => renderItem(item)}
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.yellowgreen,
    },
    screenTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: colors.white,
        alignSelf: 'center',
        marginTop: 25,
    },
    songListContainer: {
        flex: 1,
        justifyContent: "flex-start",
        marginTop: 35,
        backgroundColor: colors.white,
    },
})

export default SongListScreen;