import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../components/Screen';
import AppText from "../components/AppText";
import BackButton from "../components/BackButton";
import colors from '../config/colors';
import routes from "../navigation/routes";
import uistrings from '../config/uistrings';
import { ToolBoxButtonLeft, ToolBoxButtonRight } from '../components/ToolBoxButton';


function ToolboxScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.titleContainer}>
                <BackButton onPress={() => navigation.navigate(routes.HOME)} />
                <AppText style={styles.title}>Music Box</AppText>
            </View>
            <ScrollView 
                contentContainerStyle={styles.musicContainer}
            >
                <View style={styles.instruMetroContainer}>
                    <View style={styles.buttonContainer}>
                        <ToolBoxButtonRight
                            onPress={() => navigation.navigate(routes.SONG_LIST, uistrings.SongCategoryInstruction)}
                            color={colors.magenta}
                            text="Instruction"
                            renderIcon={() => (
                                <MaterialCommunityIcons
                                    name="account-music"
                                    size={40}
                                    color={colors.magenta}
                                    style={{ marginLeft: 10, marginRight: 20 }}
                                />
                            )}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <ToolBoxButtonRight
                            onPress={() => navigation.navigate(routes.SONG_LIST, uistrings.SongCategoryMetronome)}
                            color={colors.deepskyblue}
                            text="Metronome"
                            renderIcon={() => (
                                <MaterialCommunityIcons
                                    name="metronome"
                                    size={40}
                                    color={colors.deepskyblue}
                                    style={{ marginLeft: 10, marginRight: 20 }}
                                />
                            )}
                        />
                    </View>
                </View>

                <View style={styles.songContainer}>
                    <View style={styles.buttonContainer}>
                        <ToolBoxButtonLeft
                            onPress={() => navigation.navigate(routes.SONG_LIST, uistrings.SongCategoryBeginner)}
                            color={colors.yellowgreen}
                            text="Beginner"
                            renderIcon={() => (
                                <MaterialCommunityIcons
                                    name="music-note-half-dotted"
                                    size={40}
                                    color={colors.yellowgreen}
                                    style={{ marginLeft: 10, marginRight: 20 }}
                                />
                            )}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <ToolBoxButtonLeft
                            onPress={() => navigation.navigate(routes.SONG_LIST, uistrings.SongCategoryIntermediate)}
                            color={colors.yellowgreen}
                            text="Intermediate"
                            renderIcon={() => (
                                <MaterialCommunityIcons
                                    name="music-note-quarter-dotted"
                                    size={40}
                                    color={colors.yellowgreen}
                                    style={{ marginLeft: 10, marginRight: 20 }}
                                />
                            )}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <ToolBoxButtonLeft
                            onPress={() => navigation.navigate(routes.SONG_LIST, uistrings.SongCategorySuperStar)}
                            color={colors.yellowgreen}
                            text="Super Star"
                            renderIcon={() => (
                                <MaterialCommunityIcons
                                    name="music-note-eighth-dotted"
                                    size={40}
                                    color={colors.yellowgreen}
                                    style={{ marginLeft: 10, marginRight: 20 }}
                                />
                            )}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <ToolBoxButtonLeft
                            onPress={() => navigation.navigate(routes.SONG_LIST, uistrings.SongCategoryLegend)}
                            color={colors.yellowgreen}
                            text="Legend"
                            renderIcon={() => (
                                <MaterialCommunityIcons
                                    name="music-note-sixteenth-dotted"
                                    size={40}
                                    color={colors.yellowgreen}
                                    style={{ marginLeft: 10, marginRight: 20 }}
                                />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 10,
    },
    instruMetroContainer: {
        marginLeft: 50,
    },
    musicContainer: {
        flex: 1,
        marginHorizontal: 25,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    screen: {
        flex: 1,
        padding: 2,
    },
    songContainer: {
        marginRight: 50,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
    },
})

export default ToolboxScreen;