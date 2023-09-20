import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import AppText from "./AppText";
import ActivityStatus from "./ActivityStatus";
import colors from "../config/colors";
import Icon from "./Icon";

function ActivityListItem({
  id,
  name,
  description,
  duration,
  thumbnail,
  status,
  repeats,
  practiceMode,
  onPress,
}) {
  const durationMin = Math.round(duration / 60);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.video}>
        {thumbnail && (
          <ImageBackground
            style={styles.thumbnail}
            source={{ uri: thumbnail.uri, cache: "force-cache" }}
            imageStyle={styles.imageStyle}
          >
            <View style={styles.thumbnailbottompanel}>
              {<ActivityStatus value={status} />}
              {practiceMode ? (
                <Icon name="video" size={25} backgroudColor={colors.red} />
              ) : null}
            </View>
          </ImageBackground>
        )}
      </View>

      <View style={styles.detail}>
        {id && <AppText style={styles.nameIndex}>Activity{id}</AppText>}
        {description && <AppText style={styles.name}>{name}</AppText>}
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    marginVertical: 10,
  },
  video: {
    height: 60,
    width: 68,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  thumbnail: {
    height: "100%",
    justifyContent: "flex-end",
  },
  thumbnailbottompanel: {
    flexDirection: "row",
    //justifyContent: "space-between",
    alignItems: "center",
    flex: 0.4,
    width: "100%",
    marginLeft: -17,
  },
  repeatcount: {
    //backgroundColor: colors.darkviolet,
    borderRadius: 20,
    justifyContent: "center",
  },
  imageStyle: {
    borderRadius: 6,
  },
  detail: {
    flexDirection: "column",
    marginHorizontal: 5,
  },
  name: {
    fontSize: 16,
  },
  nameIndex: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ActivityListItem;
