import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import { Video } from "expo-av";
import { updateActivityStatus } from "../api/status";
import ActivityCompletion from "../components/ActivityCompletion";

// Temporary workaround to be able to use callback to pass the data back to previous screen without causing warning
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

function ActivityScreen({ navigation, route }) {
  const {
    lessonId,
    activityId,
    activityVideo,
    activityPlayState,
    onPlayStateChange,
  } = route.params;
  const player = React.useRef(null);
  const [videoFinished, setVideoFinished] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [completion, setCompletion] = useState(0);

  const durationRef = useRef(0);
  const positionRef = useRef(0);
  const completionRef = useRef(0);


  useEffect(() => {
    // Workaround to hide the status bar & the tab bar to make video full screen
    const parent = navigation.dangerouslyGetParent();
    parent.setOptions({
      tabBarVisible: false,
    });

    StatusBar.setHidden(true, "none");

    return () =>
      parent.setOptions({
        tabBarVisible: true,
      });
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
        onPlayStateChange(true);
      }

      updateActivityStatus(data)
        .then((response) => {
          if (response == null) {
            console.warn(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });

    return () => {
      blur;
    };
  }, [navigation]); // only rerun the effect if navigation changes


  const onBack = () => {
    navigation.goBack();
  }

  const onReplay = () => {
    // Replay from the beginning
    player.current.replayAsync();
    onPlayStateChange(true);
  }

  const onLoad = async (playbackStatus) => {
    const durationMillis = playbackStatus.durationMillis;
    durationRef.current = durationMillis;
    setDuration(durationMillis)
    if (durationMillis != 0) {
      const startPos = durationMillis * (activityPlayState / 10);
      player.current.playFromPositionAsync(startPos);
    }
  };

  const onPlaybackStatusUpdate = async (playbackStatus) => {
    const durationMillis = playbackStatus.durationMillis;
    const positionMillis = playbackStatus.positionMillis;
    const completionRate = Math.ceil((positionMillis / durationMillis) * 10);

    durationRef.current = durationMillis;
    positionRef.current = positionMillis;
    completionRef.current = completionRate;

    setPosition(positionMillis);
    setDuration(durationMillis);
    setCompletion(completionRate)

    if (playbackStatus.didJustFinish === true) {
      setVideoFinished(true);
    }
    else {
      setVideoFinished(false);
    }
  };

  const showEndState = () => {

    // If video finishes playing,
    // Show "Go Back", and "Replay button"
    if (videoFinished === true) {

      return (

        <ActivityCompletion
          onBack={onBack}
          onReplay={onReplay}
        />)
    }

  }

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: activityVideo.Url }}
        ref={player}
        shouldPlay
        resizeMode="cover"
        useNativeControls
        onLoad={onLoad}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        style={styles.video}
      />
      {showEndState()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});

export default ActivityScreen;
