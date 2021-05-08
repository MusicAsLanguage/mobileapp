import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView, View, FlatList, StyleSheet } from "react-native";
import { Video } from "expo-av";

import AppText from "../components/AppText";
import ActivityListItem from "../components/ActivityListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import routes from "../navigation/routes";
import BackButton from "../components/BackButton";
import Screen from "../components/Screen";
import Icon from "../components/Icon";

function LessonDetailsScreen({ navigation, route }) {
  const lesson = route.params;

  // Need to pause the video when navigate away to a new screen
  const player = useRef(null);
  const [lastState, setLastState] = useState();

  useEffect(() => {
    const blur = navigation.addListener("blur", () => {
      player?.current?.pauseAsync();
    });

    return blur;
  }, [navigation]); // only rerun the effect if navigation changes

  const lessonDuration = Math.round(lesson.IntroVideo.LengthInSeconds / 60);

  return (
    <Screen style={styles.container}>
      <View style={styles.lessonContainer}>
        <BackButton onPress={() => navigation.navigate(routes.HOME)} />
        <View style={styles.lessonVideoContainer}>
          <Video
            source={{ uri: lesson.IntroVideo.Url }}
            ref={player}
            shouldPlay
            resizeMode="cover"
            useNativeControls
            style={styles.lessonVideo}
          />
          <View style={styles.lessonDetail}>
            <View style={styles.lessonNameDescSect}>
              <AppText style={styles.lessonName}>{lesson.Name}</AppText>
              <AppText numberOfLines={1} style={styles.lessonDescription}>
                {lesson.Description}
              </AppText>
            </View>
            <View style={styles.lessonDurationSect}>
              <Icon
                name="volume-medium"
                backgroudColor="transparent"
                iconColor="skyblue"
              />
              <AppText style={styles.lessonDuration}>
                {lessonDuration} minutes
              </AppText>
            </View>
          </View>
        </View>
        <ListItemSeparator />
        <View style={styles.activityContainer}>
          <AppText style={styles.activitySectionTitle}>Activities</AppText>
          <SafeAreaView>
            <FlatList
              data={lesson.Activities}
              key={lesson.Activities._id}
              numColumns={2}
              columnWrapperStyle={styles.activityItem}
              keyExtractor={(activities) => activities._id}
              renderItem={({ item }) => (
                <ActivityListItem
                  id={item._id}
                  name={item.Name}
                  description={item.Description}
                  duration={item.Videos[0].LengthInSeconds}
                  thumbnail={{ uri: item.ImageUrl }}
                  status={"status"} // TODO: need to get actual status here
                  onPress={() =>
                    navigation.navigate(routes.ACTIVITI_DETAILS, item)
                  }
                />
              )}
            />
          </SafeAreaView>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  activityContainer: {
    flex: 5,
    padding: 10,
    justifyContent: "flex-start",
  },
  activityItem: {
    justifyContent: "space-between",
  },
  activitySectionTitle: {
    textAlign: "left",
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "space-evenly",
  },
  lessonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  lessonDescription: {
    color: colors.black,
    fontSize: 14,
    marginTop: 4,
  },
  lessonDetail: {
    flexDirection: "row",
    height: "20%",
    marginVertical: 10,
  },
  lessonDuration: {
    color: colors.black,
    fontSize: 12,
    textAlign: "right",
    alignSelf: "center",
  },
  lessonDurationSect: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 5,
    height: "100%",
    alignItems: "baseline",
  },
  lessonName: {
    fontSize: 24,
    fontWeight: "500",
    color: colors.magenta,
    fontWeight: "bold",
  },
  lessonNameDescSect: {
    width: "70%",
    flexDirection: "column",
    paddingLeft: 5,
    justifyContent: "flex-start",
  },
  lessonVideo: {
    width: "100%",
    height: "80%",
    borderRadius: 10,
  },
  lessonVideoContainer: {
    flex: 4,
    padding: 10,
    marginBottom: 20,
  },
});

export default LessonDetailsScreen;
