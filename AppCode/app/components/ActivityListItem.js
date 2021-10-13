import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import AppText from "./AppText";
import ActivityStatus from "./ActivityStatus";

function ActivityListItem({
  id,
  name,
  description,
  duration,
  thumbnail,
  status,
  onPress,
}) {
  const durationMin = Math.round(duration / 60);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.video}>
        {thumbnail && (
          <ImageBackground
            style={styles.thumbnail}
            source={thumbnail}
            imageStyle={styles.imageStyle}
          >
            {<ActivityStatus value={status} />}
          </ImageBackground>
        )}
      </TouchableOpacity>
      <View style={styles.detail}>
        <View style={styles.descSect}>
          <AppText style={styles.id}>{id}</AppText>
          {description && <AppText style={styles.name}>{name}</AppText>}
        </View>
        <View style={styles.durationSect}>
          {duration && (
            <AppText style={styles.duration}>{durationMin} mins</AppText>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    paddingBottom: 20,
  },
  video: {
    alignItems: "center",
    flex: 1,
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    aspectRatio: 1.5,
    borderRadius: 5,
  },
  imageStyle: {
    borderRadius: 6,
  },
  detail: {
    textAlignVertical: "top",
    flexDirection: "row",
    marginTop: 10,
  },
  name: {
    fontSize: 12,
  },
  id: {
    fontSize: 12,
    paddingRight: 5,
  },
  duration: {
    fontSize: 12,
    textAlign: "right",
  },
  descSect: {
    flex: 1.5,
    flexDirection: "row",
  },
  durationSect: {
    flex: 1,
  },
});

export default ActivityListItem;
