import React, { useCallback } from "react";
import { useState, useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Alert,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Audio, Video } from "expo-av";

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import LessonListItem from "../components/LessonListItem";
import colors from "../config/colors";
import routes from "../navigation/routes";
import ListItemSeparator from "../components/ListItemSeparator";
import useAuth from "../auth/useAuth";
import uistrings from "../config/uistrings";
import Icon from "../components/Icon";
import useLesson from "../data/lesson/lessondata";

function HomeScreen({ navigation }) {
  /// <Start> This is the code getting lesson info json file from webservice. The data will be stored in 'programs'.
  const [intro, setIntro] = useState({
    Name: "",
    Description: "",
    IntroVideo: { Url: "" },
  });
  const [introLength, setIntroLength] = useState(0);
  const [lessons, setLessons] = useState([]);
  const player = useRef(null);
  const { logOut } = useAuth();
  const { fetchAllLessonData, fetchStatusData, getLessonProgress } =
    useLesson();

  Audio.setAudioModeAsync({
    playsInSilentModeIOS: true,
  });

  // Add ability to refresh the data
  const [refreshing, setRefreshing] = useState(false);
  const [videoUri, setVideoUri] = useState("");

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => {
      let mounted = true;
      setLessons([]);

      setVideoUri("");
      fetchLesson(mounted);
      setVideoUri(intro.IntroVideo.Url);
      setRefreshing(false);
      mounted = false;
    });
  }, []);

  const fetchLesson = (mounted) => {
    fetchAllLessonData().then((response) => {
      if (mounted) {
        if (response.ok) {
          let allLessons = response.data[0].Phases[0].Lessons;
          if (allLessons.length > 0) {
            // We use the video from the first lesson as the intro video on the
            // Home screen. The actual lessons start with the second one in the
            // list.
            setIntro(allLessons[0]);
            setIntroLength(
              Math.round(allLessons[0].IntroVideo.LengthInSeconds / 60)
            );
            if (allLessons.length > 1) {
              setLessons(allLessons.slice(1));
            }
          }
          setVideoUri(allLessons[0].IntroVideo.Url);
        }
      }
    });
  };

  useEffect(() => {
    let mounted = true;
    fetchLesson(mounted);

    return () => (mounted = false);
  }, []);

  useEffect(() => {
    const blur = navigation.addListener("blur", () => {
      player?.current?.pauseAsync();
    });

    return blur;
  }, [navigation]); // only rerun the effect if navigation changes

  useEffect(() => {
    const focus = navigation.addListener("focus", () => {
      fetchStatusData().then((response) => {
        if (response == null) {
          const reloginAlert = () => {
            Alert.alert(uistrings.Messages, uistrings.RequireRelogin, [
              { text: uistrings.OK, onPress: () => logOut() },
            ]);
          };

          reloginAlert();
        }
      });
    });

    return focus;
  }, [navigation]);

  const renderItem = (item) => {
    let percentage = getLessonProgress(item);

    if (percentage == undefined) percentage = 0;

    let numActivities = item.Activities.length;
    var numActivitiesText;
    if (numActivities == 1) {
      numActivitiesText = uistrings.OneActivity;
    } else {
      numActivitiesText = numActivities.toString() + " " + uistrings.Activities;
    }

    return (
      <LessonListItem
        title={item.Name}
        subTitle={numActivitiesText}
        image={{ uri: item.ImageUrl }}
        progress={percentage} // API to get course progress (0-100)
        onPress={() => navigation.navigate(routes.LESSON_DETAILS, item)}
      />
    );
  };

  const onLoad = async (playbackStatus) => {
    //console.log("Video loaded: ", videoUri);
  };

  const onError = async (err) => {
    console.log("Failed to load video ", videoUri, " with error: ", err);
  };

  return (
    <Screen style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.introContainer}>
          <View style={styles.introVideoContainer}>
            {!videoUri ? (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ActivityIndicator />
              </View>
            ) : (
              <Video
                source={{
                  uri: videoUri, // intro.IntroVideo.Url,
                }}
                ref={player}
                resizeMode="cover"
                useNativeControls
                onLoad={onLoad}
                onError={onError}
                style={styles.introVideo}
              />
            )}
            <View style={styles.titleContainer}>
              <View style={styles.videoNameDescSect}>
                <AppText style={styles.introTitle}>{intro.Name}</AppText>
                <AppText style={styles.introDescription}>
                  {intro.Description}
                </AppText>
              </View>
              <View style={styles.videoDurationSect}>
                <Icon
                  name="volume-medium"
                  backgroudColor="transparent"
                  iconColor={colors.medblue}
                />
                <AppText style={styles.videoLength}>
                  {introLength} {uistrings.Minutes}
                </AppText>
              </View>
            </View>
          </View>
          <ListItemSeparator />
          <View style={styles.lessonContainer}>
            <ScrollView>
              {lessons.map((item, index) => (
                <View key={index}>{renderItem(item)}</View>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  introContainer: {
    flex: 1,
    flexDirection: "column",
  },
  introDescription: {
    color: colors.black,
    fontSize: 14,
    marginBottom: 20,
  },
  introTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: colors.magenta,
    fontWeight: "bold",
    marginBottom: 7,
  },
  introVideo: {
    width: "100%",
    height: "80%",
  },
  introVideoContainer: {
    flex: 3,
    padding: 0,
  },
  lessonContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
  },
  screen: {
    flex: 1,
    padding: 0,
    backgroundColor: colors.white,
  },
  titleContainer: {
    flexDirection: "row",
    height: "20%",
    marginVertical: 8,
  },
  videoNameDescSect: {
    width: "70%",
    flexDirection: "column",
    paddingLeft: 22.5,
    justifyContent: "flex-start",
  },
  videoDurationSect: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 22.5,
    height: "100%",
    alignItems: "baseline",
  },
  videoLength: {
    color: colors.black,
    fontSize: 14,
  },
});

export default HomeScreen;
