import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Alert } from "react-native";
import { Video } from "expo-av";

import AppText from "../components/AppText";
import ActivityListItem from "../components/ActivityListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import routes from "../navigation/routes";
import BackButton from "../components/BackButton";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import uistrings from "../config/uistrings";
import useAuth from "../auth/useAuth";
import useLesson from "../data/lesson/lessondata";
import LessonCompletion from "../components/LessonCompletion";

function LessonDetailsScreen({ navigation, route }) {
  const lesson = route.params;
  const { logOut } = useAuth();
  const {
    fetchStatusData,
    isLessonCompleted,
    getActivityProgress,
    onPlayStateChanged,
    playStateChanged,
  } = useLesson();

  // Need to pause the video when navigate away to a new screen
  const player = useRef(null);
  const [statusRefreshed, setStatusRefreshed] = useState(false);

  useEffect(() => {
    const blur = navigation.addListener("blur", () => {
      player?.current?.pauseAsync();
      onPlayStateChanged(false);
    });

    return blur;
  }, [navigation]); // only rerun the effect if navigation changes

  useEffect(() => {
    const focus = navigation.addListener("focus", () => {
      // Indicate the status has not been refreshed
      setStatusRefreshed(false);

      // Workaround to delay GET call so the POST call happens first
      setTimeout(() => {
        fetchStatusData().then((response) => {
          setStatusRefreshed(true);
          if (response == null) {
            const reloginAlert = () => {
              Alert.alert(uistrings.Messages, uistrings.RequireRelogin, [
                { text: uistrings.OK, onPress: () => logOut() },
              ]);
            };

            reloginAlert();
          }
        });
      }, 300);
    });

    return focus;
  });

  const lessonCompletionNotification = (lesson) => {
    //
    // If all the activites are completed, show congrats msg
    //
    // BUG FIX:
    // Check that activity status has been refreshed;
    // This is to handle the case stale data causes congrats msg to show up
    //

    if (statusRefreshed == true) {
      // Only prompt once when there was a state changed
      if (playStateChanged == true && isLessonCompleted(lesson) == true) {
        return <LessonCompletion />;
      }
    }
  };

  const lessonLength = Math.round(lesson.IntroVideo.LengthInSeconds / 60);

  const renderItem = (item) => {
    const state = getActivityProgress(lesson._id, item._id);

    return (
      <ActivityListItem
        id={item._id}
        name={item.Name}
        description={item.Description}
        duration={item.Videos[0].LengthInSeconds}
        thumbnail={{ uri: item.ImageUrl }}
        status={state}
        onPress={() =>
          navigation.navigate(routes.ACTIVITI_DETAILS, {
            lessonId: lesson._id,
            activityId: item._id,
            activityVideo: item.Videos[0],
            activityPlayState: state,
          })
        }
      />
    );
  };

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
        </View>
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
              {lessonLength} {uistrings.Minutes}
            </AppText>
          </View>
        </View>
        <ListItemSeparator />
        <View style={styles.activityContainer}>
          <AppText style={styles.activitySectionTitle}>
            {uistrings.Activities} ({lesson.Activities.length})
          </AppText>
          <SafeAreaView>
            <FlatList
              data={lesson.Activities}
              key={lesson.Activities._id}
              numColumns={2}
              columnWrapperStyle={styles.activityItem}
              keyExtractor={(activities) => activities._id}
              renderItem={({ item }) => renderItem(item)}
            />
          </SafeAreaView>
        </View>
        {lessonCompletionNotification(lesson)}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  activityContainer: {
    flex: 4,
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
    padding: 3,
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
    marginVertical: 2,
  },
  lessonDetail: {
    flexDirection: "row",
    height: "8%",
    marginBottom: 13,
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
    paddingRight: 10,
    height: "100%",
    alignItems: "baseline",
  },
  lessonName: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.magenta,
    fontWeight: "bold",
    marginBottom: 3,
  },
  lessonNameDescSect: {
    width: "70%",
    flexDirection: "column",
    paddingLeft: 10,
    justifyContent: "flex-start",
  },
  lessonVideo: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  lessonVideoContainer: {
    width: "100%",
    height: "35%",
    padding: 10,
  },
});

export default LessonDetailsScreen;
