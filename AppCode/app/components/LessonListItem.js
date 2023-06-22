import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import ProgressCircle from "react-native-progress-circle";

import colors from "../config/colors";
import AppText from "./AppText";

function LessonListItem({ title, subTitle, image, progress, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.white} onPress={onPress}>
      <View style={styles.container}>
        <View style={{ flex: 2 }}>
          {image && <Image style={styles.image} source={image} />}
        </View>
        <View style={styles.detailContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <View style={styles.durationContainer}>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
        <View style={styles.progressCircleContainer}>
          <ProgressCircle
            percent={progress}
            radius={22}
            borderWidth={5}
            color={colors.deepskyblue}
            shadowColor={colors.lightgrey}
          >
            <Text style={{ fontSize: 10 }}>{progress}%</Text>
          </ProgressCircle>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 12,
    backgroundColor: colors.white,
  },
  detailContainer: {
    marginLeft: 20,
    flex: 6,
    justifyContent: "center",
  },
  durationContainer: {
    flexDirection: "row",
    alignContent: "center",
    marginTop: 2,
  },
  icon: {
    marginTop: 1,
  },
  image: {
    width: 70,
    height: 50,
    borderRadius: 5,
    marginLeft: 5,
  },
  progressCircleContainer: {
    flex: 1,
    right: 15,
    //marginTop: 7,
  },
  subTitle: {
    fontSize: 13,
    color: colors.medium,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LessonListItem;
