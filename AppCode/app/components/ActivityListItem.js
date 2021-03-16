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
  title,
  description,
  thumbnail,
  status,
  onPress,
}) {
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
        <AppText style={styles.title}>{title}</AppText>
        {description && (
          <AppText style={styles.description}>{description}</AppText>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    paddingBottom: 20,
  },
  video: {
    alignItems: "center",
    flex: 1,
  },
  thumbnail: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 1.5,
    borderRadius: 5,
  },
  imageStyle: {
    borderRadius: 6,
  },
  detail: {
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: "left",
    textAlignVertical: "top",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 0,
  },
  description: {
    fontSize: 14,
  },
});

export default ActivityListItem;
