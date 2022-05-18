import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import colors from '../config/colors';
import routes from "../navigation/routes";
import uistrings from '../config/uistrings';
import GradientButton from '../components/GradientButton';


function ToolboxScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
            
            <View style={styles.musicContainer}>
                <View style={styles.buttonContainer}>
                    <GradientButton
                        onPress={() => navigation.navigate(routes.SONG_LIST, uistrings.SongCategoryInstruction)}
                        colors={[colors.yellowgreen, colors.yellowgreen, colors.white]}
                        text="Instruction"
                        renderIcon={() => (
                            <FontAwesome5
                                name="paper-plane"
                                size={50}
                                color={colors.white}
                                style={{ marginLeft: 10, marginRight: 20 }}
                            />
                        )}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <GradientButton
                        onPress={() => navigation.navigate(routes.SONG_LIST, uistrings.SongCategoryBeginner)}
                        colors={[colors.deepskyblue, colors.deepskyblue, colors.white]}
                        text="Beginner"
                        renderIcon={() => (
                            <FontAwesome5
                                name="paper-plane"
                                size={50}
                                color={colors.white}
                                style={{ marginLeft: 10, marginRight: 20 }}
                            />
                        )}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <GradientButton
                        onPress={() => navigation.navigate(routes.SONG_LIST, uistrings.SongCategoryIntermediate)}
                        colors={[colors.magenta, colors.magenta, colors.white]}
                        text="Intermediate"
                        renderIcon={() => (
                            <Ionicons
                                name="md-airplane-outline"
                                size={50}
                                color={colors.white}
                                style={{ marginLeft: 10, marginRight: 20 }}
                            />
                        )}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <GradientButton
                        onPress={() => navigation.navigate(routes.SONG_LIST, uistrings.SongCategorySuperStar)}
                        colors={[colors.yellowgreen, colors.yellowgreen, colors.white]}
                        text="Super Star"
                        renderIcon={() => (
                            <Ionicons
                                name="rocket-outline"
                                size={50}
                                color={colors.white}
                                style={{ marginLeft: 10, marginRight: 20 }}
                            />
                        )}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <GradientButton
                        onPress={() => navigation.navigate(routes.SONG_LIST, uistrings.SongCategoryLegend)}
                        colors={[colors.deepskyblue, colors.deepskyblue, colors.white]}
                        text="Legend"
                        renderIcon={() => (
                            <MaterialCommunityIcons
                                name="medal-outline"
                                size={50}
                                color={colors.white}
                                style={{ marginLeft: 10, marginRight: 20 }}
                            />
                        )}
                    />
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 15,
    },
    musicContainer: {
        flex: 1,
        marginTop: 50,
        marginHorizontal: 50,
        justifyContent: 'center',
    },
    screen: {
        backgroundColor: colors.white
    }
})

export default ToolboxScreen;