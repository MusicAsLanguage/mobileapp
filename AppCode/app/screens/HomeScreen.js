import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { Video } from "expo-av";

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import LessonListItem from "../components/LessonListItem";
import colors from '../config/colors';
import getLessons from '../api/lessons';
import routes from '../navigation/routes';
import ListItemSeparator from "../components/ListItemSeparator";
import useAuth from "../auth/useAuth";
import uistrings from '../config/uistrings';
import { getActivityStatus } from "../api/status";

function HomeScreen({ navigation }) {
    /// <Start> This is the code getting lesson info json file from webservice. The data will be stored in 'programs'.
    const [lessons, setLessons] = useState([]);
    const player = useRef(null);
    const [activityStatus, setActivityStatus] = useState();
  const { logOut } = useAuth();

    useEffect(() => {
        let mounted = true;
        getLessons()
        .then(response => {
        if(mounted) {
        let lessons2 = response.data[0].Phases[0].Lessons
        setLessons(lessons2)
        }
        })
        return () => mounted = false;
    }, []);

    useEffect(() => {
        const blur = navigation.addListener("blur", () => {
        player?.current?.pauseAsync();
        });
    
        return blur;
    }, [navigation]); // only rerun the effect if navigation changes

    useEffect(() => {
      const focus = navigation.addListener("focus", () => {
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
      });

      return focus;
    }, [navigation]);

    const GetLessonStatus = (lessonId) => {
      try {
        let lessonStatus = 0;

        if (activityStatus == undefined) return 0;

        const activity = activityStatus.filter(
          (item) => item.LessonId == lessonId
        );

        const completionStatus = activity.map((item) => {
          return item.CompletionStatus;
        });

        const completedStatus = completionStatus.reduce(
          (totalCompleted, activityStatus) => {
            // Increment if an activity was completed (10 == 100%)
            if (activityStatus == 10) totalCompleted = totalCompleted + 1;

            return totalCompleted;
          },
          0
        );

        // Get total count of activities in order to calculate the lesson completion
        const lesson = lessons.filter((item) => item._id == lessonId);

        let acitivityCount = lesson[0].Activities.length;
        acitivityCount = acitivityCount == undefined ? 0 : acitivityCount;

        lessonStatus = Math.round((completedStatus / acitivityCount) * 100);

        if (isNaN(lessonStatus)) lessonStatus = 0;

        return lessonStatus;
      } catch (error) {
        console.log(error);
      }
    };

    const renderItem = (item) => {
      let percentage = GetLessonStatus(item._id);

      if (percentage == undefined) percentage = 0;

      return (
        <LessonListItem
          title={item.Name}
          subTitle="10 min" // subTitle={item.CourseDuration}
          image={require("../assets/breathing.jpg")} // image={{uri: item.ImageUrl}}
          progress={percentage} // API to get course progress (0-100)
          onPress={() => navigation.navigate(routes.LESSON_DETAILS, item)}
        />
      );
    };

    return (
      <Screen style={styles.screen}>
        <View style={styles.introContainer}>
          <View style={styles.introVideoContainer}>
            <Video
              source={require("../assets/sample_video.mp4")}
              ref={player}
              shouldPlay
              resizeMode="cover"
              useNativeControls
              style={styles.introVideo}
            />
            <View style={styles.titleContainer}>
              <AppText style={styles.introTitle}>Introduction</AppText>
              <AppText style={styles.introDescription}>
                Introduction of Music of Language
              </AppText>
              <ListItemSeparator />
            </View>
          </View>

          <View style={styles.lessonContainer}>
            <FlatList
              data={lessons}
              keyExtractor={(lesson) => lesson._id.toString()}
              renderItem={({ item }) => renderItem(item)}
            />
          </View>
        </View>
      </Screen>
    );
}

const styles = StyleSheet.create({
    introContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
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
        backgroundColor:colors.white
    },
    titleContainer: {
        padding: 20,
    },
})

export default HomeScreen;