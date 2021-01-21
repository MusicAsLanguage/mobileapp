import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import colors from '../config/colors';
import AppText from './AppText';

function ListItem({ 
    title, 
    subTitle, 
    image, 
    IconComponent, 
    onPress}) {
    return (
        <TouchableHighlight underlayColor={colors.lightgrey} onPress={onPress}>
            <View style={styles.container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
    },
    detailContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginLeft: 10
    },
    title: {
        fontWeight: "600"
    },
    subTitle: {
        color: colors.medium
    },
})

export default ListItem;