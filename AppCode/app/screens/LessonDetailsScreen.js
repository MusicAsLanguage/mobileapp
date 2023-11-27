import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Audio, Video } from "expo-av";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProgressCircle from "react-native-progress-circle";

import AppText from "../components/AppText";
import ActivityListItem from "../components/ActivityListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import routes from "../navigation/routes";
import BackButton from "../components/BackButton";
import Screen from "../components/Screen";
import uistrings from "../config/uistrings";
import useAuth from "../auth/useAuth";
import useLesson from "../data/lesson/lessondata";
import LessonCompletion from "../components/LessonCompletion";
import LoadingIndicator from "../components/LoadingIndicator";
import { getLocalVideoCache } from "../cache/videocache";

function LessonDetailsScreen({ navigation, route }) {
  const lesson = route.params;
  const words = lesson.Name.split(" ")
  const leadingTitle = words.slice(0, 2).join('');
  const lessonName = words.slice(2, words.length).join(' ');

  const { logOut } = useAuth();
  const {
    fetchStatusData,
    getLessonProgress,
    isLessonCompleted,
    getActivityProgress,
    getActivityRepeats,
    onPlayStateChanged,
    playStateChanged,
  } = useLesson();

  const getProgressColor = () => {
    let color;
    if (isLessonCompleted(lesson)) {
      color = colors.yellowgreen;
    } else {
      color = colors.magenta;
    }
    return color;
  };

  const getProgressColorShallow = () => {
    let color;
    if (isLessonCompleted(lesson)) {
      color = colors.yellowgreenLight;
    } else {
      color = colors.magentaLight;
    }
    return color;
  };

  const getNumOfActivitiesText = () => {
    let numActivities = lesson.Activities.length;
    var numActivitiesText;
    if (numActivities == 1) {
      numActivitiesText = uistrings.OneActivity;
    } else {
      numActivitiesText = numActivities.toString() + " " + uistrings.Activities;
    }
    return numActivitiesText;
  }

  const getProgress = () => {
    let percentage = getLessonProgress(lesson);
    if (percentage == undefined) percentage = 0;
    return percentage;
  }

  // Need to pause the video when navigate away to a new screen
  const player = useRef(null);
  const [statusRefreshed, setStatusRefreshed] = useState(false);

  // pull to refresh
  const [refreshing, setRefreshing] = useState(false);
  const [videoUri, setVideoUri] = useState("");
  const [lessonData, setLessonData] = useState(lesson);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => {
      setLessonData([]);
      setVideoUri("");

      wait(500).then(() => {
        setLessonData(lesson);

        getLocalVideoCache(lesson.IntroVideo.Url).then((cachedVideo) => {
          if (cachedVideo == "") {
            setVideoUri(lesson.IntroVideo.Url);
          } else {
            setVideoUri(cachedVideo);
          }
        });
      });

      setRefreshing(false);
    });
  }, []);

  Audio.setAudioModeAsync({
    playsInSilentModeIOS: true,
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const blur = navigation.addListener("blur", () => {
        player?.current?.pauseAsync();
        onPlayStateChanged(false);
      });

      return () => {
        blur();
        mounted = false;
      };
    }
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
          setLessonData(lesson);
          getLocalVideoCache(lesson.IntroVideo.Url).then((cachedVideo) => {
            console.log("[cachedVideo] ", cachedVideo);
            if (cachedVideo == "") {
              setVideoUri(lesson.IntroVideo.Url);
            } else {
              setVideoUri(cachedVideo);
            }
          });
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
    const repeats = getActivityRepeats(lesson._id, item._id);

    //console.log(`activity=${item.Name}, score=${item.Score}`);

    return (
      <ActivityListItem
        id={item._id}
        name={item.Name}
        description={item.Description}
        duration={item.Videos[0].LengthInSeconds}
        score={item.Score}
        thumbnail={{ uri: item.ImageUrl }}
        status={state}
        repeats={repeats}
        practiceMode={item.PracticeMode}
        progressColor={getProgressColorShallow()}
        onPress={() =>
          navigation.navigate(routes.ACTIVITI_DETAILS, {
            lessonId: lesson._id,
            activityId: item._id,
            activityVideo: item.Videos[0],
            activityPlayState: state,
            activityScore: item.Score,
            activityRepeats: repeats,
            practiceMode: item.PracticeMode,
          })
        }
      />
    );
  };

  const onError = async (err) => {
    console.log(
      "Failed to load video ",
      lesson.IntroVideo.Url,
      " with error: ",
      err
    );
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.titleContainer}>
        <BackButton onPress={() => navigation.navigate(routes.HOME)} />
        <AppText style={[styles.titleLeading, {color: getProgressColor()}]}>{leadingTitle}</AppText>
        <AppText style={styles.title}>{lessonName}</AppText>
      </View>
      <ScrollView
        contentContainerStyle={styles.lessonContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.lessonVideoContainer}>
          {!videoUri ? (
            <LoadingIndicator />
          ) : (
            <Video
              source={{ uri: videoUri }}
              ref={player}
              resizeMode="cover"
              useNativeControls
              onLoadStart={() =>
                console.log("load start ", new Date(), " - ", videoUri)
              }
                onLoad={() => console.log("loaded ", new Date(), " ", videoUri)}
              onError={onError}
              style={styles.lessonVideo}
            />
          )}
        </View>

        <View style={styles.lessonDetail}>
          <MaterialCommunityIcons name="ticket" color={getProgressColor()} size={25} /> 
          {getNumOfActivitiesText() && <AppText style={styles.subTitle}>{getNumOfActivitiesText()}</AppText>}
          <View style={styles.progressCircleContainer}>
            <AppText style={styles.subTitle}>{getProgress()}%</AppText>
            <ProgressCircle
              percent={getProgress()}
              radius={18}
              borderWidth={5}
              color={getProgressColor()}
              shadowColor={colors.lightgrey}
              bgColor={colors.white}
            >
            </ProgressCircle>
          </View>
        </View>

        <ListItemSeparator />

        {lessonData.Activities ? (
          <ScrollView contentContainerStyle={styles.activityContainer}>
            {lessonData.Activities.map((item, index) => (
              <View style={styles.activityItem} key={index}>
                {renderItem(item)}
              </View>
            ))}
          </ScrollView>
        ) : (
          <View>
            <ActivityIndicator size={33}></ActivityIndicator>
          </View>
        )}

        {lessonCompletionNotification(lesson)}

      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  activityContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 5,
  },
  activityItem: {
    width: "100%",
  },
  activitySectionTitle: {
    textAlign: "left",
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    padding: 2,
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
    alignItems: "center",
    marginHorizontal: 15,
    marginBot: 10,
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
    height: "40%",
    padding: 15,
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
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  titleLeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 6,
    marginLeft: 10,
  },
});

export default LessonDetailsScreen;
