import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import { Audio, Video } from "expo-av";
import ActivityCompletion from "../components/ActivityCompletion";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ErrorMessage from "../components/forms/ErrorMessage";
import uistrings from "../config/uistrings";
import LoadingIndicator from "../components/LoadingIndicator";
import ScoreNotification from "../components/ScoreNotification";
import useRewardConfig from "../data/config/reward";
import PracticeModeCamera from "../components/PracticeModeCamera";
import { getLocalVideoCache } from "../cache/videocache";

function ActivityScreen({ navigation, route }) {
  const {
    lessonId,
    activityId,
    activityVideo,
    activityPlayState,
    activityScore,
    activityRepeats,
    practiceMode,
  } = route.params;
  const player = React.useRef(null);
  const [videoFinished, setVideoFinished] = useState(false);
  const [earnedScore, setEarnedScore] = useState(false);
  const [repeatPoint, setRepeatPoint] = useState(0);
  const [score, setScore] = useState(0);
  const [playCounts, setPlayCounts] = useState(0);
  const [status, setStatus] = useState({});
  const [workaround, setWorkaround] = useState(false);

  const durationRef = useRef(0);
  const positionRef = useRef(0);
  const repeatsRef = useRef(0);
  const startPositionRef = useRef(0);

  const { onPlayStateChanged, playStateChanged, updateStatusData } =
    useLesson();
  const { getActivityRepeatPoint } = useRewardConfig();

  // Add ability to refresh the data
  const [refreshing, setRefreshing] = useState(false);
  const [videoUri, setVideoUri] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const fetchRewardConfig = (mounted) => {
    if (mounted === false) return;

    getActivityRepeatPoint().then((response) => {
      if (response) {
        const repeatPoint = response;
        setRepeatPoint(repeatPoint);
      }
    });
  };

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    // clear the error message displayed on video screen
    setErrorMsg("");

    wait(2000).then(() => {
      // refresh the data

      // set "refresh" as signal so Video onError will ignore it
      setVideoUri("refresh");

      // workaround as the video does not load the second time due to videoUri not getting in time
      wait(500).then(() => {
        getLocalVideoCache(activityVideo.Url).then((cachedVideo) => {
          if (cachedVideo == "") {
            setVideoUri(activityVideo.Url);
          } else {
            setVideoUri(cachedVideo);
          }
        });
        // const fileInfo = FileSystem.getInfoAsync(activityVideo.Url);
        // console.log(fileInfo)
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
      // Workaround to hide the status bar & the tab bar to make video full screen
      const parent = navigation.dangerouslyGetParent();
      parent.setOptions({
        tabBarVisible: false,
      });

      if (Platform.OS === "ios") {
        navigation.setOptions({
          headerBackTitle: " ",
        });
      }

      StatusBar.setHidden(true, "none");

      getLocalVideoCache(activityVideo.Url).then((cachedVideo) => {
        if (cachedVideo == "") {
          setVideoUri(activityVideo.Url);
        } else {
          setVideoUri(cachedVideo);
        }
      });

      fetchRewardConfig(mounted);
      repeatsRef.current = activityRepeats;

      setPlayCounts(Math.floor(activityPlayState / 10) + activityRepeats * 1);

      return () => {
        parent.setOptions({
          tabBarVisible: true,
        });
        mounted = false;
      };
    }
  }, []); // Run only once at mount

  useEffect(() => {
    const blur = navigation.addListener("blur", (e) => {
      player?.current?.pauseAsync();

      const completionStatus = Math.floor(
        (positionRef.current / durationRef.current) * 10
      );

      const data = {
        CompletionStatus: completionStatus,
        ActivityId: activityId,
        LessonId: lessonId,
        Repeats: repeatsRef.current,
      };

      // console.log(data);

      if (completionStatus != activityPlayState) {
        onPlayStateChanged(true);
      }

      updateStatusData(data).then((response) => {
        if (response == null) {
          console.warn(response);
        }
      });
    });

    return () => {
      blur;
    };
  }, [navigation]); // only rerun the effect if navigation changes

  useEffect(() => {
    if (videoFinished === true && playStateChanged === true) {
      //console.log("should earn score", playStateChanged);
      setEarnedScore(true);
    } else {
      setEarnedScore(false);
    }
  }, [playStateChanged, videoFinished]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (status.durationMillis === undefined) return;

      durationRef.current = status.durationMillis;
      positionRef.current = status.positionMillis;

      //console.log(positionRef.current, ",", durationRef.current);

      if (positionRef.current === durationRef.current) {
        setVideoFinished(true);
      } else {
        setVideoFinished(false);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [status.positionMillis]);

  useEffect(() => {
    if (status?.didJustFinish === true) {
      if (workaround === false) {
        onPlayStateChanged(true);
        if (playCounts === 0) {
          setScore(activityScore);
        } else {
          setScore(activityScore * repeatPoint);
        }
        setPlayCounts(playCounts + 1);
      }
    }

    // clear off workaround flag so next time
    // play finished consider it intended
    setWorkaround(false);
  }, [status?.didJustFinish]);

  useEffect(() => {
    if (playCounts > 0) {
      repeatsRef.current = playCounts - 1;
    }
  }, [playCounts]);

  const onBack = () => {
    navigation.goBack();
  };

  const onReplay = () => {
    // Replay from the beginning
    player.current.replayAsync();
  };

  const onLoad = async (playbackStatus) => {
    // console.log("loaded ", new Date());
    setErrorMsg("");
    const durationMillis = playbackStatus.durationMillis;

    if (durationMillis != 0) {
      const startPos = durationMillis * (activityPlayState / 10);
      startPositionRef.current = startPos;

      if (Platform.OS === "ios") {
        const status = await player.current.setPositionAsync(startPos, {
          toleranceMillisBefore: 0,
          toleranceMillisAfter: 0,
        });

        //console.log(status);

        // workaround: seek on iOS is not accurate so if the positionMilli is not what is expected
        // let it play
        if (durationMillis - status.positionMillis < 10) {
          setWorkaround(true);
          await player.current.playAsync();
        }
      } else {
        setWorkaround(false);
        const status = await player.current.setPositionAsync(startPos);
      }
    }
  };

  const onError = async (err) => {
    // videoUri == "refreshing" is just to force the state refresh so ignore the error
    if (videoUri == "refresh") return;

    // console.log(
    //   //"Did you notice problem loading the video? Pull screen to retry"
    //   err,
    //   "-",
    //   videoUri
    // );

    setErrorMsg(uistrings.VideoWasNotLoadedPullToRetry);
  };

  const showScoreMsg = () => {
    //console.log("score=", score);
    return <ScoreNotification score={score} />;
  };

  const showEndState = () => {
    // If video finishes playing,
    // Show "Replay button"
    return (
      <>
        {earnedScore && showScoreMsg()}
        {<ActivityCompletion onBack={onBack} onReplay={onReplay} />}
      </>
    );
  };

  const showErrorMessage = () => {
    if (errorMsg != "") {
      return (
        <View style={styles.errorMsgContainer}>
          <ErrorMessage
            error={errorMsg}
            visible={true}
            style={styles.errorMsg}
          />
          <Icon
            name="arrow-down-circle"
            iconColor={colors.white}
            backgroudColor="transparent"
            size={160}
            style={styles.musicnote}
          />
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            tintColor={colors.white}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View style={{ flex: 1 }}>
          {!videoUri ? (
            <LoadingIndicator />
          ) : (
            <Video
              source={{ uri: videoUri }}
              ref={player}
              shouldPlay={false}
              resizeMode="cover"
              useNativeControls
              // onLoadStart={() =>
              //   console.log("load start ", new Date(), " - ", videoUri)
              // }
              onLoad={onLoad}
              onError={onError}
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              progressUpdateIntervalMillis={800}
              style={videoFinished ? styles.videoFaded : styles.video}
            />
          )}

          {showErrorMessage()}
          {videoFinished && showEndState()}
        </View>
        {practiceMode === true ? (
          <PracticeModeCamera navigation={navigation} />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollView: {
    flex: 1,
  },
  video: {
    marginTop: 35,
    flex: 1,
  },
  videoFaded: {
    marginTop: 35,
    width: "100%",
    height: "100%",
    opacity: 0.1,
  },
  errorMsgContainer: {
    position: "absolute",
    flexDirection: "column",
    marginTop: 150,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  errorMsg: {
    color: colors.white,
    textAlign: "center",
  },
});

export default ActivityScreen;
