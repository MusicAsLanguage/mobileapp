import React, { useEffect, useState } from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import { Video } from "expo-av";

function ActivityScreen({ navigation, route }) {
  const activity = route.params;
  const player = React.useRef(null);

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

  return (
    <View style={styles.container}>
      <Video
        source={{uri: activity.Videos[0].Url}}
        ref={player}
        shouldPlay
        resizeMode="cover"
        useNativeControls
        style={styles.video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: "100%",
    height: "100%",
  },
});

export default ActivityScreen;
