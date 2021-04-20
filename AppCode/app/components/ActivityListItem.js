import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import AppText from "./AppText";
import Status from "./Status";

function ActivityListItem({
  id,
  name,
  description,
  duration,
  thumbnail,
  status,
  onPress,
}) {
  const durationMin = duration / 60;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.video}>
        {thumbnail && (
          <ImageBackground
            style={styles.thumbnail}
            source={thumbnail}
            imageStyle={styles.imageStyle}
          >
            {status && <Status name={status} />}
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
    width: "47%",
    paddingBottom: 20,
  },
  video: {
    alignItems: "center",
    flex: 1,
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
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
    fontWeight: "bold",
  },
  id: {
    fontSize: 12,
    fontWeight: "bold",
    paddingRight: 5,
  },
  duration: {
    fontSize: 12,
    textAlign: "right",
  },
  descSect: {
    flex: 0.7,
    flexDirection: "row",
  },
  durationSect: {
    flex: 0.3,
  },
});

export default ActivityListItem;
