import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

function ActivityListItem({ title, name, description, thumbnail, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.thumbnail}>
        <Image style={styles.image} source={thumbnail} />
      </TouchableOpacity>
      <View style={styles.detail}>
        <AppText style={styles.title}>{title}</AppText>
        {description && (
          <AppText style={styles.description}>{description}</AppText>
        )}
        {name && <AppText style={styles.name}>{name}</AppText>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    paddingBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  name: {
    fontSize: 14,
  },
  description: {
    fontSize: 14,
  },
  detail: {
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: "left",
    textAlignVertical: "top",
  },
  image: {
    flex: 0.5,
    height: 150,
    borderRadius: 5,
    aspectRatio: 1,
  },
  thumbnail: {
    alignItems: "center",
  },
  vdeo: {
    width: "100%",
    height: "100%",
  },
});

export default ActivityListItem;
