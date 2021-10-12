import React, { useEffect } from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import { Video } from "expo-av";
import { updateActivityStatus } from "../api/status";

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

  let durationMillis = 0;
  let positionMillis = 0;
  let completionRate = 0;

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
    const blur = navigation.addListener("blur", () => {
      const data = {
        CompletionStatus: completionRate,
        ActivityId: activityId,
        LessonId: lessonId,
      };

      if (completionRate != activityPlayState) {
        onPlayStateChange(true);
      }

      updateActivityStatus(data)
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
    });

    return () => {
      blur;
    };
  }, [navigation]); // only rerun the effect if navigation changes

  const onLoad = async (playbackStatus) => {
    durationMillis = playbackStatus.durationMillis;
    if (durationMillis != 0) {
      const startPos = durationMillis * (activityPlayState / 10);
      player.current.playFromPositionAsync(startPos);
    }
  };

  const onPlaybackStatusUpdate = (playbackStatus) => {
    positionMillis = playbackStatus.positionMillis;
    completionRate = Math.ceil((positionMillis / durationMillis) * 10);
  };

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
