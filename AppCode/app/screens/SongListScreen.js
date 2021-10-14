import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {Audio} from 'expo-av';

import Screen from '../components/Screen';
import AppText from "../components/AppText";
import colors from '../config/colors';
import uistrings from '../config/uistrings';
import SongListItem from "../components/SongListItem";
import getLessons from '../api/lessons';
import { play, pause, resume, playNext } from '../media_control/audioController';

function SongListScreen(props) {

    const [songs, setSongs] = useState([]);
    const [playbackObj, setPlaybackObj] = useState(null);
    const [soundObj, setSoundObj] = useState(null);
    const [currenAudio, setCurrenAudio] = useState({});

    useEffect(() => {
        let mounted = true;
        getLessons()
        .then(response => {
            if(mounted) {
            let songList = response.data[0].Songs
            setSongs(songList)
            }
        })
        return () => mounted = false;
    }, []);

    const handleAudioPress = async (songItem) => {
        // playing audio for the first time.
        if (soundObj === null){
            const playbackObj = new Audio.Sound();
            const status = await play(playbackObj, songItem.Url);
            setCurrenAudio(songItem);
            setPlaybackObj(playbackObj);
            return setSoundObj(status);
        }

        // pause audio
        if (soundObj.isLoaded && soundObj.isPlaying && currenAudio._id === songItem._id){
            const status = await pause(playbackObj);
            return setSoundObj(status);
        }

        // resume audio
        if (soundObj.isLoaded && !soundObj.isPlaying && currenAudio._id === songItem._id){
            const status = await resume(playbackObj);
            return setSoundObj(status);
        }

        // select another audio
        if (soundObj.isLoaded && currenAudio._id !== songItem._id){
            const status = await playNext(playbackObj, songItem.Url);
            setCurrenAudio(songItem);
            return setSoundObj(status);
        }
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