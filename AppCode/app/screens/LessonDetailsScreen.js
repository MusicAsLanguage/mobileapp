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
import { getActivityStatus } from "../api/status";


function LessonDetailsScreen({ navigation, route }) {
  const lesson = route.params;
  const { logOut } = useAuth();

  // Need to pause the video when navigate away to a new screen
  const player = useRef(null);
  const [activityStatus, setActivityStatus] = useState();

  useEffect(() => {
    const blur = navigation.addListener("blur", () => {
      player?.current?.pauseAsync();
    });

    return blur;
  }, [navigation]); // only rerun the effect if navigation changes

  useEffect(() => {
    const focus = navigation.addListener("focus", () => {
      // Workaround to delay GET call so the POST call happens first
      setTimeout(() => {
        getActivityStatus().then((response) => {
          if (response == null) {
            const reloginAlert = () => {
              Alert.alert(uistrings.Messages, uistrings.RequireRelogin, [
                { text: "OK", onPress: () => logOut() }
              ])
            };

            reloginAlert();
          } else {
            const data = response.data;
            setActivityStatus(data);
          }
        });
      }, 100);
    });

    return focus;
  });

  const getPlayState = (lessonId, activityId) => {
    try {
      let completionStatus = 0;

      if (activityStatus == undefined) return;

      const activity = activityStatus.filter(
        (item) => item.ActivityId == activityId && item.LessonId == lessonId
      );

      completionStatus =
        activity[0]?.CompletionStatus == null
          ? 0
          : activity[0].CompletionStatus;

      return completionStatus;
    } catch (error) {
      console.log(error);
    }
  };

  const lessonLength = Math.round(lesson.IntroVideo.LengthInSeconds / 60);

  const renderItem = (item) => {
    const state = getPlayState(lesson._id, item._id);

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
              <AppText style={styles.lessonLength}>
                {lessonLength} {uistrings.Minutes}
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
              renderItem={({ item }) => renderItem(item)}
            />
          </SafeAreaView>
        </View>
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
    padding: 6,
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
    marginTop: 2,
  },
  lessonDetail: {
    flexDirection: "row",
    height: "20%",
    marginVertical: 8,
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
    height: "82%",
    borderRadius: 10,
  },
  lessonVideoContainer: {
    flex: 3,
    padding: 10,
    marginBottom: 15,
  },
});

export default LessonDetailsScreen;
