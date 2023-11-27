import React, { useCallback } from "react";
import { useState, useEffect, useRef } from "react";
import {
  Alert,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Audio } from "expo-av";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import LessonListItem from "../components/LessonListItem";
import colors from "../config/colors";
import routes from "../navigation/routes";
import ListItemSeparator from "../components/ListItemSeparator";
import useAuth from "../auth/useAuth";
import uistrings from "../config/uistrings";
import useLesson from "../data/lesson/lessondata";
import { getUserScore } from "../api/score";
import { getLocalVideoCache } from "../cache/videocache";

function HomeScreen({ navigation }) {
  // get user infomation and scores
  const { user } = useAuth();
  const [score, setScore] = useState(0);
  const [trophies, setTrophies] = useState();
  const { getTrophies } = useRewardConfig();
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
      getLocalVideoCache(intro.IntroVideo.Url).then((cachedVideo) => {
        if (cachedVideo == "") {
          setVideoUri(intro.IntroVideo.Url);
        } else {
          setVideoUri(cachedVideo);
        }
      })
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

          getLocalVideoCache(allLessons[0].IntroVideo.Url).then((cachedVideo) => {
            if (cachedVideo == "") {
              setVideoUri(allLessons[0].IntroVideo.Url);
            } else {
              setVideoUri(cachedVideo);
            }
          })
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

  // TRICK, REMOVE IN THE FUTURE: fix the SDK bug that the audio doesn't work
  // even if we set the configuration on iOS: `playsInSilentModeIOS`, if the video doesn't autoplay.
  // Walkaround by autoplay a silent audio in the background.
  useEffect(() => {
    const sound = new Audio.Sound();

    if (Platform.OS === "ios") {
      const playSilentSound = async () => {
        await sound.loadAsync(require("../assets/2-seconds-of-silence.mp3"));
        await sound.playAsync();
        await sound.setIsLoopingAsync(true);
      };
      void playSilentSound();
    }

    return () => {
      void sound.stopAsync();
      void sound.unloadAsync();
    };
  }, []);

  useEffect(() => {
    const focus = navigation.addListener("focus", (e) => {
      getUserScore().then((response) => {
        if (response == null) return;

        const score = response.data?.score;
        //console.log("Profile score = ", score);
        setScore(score);
      });

      getTrophies().then((response) => {
        if (response == null) return;

        const trophies = response;
        console.log(trophies);
        setTrophies(trophies);
      });
    });

    return () => focus;
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
        <View style={styles.homeContainer}>
          <View style={styles.userProfile}>
            <Image
              style={styles.userPortrait}
              source={require("../assets/portrait_placeholder.png")}
            />
            <View style={styles.userInfo}>
              <AppText style={styles.userName}>{user.name}</AppText>
              <View style={styles.userScore}>
                <AppText style={styles.userPoints}>Your Points:</AppText>
                <AppText style={styles.userPoints}>{score.toLocaleString()}</AppText>
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
          <ListItemSeparator />
          <TouchableOpacity 
            style={styles.musicBoxContainer}
            onPress={() => navigation.navigate(routes.TOOLBOX)}>
            <View style={styles.musicBoxIcon}>
              <MaterialCommunityIcons name="music-circle-outline" color={colors.yellowgreen} size={50} /> 
            </View>
            <AppText style={styles.musicBoxText}>{uistrings.MusicBox}</AppText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  homeContainer: {
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
    justifyContent: "flex-start",
  },
  musicBoxContainer: {
    height: 70,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 20,
    shadowOffset: { height: 5, width: 1 }, // IOS
    shadowColor: colors.yellowgreen, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5, // Android
  },
  musicBoxIcon: {
    marginLeft: 20,
  },
  musicBoxText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
    marginLeft: 15,
  },
  screen: {
    flex: 1,
    padding: 2,
  },
  titleContainer: {
    flexDirection: "row",
    height: "20%",
    marginVertical: 8,
  },
  userInfo: {
    flexDirection: "column",
    marginHorizontal: 10,
  },
  userName: {
    fontSize: 18,
    color: colors.black,
    fontWeight: "bold",
  },
  userPortrait: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  userProfile: {
    flexDirection: "row",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  userScore: {
    flexDirection: "row",
  },
  userPoints: {
    color: colors.black,
    fontSize: 15,
    fontWeight: "normal",
    marginRight: 5,
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
