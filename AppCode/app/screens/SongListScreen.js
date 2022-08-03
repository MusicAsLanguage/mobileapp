import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import {Audio} from 'expo-av';

import Screen from '../components/Screen';
import AppText from "../components/AppText";
import colors from '../config/colors';
import uistrings from '../config/uistrings';
import BackButton from "../components/BackButton";
import SongListItem from "../components/SongListItem";
import getLessons from '../api/lessons';
import routes from "../navigation/routes";
import useAuth from '../auth/useAuth';
import ScoreNotification from "../components/ScoreNotification";
import useRewardConfig from "../data/config/reward";
import useSong from "../data/song/songdata";
import { play, pause, resume, playNext } from '../media_control/audioController';

function SongListScreen({ navigation, route }) {
    const songCategory = route.params;

    const { fetchStatusData, getSongRepeats, updateStatusData } = useSong();
    const { logOut } = useAuth();

    const [songs, setSongs] = useState([]);
    const [playbackObj, setPlaybackObj] = useState(null);
    const [soundObj, setSoundObj] = useState(null);
    const [currenAudio, setCurrenAudio] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentAudioIndex, setCurrentAudioIndex] = useState(null);
    const [repeatPoint, setRepeatPoint] = useState(0);
    const [score, setScore] = useState(0);
    const [playCount, setPlayCount] = useState(0);
    const [songFullScore, setSongFullScore] = useState(0);
    const [songJustFinish, setSongJustFinish] = useState(false);

    const { getSongRepeatPoint } = useRewardConfig();

    Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
    });

    useEffect(() => {
        let mounted = true;

        getLessons()
            .then(response => {
                if (mounted) {
                    let songList = response.data[0].Songs
                    let filteredSongList = songList.filter((song) => song.Category === songCategory)
                    setSongs(filteredSongList)
                }
            });

        getSongRepeatPoint()
            .then(response => {
                if (mounted) {
                    if (response) {
                        const repeatPoint = response;
                        setRepeatPoint(repeatPoint);
                    }
                }
            });

        setTimeout(() => {
            fetchStatusData()
                .then(response => {
                    if (response == null) {
                        const reloginAlert = () => {
                            Alert.alert(uistrings.Messages, uistrings.RequireRelogin, [
                                { text: uistrings.OK, onPress: () => logOut() },
                            ]);
                        };
                    } else {
                        console.log("Song status data refreshed.")
                    }
                });
        }, 300);

        return () => mounted = false;
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', async () => {
            if (soundObj !== null && soundObj.isLoaded && isPlaying) {
                const status = await pause(playbackObj);
                setIsPlaying(false);
                setSoundObj(status);
            }
        });

        return unsubscribe;
    }, [navigation, soundObj, playbackObj, isPlaying]);

    useEffect(() => {
        // update current playing song's playcount and full score.
        if (currenAudio.Name !== null){
            setSongFullScore(currenAudio.Score);
            const previousPlayCount = getSongRepeats(currenAudio.Name);
            setPlayCount(previousPlayCount);
        }
    }, [currenAudio]);

    useEffect(() => {
        // everytime the playCount change, we upload the song play data to server, and then fetch new status data
        if (currenAudio.Name !== null) {
            const data = {
                SongName: currenAudio.Name,
                Category: songCategory,
                CompletionStatus: 10,
                Repeats: playCount,
            };
            console.log(data);
            updateStatusData(data).then((response) => {
                if (response == null) {
                    console.warn(response);
                }
            });

            setTimeout(() => {
                fetchStatusData()
                    .then(response => {
                        if (response == null) {
                            const reloginAlert = () => {
                                Alert.alert(uistrings.Messages, uistrings.RequireRelogin, [
                                    { text: uistrings.OK, onPress: () => logOut() },
                                ]);
                            };
                        } else {
                            console.log("Song status data refreshed.")
                        }
                    });
            }, 300);
        }
    }, [playCount]);

    useEffect(() => {
        // If song just finish, update score and playcount, then set songJustFinish back to false.
        if (songJustFinish === true) {
            if (playCount === 0){
                setScore(songFullScore);
            } else {
                setScore(songFullScore * repeatPoint);
            }
            setPlayCount(playCount + 1);
            setSongJustFinish(false);
        }
    }, [songJustFinish]);

    const onPlaybackStatusUpdate = playbackStatus => {
        if (playbackStatus.didJustFinish) {
            setIsPlaying(false);
            setSoundObj(null);
            return setSongJustFinish(true);
        }
    };

    const handleAudioPress = async (songItem) => {
        // playing audio for the first time.
        if (soundObj === null){
            const playbackObj = new Audio.Sound();
            const status = await play(playbackObj, songItem.Url);
            setCurrenAudio(songItem);
            setPlaybackObj(playbackObj);
            setIsPlaying(true);
            setCurrentAudioIndex(songItem._id);
            setSoundObj(status);
            return playbackObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        }

        // pause audio
        if (soundObj.isLoaded && soundObj.isPlaying && currenAudio._id === songItem._id){
            const status = await pause(playbackObj);
            setIsPlaying(false);
            return setSoundObj(status);
        }

        // resume audio
        if (soundObj.isLoaded && !soundObj.isPlaying && currenAudio._id === songItem._id){
            const status = await resume(playbackObj);
            setIsPlaying(true);
            setSoundObj(status);
            return playbackObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        }

        // select another audio
        if (soundObj.isLoaded && currenAudio._id !== songItem._id){
            const status = await playNext(playbackObj, songItem.Url);
            setCurrenAudio(songItem);
            setIsPlaying(true);
            setCurrentAudioIndex(songItem._id);
            setSoundObj(status);
            return playbackObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        }
    };

    const renderItem = (item) => {
        const repeats = getSongRepeats(item.Name);

        return (
          <SongListItem
            songName={item.Name}
            isPlaying={isPlaying}
            activeListItem={item._id === currentAudioIndex}
            length={item.LengthInSeconds}
            repeats={repeats}
            onPress={() => handleAudioPress(item)}
          />
        );
    };

    return (
        <Screen style={styles.screen}>
            <View style={styles.titleContainer}>
                <BackButton onPress={() => navigation.navigate(routes.TOOLBOX)} />
                <AppText style={styles.screenTitle}>{uistrings.SongList}</AppText>
            </View>

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
        marginBottom: 10,
    },
    songListContainer: {
        flex: 1,
        justifyContent: "flex-start",
        marginTop: 10,
        backgroundColor: colors.white,
    },
    titleContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
})

export default SongListScreen;