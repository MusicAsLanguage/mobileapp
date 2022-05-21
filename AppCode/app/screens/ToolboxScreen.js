import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from "../navigation/routes";
import uistrings from '../config/uistrings';
import { GradientButtonLeft, GradientButtonRight } from '../components/GradientButton';


function ToolboxScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
            
            <View style={styles.musicContainer}>
                <View style={styles.instruMetroContainer}>
                    <View style={styles.buttonContainer}>
                        <GradientButtonRight
                            onPress={() => navigation.navigate(routes.SONG_LIST, uistrings.SongCategoryInstruction)}
                            colors={[colors.white, colors.magenta, colors.magenta]}
                            text="Instruction"
                            renderIcon={() => (
                                <MaterialCommunityIcons
                                    name="account-music"
                                    size={40}
                                    color={colors.white}
                                    style={{ marginLeft: 10, marginRight: 20 }}
                                />
                            )}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <GradientButtonRight
                            onPress={() => navigation.navigate(routes.SONG_LIST, uistrings.SongCategoryMetronome)}
                            colors={[colors.white, colors.deepskyblue, colors.deepskyblue]}
                            text="Metronome"
                            renderIcon={() => (
                                <MaterialCommunityIcons
                                    name="metronome"
                                    size={40}
                                    color={colors.white}
                                    style={{ marginLeft: 10, marginRight: 20 }}
                                />
                            )}
                        />
                    </View>
                </View>

                <View style={styles.songContainer}>
                    <View style={styles.buttonContainer}>
                        <GradientButtonLeft
                            onPress={() => navigation.navigate(routes.SONG_LIST, uistrings.SongCategoryBeginner)}
                            colors={[colors.yellowgreen, colors.yellowgreen, colors.white]}
                            text="Beginner"
                            renderIcon={() => (
                                <MaterialCommunityIcons
                                    name="music-note-half-dotted"
                                    size={40}
                                    color={colors.white}
                                    style={{ marginLeft: 10, marginRight: 20 }}
                                />
                            )}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <GradientButtonLeft
                            onPress={() => navigation.navigate(routes.SONG_LIST, uistrings.SongCategoryIntermediate)}
                            colors={[colors.yellowgreen, colors.yellowgreen, colors.white]}
                            text="Intermediate"
                            renderIcon={() => (
                                <MaterialCommunityIcons
                                    name="music-note-quarter-dotted"
                                    size={40}
                                    color={colors.white}
                                    style={{ marginLeft: 10, marginRight: 20 }}
                                />
                            )}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <GradientButtonLeft
                            onPress={() => navigation.navigate(routes.SONG_LIST, uistrings.SongCategorySuperStar)}
                            colors={[colors.yellowgreen, colors.yellowgreen, colors.white]}
                            text="Super Star"
                            renderIcon={() => (
                                <MaterialCommunityIcons
                                    name="music-note-eighth-dotted"
                                    size={40}
                                    color={colors.white}
                                    style={{ marginLeft: 10, marginRight: 20 }}
                                />
                            )}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <GradientButtonLeft
                            onPress={() => navigation.navigate(routes.SONG_LIST, uistrings.SongCategoryLegend)}
                            colors={[colors.yellowgreen, colors.yellowgreen, colors.white]}
                            text="Legend"
                            renderIcon={() => (
                                <MaterialCommunityIcons
                                    name="music-note-sixteenth-dotted"
                                    size={40}
                                    color={colors.white}
                                    style={{ marginLeft: 10, marginRight: 20 }}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 10,
    },
    instruMetroContainer: {
        marginLeft: 50,
        marginBottom: 22,
    },
    musicContainer: {
        flex: 1,
        marginVertical: 30,
        marginHorizontal: 25,
        justifyContent: 'center',
    },
    screen: {
        backgroundColor: colors.white
    },
    songContainer: {
        marginRight: 50,
        marginTop: 22,
    }
})

export default ToolboxScreen;