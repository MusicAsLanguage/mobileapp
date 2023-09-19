import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from "../config/colors";
import AppText from "./AppText";
import ListItemSeparator from "../components/ListItemSeparator";

function LessonListItem({ title, subTitle, image, progress, onPress }) {
  const words = title.split(" ")
  const leadingTitle = words.slice(0, 2).join('');
  const lessonName = words.slice(2, words.length).join(' ');

  const getProgressColor = () => {
    let color;
    if (progress === 0) {
      color = colors.grey;
    } else if (progress === 100) {
      color = colors.yellowgreen;
    } else {
      color = colors.magenta;
    }
    return color;
  };
  
  return (
    <TouchableOpacity style={[styles.outline, {shadowColor: getProgressColor()}]} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.lessonTitle}>
          <AppText style={[styles.titleLeading, {color: getProgressColor()}]}>{leadingTitle}</AppText>
          <AppText style={styles.title}>{lessonName}</AppText>
        </View>
        <View style={styles.lessonPicture}>
          {image && <Image style={styles.image} source={image} />}
        </View>
        <ListItemSeparator />
        <View style={styles.detailContainer}>
        <MaterialCommunityIcons name="ticket" color={getProgressColor()} size={25} /> 
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          <View style={styles.progressCircleContainer}>
            <AppText style={styles.subTitle}>{progress}%</AppText>
            <ProgressCircle
              percent={progress}
              radius={18}
              borderWidth={5}
              color={getProgressColor()}
              shadowColor={colors.lightgrey}
              bgColor={colors.white}
            >
            </ProgressCircle>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  icon: {
    marginTop: 1,
  },
  image: {
    flex: 1,
    aspectRatio: 3/2,
    borderRadius: 20,
  },
  lessonPicture: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    aspectRatio: 3/2,
    marginTop: 10,
    marginBottom: 20,
  },
  lessonTitle: {
    flexDirection: "row",
    marginVertical: 5,
  },
  outline: {
    backgroundColor: colors.white,
    flexDirection: "column",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 5,
    borderRadius: 20,
    shadowOffset: { height: 5, width: 1 }, // IOS
    //shadowColor: colors.yellowgreen, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5, // Android
  },
  progressCircleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  subTitle: {
    fontSize: 16,
    color: colors.black,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  titleLeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 7,
  }
});

export default LessonListItem;
