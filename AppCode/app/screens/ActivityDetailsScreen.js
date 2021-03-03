import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";

function ActivityScreen({ route }) {
  const activity = route.params;

  return (
    <View style={styles.container}>
      <Video
        source={activity.video}
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
