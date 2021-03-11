import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView, View, FlatList, StyleSheet } from "react-native";
import { Video } from "expo-av";

import AppText from "../components/AppText";
import ActivityListItem from "../components/ActivityListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import routes from "../navigation/routes";

const activities = [
  {
    title: "Activity 1",
    name: "Jaw Exercise",
    description: "10-20 min",
    backgroudColor: colors.primary,
    thumbnail: require("../assets/jaw_exercise.jpg"),
    video: require("../assets/jaw_exercise.mov"),
    status: "Completed",
  },
  {
    title: "Activity 2",
    name: "Vowels",
    description: "10-20 min",
    backgroudColor: colors.primary,
    thumbnail: require("../assets/vowels.jpg"),
    video: require("../assets/vowels.mov"),
    status: "Not Completed",
  },
  {
    title: "Activity 3",
    name: "Breathing",
    description: "10-20 min",
    backgroudColor: colors.primary,
    thumbnail: require("../assets/breathing.jpg"),
    video: require("../assets/breathing.mov"),
    statys: "Not Completed",
  },
];

function LessonDetailsScreen({ navigation, route }) {
  const lesson = route.params;

  // Need to pause the video when navigate away to a new screen
  const player = React.useRef(null);
  const [lastState, setLastState] = useState();

  useEffect(() => {
    const blur = navigation.addListener("blur", () => {
      player?.current?.pauseAsync();
    });

    return blur;
  }, [navigation]); // only rerun the effect if navigation changes

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{lesson.Name}</AppText>
        <AppText style={styles.description}>{lesson.Description}</AppText>
        <Video
          source={lesson.IntroVideo.Url}
          ref={player}
          shouldPlay
          resizeMode="cover"
          useNativeControls
          style={styles.video}
        />
      </View>
      <ListItemSeparator />
      <SafeAreaView style={styles.activityContainer}>
        <FlatList
          data={activities}
          key={activities.title}
          numColumns={2}
          columnWrapperStyle={styles.activity}
          keyExtractor={(activities) => activities.title}
          renderItem={({ item }) => (
            <ActivityListItem
              title={item.title}
              name={item.name}
              description={item.description}
              thumbnail={item.thumbnail}
              video={item.video}
              status={item.status}
              onPress={() => navigation.navigate(routes.ACTIVITI_DETAILS, item)}
            />
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  description: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 10,
  },
  video: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  activityContainer: {
    padding: 10,
    marginTop: 20,
    alignItems: "center",
  },
  activity: {
    justifyContent: "space-between",
  },
});

export default LessonDetailsScreen;