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

function ActivityScreen({ navigation, route }) {
  const { lessonId, activityId, activityVideo, activityPlayState } =
    route.params;
  const player = React.useRef(null);
  const [videoFinished, setVideoFinished] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [completion, setCompletion] = useState(0);

  const durationRef = useRef(0);
  const positionRef = useRef(0);
  const completionRef = useRef(0);

  const { onPlayStateChanged, updateStatusData } = useLesson();

  // Add ability to refresh the data
  const [refreshing, setRefreshing] = useState(false);
  const [videoUri, setVideoUri] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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
        setVideoUri(activityVideo.Url);
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

      setVideoUri(activityVideo.Url);

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

      const data = {
        CompletionStatus: completionRef.current,
        ActivityId: activityId,
        LessonId: lessonId,
      };

      if (completionRef.current != activityPlayState) {
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

  const onBack = () => {
    navigation.goBack();
  };

  const onReplay = () => {
    // Replay from the beginning
    player.current.replayAsync();
    onPlayStateChanged(true);
  };

  const onLoad = async (playbackStatus) => {
    setErrorMsg("");
    const durationMillis = playbackStatus.durationMillis;
    durationRef.current = durationMillis;
    setDuration(durationMillis);
    if (durationMillis != 0) {
      const startPos = durationMillis * (activityPlayState / 10);
      // player.current.playFromPositionAsync(startPos);
      // player.current.pauseAsync();
      player.current.setPositionAsync(startPos);
    }
  };

  const onError = async (err) => {
    // videoUri == "refreshing" is just to force the state refresh so ignore the error
    if (videoUri == "refresh") return;

    console.log(
      //"Did you notice problem loading the video? Pull screen to retry"
      err,
      "-",
      videoUri
    );

    setErrorMsg(uistrings.VideoWasNotLoadedPullToRetry);
  };

  const onPlaybackStatusUpdate = async (playbackStatus) => {
    const durationMillis = playbackStatus.durationMillis;
    const positionMillis = playbackStatus.positionMillis;
    const completionRate = Math.floor((positionMillis / durationMillis) * 10);

    durationRef.current = durationMillis;
    positionRef.current = positionMillis;
    completionRef.current = completionRate;

    setPosition(positionMillis);
    setDuration(durationMillis);
    setCompletion(completionRate);

    if (completionRate === 10) {
      setVideoFinished(true);
    } else {
      setVideoFinished(false);
    }
  };

  const showEndState = () => {
    // If video finishes playing,
    // Show "Go Back", and "Replay button"
    if (videoFinished === true) {
      return <ActivityCompletion onBack={onBack} onReplay={onReplay} />;
    }
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
        <Video
          source={{ uri: videoUri }}
          ref={player}
          shouldPlay={false}
          resizeMode="cover"
          useNativeControls
          onLoad={onLoad}
          onError={onError}
          onPlaybackStatusUpdate={onPlaybackStatusUpdate}
          style={videoFinished ? styles.videoFaded : styles.video}
        />
        {showErrorMessage()}
        {showEndState()}
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
    width: "100%",
    height: "90%",
  },
  videoFaded: {
    marginTop: 35,
    width: "100%",
    height: "90%",
    opacity: 0.5,
  },
  errorMsgContainer: {
    position: "absolute",
    flexDirection: "column",
    marginTop: 250,
    marginLeft: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  errorMsg: {
    color: colors.white,
    textAlign: "center",
  },
});

export default ActivityScreen;
